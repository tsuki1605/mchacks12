import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const bathroomIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const bathroomData = [
  { id: 1, name: "Eaton Center Bathroom", position: [45.50362, -73.57105], cost: "free", crowd: "II", clean: "I", genderNeutral: "yes", accessible: "yes" },
  { id: 2, name: "Concordia University Bathroom", position: [45.49652, -73.57932], cost: "free", crowd: "III", clean: "II", genderNeutral: "no", accessible: "yes" },
  { id: 3, name: "Parc Linéaire de la Commune Bathroom", position: [45.50282, -73.55308], cost: "free", crowd: "I", clean: "III", genderNeutral: "yes", accessible: "no" },
  { id: 4, name: "Mont Royal Park Bathroom", position: [45.49844, -73.59915], cost: "free", crowd: "II", clean: "II", genderNeutral: "no", accessible: "yes" },
  { id: 5, name: "King George Park Bathroom", position: [45.48551, -73.60537], cost: "free", crowd: "I", clean: "I", genderNeutral: "yes", accessible: "no" },
];

export const BathroomMap = () => {
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const [filters, setFilters] = useState({
    free: false, // "any" for cost
    crowdI: true, // Default checked
    crowdII: true, // Default checked
    crowdIII: true, // Default checked
    cleanI: true, // Default checked
    cleanII: true, // Default checked
    cleanIII: true, // Default checked
    genderNeutral: false, // Default "no"
    accessible: false, // Default "no"
  });

  const handleFilterChange = (filter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  const filteredBathrooms = bathroomData.filter((bathroom) => {
    return (
      (!filters.free || bathroom.cost === "free") &&
      (!filters.crowdI || bathroom.crowd === "I") &&
      (!filters.crowdII || bathroom.crowd === "II") &&
      (!filters.crowdIII || bathroom.crowd === "III") &&
      (!filters.cleanI || bathroom.clean === "I") &&
      (!filters.cleanII || bathroom.clean === "II") &&
      (!filters.cleanIII || bathroom.clean === "III") &&
      (!filters.genderNeutral || bathroom.genderNeutral === "yes") &&
      (!filters.accessible || bathroom.accessible === "yes")
    );
  });

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Loocation</h1>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 mb-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.free}
            onChange={() => handleFilterChange("free")}
          />
          <span>Free</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.crowdI}
            onChange={() => handleFilterChange("crowdI")}
          />
          <span>Crowd I</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.crowdII}
            onChange={() => handleFilterChange("crowdII")}
          />
          <span>Crowd II</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.crowdIII}
            onChange={() => handleFilterChange("crowdIII")}
          />
          <span>Crowd III</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.cleanI}
            onChange={() => handleFilterChange("cleanI")}
          />
          <span>Clean I</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.cleanII}
            onChange={() => handleFilterChange("cleanII")}
          />
          <span>Clean II</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.cleanIII}
            onChange={() => handleFilterChange("cleanIII")}
          />
          <span>Clean III</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.genderNeutral}
            onChange={() => handleFilterChange("genderNeutral")}
          />
          <span>Gender Neutral (Yes)</span>
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.accessible}
            onChange={() => handleFilterChange("accessible")}
          />
          <span>Accessible (Yes)</span>
        </label>
      </div>

      {/* Map Section */}
      <div>
        <MapContainer
          center={[45.5017, -73.5673]}
          zoom={13}
          style={{ width: "100wh", height: "100vh" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
          {filteredBathrooms.map((bathroom) => (
            <Marker
              key={bathroom.id}
              position={bathroom.position}
              icon={bathroomIcon}
              eventHandlers={{
                click: () => setSelectedBathroom(bathroom),
              }}
            />
          ))}
        </MapContainer>
      </div>

      {/* Selected Bathroom Details */}
      {selectedBathroom && (
        <div className="mt-4 w-full max-w-md p-4 border rounded shadow-md bg-white">
          <h2 className="text-lg font-semibold">{selectedBathroom.name}</h2>
          <p className="text-sm">Latitude: {selectedBathroom.position[0]}</p>
          <p className="text-sm">Longitude: {selectedBathroom.position[1]}</p>
          <p className="text-sm">Cost: {selectedBathroom.cost}</p>
          <p className="text-sm">Crowd: {selectedBathroom.crowd}</p>
          <p className="text-sm">Clean: {selectedBathroom.clean}</p>
          <p className="text-sm">Gender Neutral: {selectedBathroom.genderNeutral}</p>
          <p className="text-sm">Accessible: {selectedBathroom.accessible}</p>
          <button
            onClick={() => setSelectedBathroom(null)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};
