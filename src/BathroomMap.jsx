import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import "./styles.css";

const bathroomIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const bathroomData = [
  { id: 1, name: "Eaton Center Bathroom", position: [45.50362, -73.57105] },
  {
    id: 2,
    name: "Concordia University Bathroom",
    position: [45.49652, -73.57932],
  },
  {
    id: 3,
    name: "Parc Linéaire de la Commune Bathroom",
    position: [45.50282, -73.55308],
  },
  { id: 4, name: "Mont Royal Park Bathroom", position: [45.49844, -73.59915] },
  { id: 5, name: "King George Park Bathroom", position: [45.48551, -73.60537] },
];

export const BathroomMap = () => {
  const position = [45.49652, -73.57932];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "500px", height: "500px" }}
      >
        <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`}
          attribution='&copy; <a href="https://www.carto.com/">CARTO</a> contributors'
        />
        {bathroomData.map((bathroom) => (
          <Marker
            key={bathroom.id}
            position={bathroom.position}
            icon={bathroomIcon}
          />
        ))}
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
// export default function BathroomMap() {
//   // const [selectedBathroom, setSelectedBathroom] = useState(null);

//   return (
//     <div className="container">
//       <h1>Interactive Bathroom Map - Montreal</h1>
//       <div className="map-container">
//         <MapContainer
//           center={[45.5017, -73.5673]}
//           zoom={13}
//           className="map-container"
//         >
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
//           />
//           {/* {bathroomData.map((bathroom) => (
//             <Marker
//               key={bathroom.id}
//               position={bathroom.position}
//               icon={bathroomIcon}
//               eventHandlers={{
//                 click: () => setSelectedBathroom(bathroom),
//               }}
//             />
//           ))} */}
//         </MapContainer>
//       </div>
//       {/* {selectedBathroom && (
//         <div className="card">
//           <h2>{selectedBathroom.name}</h2>
//           <p>Latitude: {selectedBathroom.position[0]}</p>
//           <p>Longitude: {selectedBathroom.position[1]}</p>
//           <button
//             className="close-btn"
//             onClick={() => setSelectedBathroom(null)}
//           >
//             Close
//           </button>
//         </div>
//       )} */}
//     </div>
//   );
// }
