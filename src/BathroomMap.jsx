import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import "./styles.css";

const bathroomIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const bathroomData = [
  {
    id: 1,
    name: "Eaton Center Bathroom",
    position: [45.50362, -73.57105],
    cost: "Free",
    genderneutral: "No",
    accessible: "Yes",
    clean: "II",
    crowd: "III",
  },
  {
    id: 2,
    name: "Concordia University Bathroom",
    position: [45.49652, -73.57932],
    cost: "Free",
    genderneutral: "Yes",
    accessible: "Yes",
    clean: "III",
    crowd: "III",
  },
  {
    id: 3,
    name: "Parc Linéaire de la Commune Bathroom",
    position: [45.50282, -73.55308],
    cost: "Free",
    genderneutral: "No",
    accessible: "Yes",
    clean: "I",
    crowd: "I",
  },
  {
    id: 4,
    name: "Mont Royal Park Bathroom",
    position: [45.49844, -73.59915],
    cost: "Free",
    genderneutral: "No",
    accessible: "Yes",
    clean: "II",
    crowd: "III",
  },
  {
    id: 5,
    name: "King George Park Bathroom",
    position: [45.48551, -73.60537],
    cost: "Free",
    genderneutral: "No",
    accessible: "No",
    clean: "I",
    crowd: "I",
  },
  {
    id: 6,
    name: "Central Station Bathroom",
    position: [45.50015, -73.56805],
    cost: "Free",
    genderneutral: "No",
    accessible: "Yes",
    clean: "I",
    crowd: "II",
  },
  {
    id: 7,
    name: "La Fontaine Park Bathroom",
    position: [45.52523, -73.56966],
    cost: "Free",
    genderneutral: "No",
    accessible: "Yes",
    clean: "I",
    crowd: "I",
  },
  {
    id: 8,
    name: "Outremont Park Bathroom",
    position: [45.51781, -73.60547],
    cost: "Free",
    genderneutral: "No",
    accessible: "Yes",
    clean: "I",
    crowd: "II",
  },
  {
    id: 10,
    name: "Montréal Trudeau International Airport Bathroom",
    position: [45.45645, -73.74895],
    cost: "Free",
    genderneutral: "No",
    accessible: "Yes",
    clean: "II",
    crowd: "I",
  },
  {
    id: 11,
    name: "Sir Wilfrid Laurier",
    position: [45.45645, -73.74895],
    cost: "Free",
    genderneutral: "No",
    accessible: "Yes",
    clean: "II",
    crowd: "I",
  },
];

export const BathroomMap = () => {
  const position = [45.49652, -73.57932];
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        style={{ width: "100vw", height: "100vh" }}
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
          >
            <Tooltip>
              {`${bathroom.name}`} <br />
              Cost: {bathroom.cost} <br />
              Gender Neutral: {bathroom.genderneutral} <br />
              Accessible: {bathroom.accessible} <br />
              Clean: {bathroom.clean} <br />
              Crowd: {bathroom.crowd}
            </Tooltip>
          </Marker>
        ))}
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
