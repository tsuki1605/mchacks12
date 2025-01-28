import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import './flter.css';
import toiletMapImg from './IMG/toilet_map_img.png';
import accessibilityImg from './IMG/accessibility_img.png';
import neutralGenderImg from './IMG/neutralgender_img.png';
import water_filter_img from './IMG/water_filter_img.png';
  import toilet_filter_img from './IMG/toilet_filter_img.png';
  import water_hot_img from './IMG/water_hot_img.png'
  import water_cold_img from './IMG/water_cold_img.png'
  import water_spark_img from './IMG/water_spark_img.png'

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
    free: false, // Default: "any"
    crowdI: true, // Default checked
    crowdII: true, // Default checked
    crowdIII: true, // Default checked
    cleanI: true, // Default checked
    cleanII: true, // Default checked
    cleanIII: true, // Default checked
    genderNeutral: false, // Default "no"
    accessible: false, // Default "no"
  });

  const bathroomIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [32, 32],
  });

  const bathroomData = [
    {
      id: 1,
      name: "Central Bathroom",
      position: [45.5017, -73.5673],
      cost: "free",
      crowd: "III",
      clean: "I",
      genderNeutral: "yes",
      accessible: "yes",
      address: "677 Saint-Catherine St W",
    },
    {
      id: 2,
      name: "West Bathroom",
      position: [45.508, -73.554],
      cost: "paid",
      crowd: "II",
      clean: "III",
      genderNeutral: "no",
      accessible: "yes",
      address: "123 West Avenue",
    },
    // Add more bathrooms as needed
  ];

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
    <div className="page2_display">
  <div className="row filter shared_padding">
    <div>
      <text className="title" shared_margin>
        Filters
      </text>
    </div>
    <div>
      <div className="icon_filter_layout shared_padding">
        <div>
        
          <img className="icon_filter" src={water_filter_img}/>
          <img className="icon_filter" src={toilet_filter_img} />
        </div>
      </div>
    </div>
    <div className="toilet_filter shared_padding">
      <div>
        <text className="title_filter shared_margin">TOILET</text>

        <div>
          <div className="shared_margin">
            <text className="property_filter">COST: </text>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              Any
            </label>
            <input
              type="checkbox"
            checked={filters.free}
            onChange={() => handleFilterChange("free")}
            />
            <label className="checkbox_filter">
              Free
            </label>
          </div>
          <div className="shared_margin">
            <text className="property_filter">CROWD: </text>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              I
            </label>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              II
            </label>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              III
            </label>
          </div>
          <div className="shared_margin">
            <text className="property_filter">CLEAN: </text>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              I
            </label>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              II
            </label>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              III
            </label>
          </div>
          <div className="shared_margin">
            <text className="property_filter">GENDER NEUTRAL: </text>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              YES
            </label>
          </div>
          <div className="shared_margin">
            <text className="property_filter">ACCESSIBILITY: </text>
            <input
              type="checkbox"
              id="accessibility"
              name="accessibility"
              value="yes"
            />{" "}
            <label htmlFor="accessibility" className="checkbox_filter">
              YES
            </label>
          </div>
        </div>
      </div>
    </div>
    {/* WATER */}
    <div className="row water_filter shared_padding">
      <div>
        <text className="title_filter shared_margin">WATER</text>
      </div>

      <div className="v_center col water_col">
        <div className="water shared_margin">
          <div className="row h_center shared_margin">
          
            <img className="h_center water_icon" src={water_hot_img} />
            <div className="centered_text">HOT</div>
          </div>
        </div>
        <div className="water shared_margin">
          <div className="row h_center shared_margin">
          
            <img className="h_center water_icon" src={water_cold_img} />
            <div className="centered_text">COLD</div>
          </div>
        </div>
        <div className="water shared_margin">
          <div className="row h_center shared_margin">
            <img className="v_center water_icon" src={water_spark_img} />
            <div className="centered_text">SPARKLING</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="map_display"></div>

  
      {/* Map Section */}
      <MapContainer
        center={[45.5017, -73.5673]}
        zoom={13}
        style={{ width: "100wh", height: "50vh" }}
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
          >
            <Tooltip>{bathroom.name}</Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Selected Bathroom Details Panel */}
      {selectedBathroom && (
        <div className="row panel shared_padding mt-4 w-full max-w-md p-4 border rounded shadow-md bg-white">
          <div className="col panel_no_address">
            <div className="row toilet_logo_panel">
              <div>
                <img
                  className="icon_panel"
                  src={toiletMapImg}
                  alt="Toilet Logo"
                />
              </div>
              <div>
                <img
                  src={accessibilityImg}
                  alt="Accessibility"
                />
                <img
                  src={neutralGenderImg}
                  alt="Gender Neutral"
                />
              </div>
            </div>
            <div className="property_panel row shared_padding">
              <div>
                <span className="property_filter">COST:</span>
                <span className="address_text">{selectedBathroom.cost}</span>
              </div>
              <div>
                <span className="property_filter">CROWD:</span>
                <span className="address_text">{selectedBathroom.crowd}</span>
              </div>
              <div>
                <span className="property_filter">CLEAN:</span>
                <span className="address_text">{selectedBathroom.clean}</span>
              </div>
            </div>
          </div>
          <div className="shared_padding">
            <span className="address_title_text">ADDRESS:</span>
            <span className="address_text">{selectedBathroom.address}</span>
          </div>
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
const MapWithPropertyPanel = ({ bathroomData }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  // Handle marker click and set active marker
  const handleMarkerClick = (id) => {
    setActiveMarker(id); // Update active marker with the clicked marker's ID
  };

  // Find the active bathroom details
  const activeBathroom = bathroomData.find((b) => b.id === activeMarker);

  return (
    <div className="map_container">
      {/* Map and markers */}
      <div className="map">
        {bathroomData.map((bathroom) => (
          <div
            key={bathroom.id}
            className="marker"
            onClick={() => handleMarkerClick(bathroom.id)}
          >
            {bathroom.name}
          </div>
        ))}
      </div>

      {/* Property Panel */}
      <div className="property_panel row shared_padding">
        <div>
          <span className="property_filter">COST:</span>
          <span className="address_text">
            {activeBathroom ? activeBathroom.cost : "Select a marker"}
          </span>
        </div>
        <div>
          <span className="property_filter">CROWD:</span>
          <span className="address_text">
            {activeBathroom ? activeBathroom.crowd : "Select a marker"}
          </span>
        </div>
        <div>
          <span className="property_filter">CLEAN:</span>
          <span className="address_text">
            {activeBathroom ? activeBathroom.clean : "Select a marker"}
          </span>
        </div>
      </div>
    </div>
  );
};
