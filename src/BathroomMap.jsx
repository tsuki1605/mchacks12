import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import "./styles.css";

const bathroomIcon = new L.Icon({
  iconURL: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const bathroomData = [
  { id: 1, name: "Eaton Center Bathroom", position: [45.50362, 73.57105] },
  {id: 2, name: "Concordia Univeristy Bathroom", position: [45.49652, 73.57932] },
  {id: 3, name: "Parc Linéaire de la Commune Bathroom", position: [45.50282, 73.55308] },
  { id: 4, name: "Mont Roayl Park Bathroom", position: [45.49844, 73.59915] },
  { id: 5, name: "King George Park Bathroom", position: [45.48551, 73.60537] },
];

export const BathroomMap=() => {
  const position = [45.49652, -73.57932];
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const [filters, setFilters] = useState({
    cost: 'any',
    crowd: 'any',
    clean: 'any',
    genderNeutral: 'no',
    accessible: 'no',
  })

  const filteredBathrooms = bathroomData.filter((bathroom) => {
    return (
      (filters.cost === 'any' || bathroom.cost === filters.cost) &&
      (filters.crowd === 'any' || bathroom.crowd === filters.crowd) &&
      (filters.clean === 'any' || bathroom.clean === filters.clean) &&
      (filters.genderNeutral === 'no' || bathroom.genderNeutral === filters.genderNeutral) &&
      (filters.accessible === 'no' || bathroom.accessible === filters.accessible)
    )
  }); 

  {/* Filter Controls */}
  <div className="flex flex-wrap gap-4 mb-4">
  <label className="flex items-center gap-2">
    <span>Cost:</span>
    <select
      value={filters.cost}
      onChange={(e) => setFilters({ ...filters, cost: e.target.value })}
      className="p-1 border rounded"
    >
      <option value="any">Any</option>
      <option value="free">Free</option>
    </select>
  </label>
  <label className="flex items-center gap-2">
    <span>Crowd:</span>
    <select
      value={filters.crowd}
      onChange={(e) => setFilters({ ...filters, crowd: e.target.value })}
      className="p-1 border rounded"
    >
      <option value="any">Any</option>
      <option value="I">I</option>
      <option value="II">II</option>
      <option value="III">III</option>
    </select>
  </label>
  <label className="flex items-center gap-2">
          <span>Clean:</span>
          <select
            value={filters.clean}
            onChange={(e) => setFilters({ ...filters, clean: e.target.value })}
            className="p-1 border rounded"
          >
            <option value="any">Any</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span>Gender Neutral:</span>
          <select
            value={filters.genderNeutral}
            onChange={(e) => setFilters({ ...filters, genderNeutral: e.target.value })}
            className="p-1 border rounded"
          >
            <option value="any">Any</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
        <label className="flex items-center gap-2">
          <span>Accessible:</span>
          <select
            value={filters.accessible}
            onChange={(e) => setFilters({ ...filters, accessible: e.target.value })}
            className="p-1 border rounded"
          >
            <option value="any">Any</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </label>
      </div>

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">
        Interactive Bathroom Map - Montreal
      </h1>
      <div className="w-full h-96">
        <MapContainer
          center={[45.5017, -73.5673]}
          zoom={13}
          className="h-full w-full rounded-xl shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
          />
          {bathroomData.map((bathroom) => (
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
      {selectedBathroom && (
        <Card className="mt-4 w-full max-w-md">
          <CardContent>
            <h2 className="text-lg font-semibold">{selectedBathroom.name}</h2>
            <p className="text-sm">Latitude: {selectedBathroom.position[0]}</p>
            <p className="text-sm">Longitude: {selectedBathroom.position[1]}</p>
            <p className="text-sm">Cost: {selectedBathroom.cost}</p>
            <p className="text-sm">Crowd: {selectedBathroom.crowd}</p>
            <p className="text-sm">Clean: {selectedBathroom.clean}</p>
            <p className="text-sm">Gender Neutral: {selectedBathroom.genderNeutral}</p>
            <p className="text-sm">Accessible: {selectedBathroom.accessible}</p>
            <Button className="mt-2" onClick={() => setSelectedBathroom(null)}>
              Close
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}