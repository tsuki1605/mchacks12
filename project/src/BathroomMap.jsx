import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const bathroomIcon = new L.Icon({
  iconURL: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
});

const bathroomData = [
  { id: 1, name: "Eaton Center Bathroom", position: [45.50362, 73.57105] },
  {
    id: 2,
    name: "Concordia Univeristy Bathroom",
    position: [45.49652, 73.57932],
  },
  {
    id: 3,
    name: "Parc Linéaire de la Commune Bathroom",
    position: [45.50282, 73.55308],
  },
  { id: 4, name: "Mont Roayl Park Bathroom", position: [45.49844, 73.59915] },
  { id: 5, name: "King George Park Bathroom", position: [45.48551, 73.60537] },
];

export default function BathroomMap() {
  const [selectedBathroom, setSelectedBathroom] = useState(null);

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
            <Button className="mt-2" onClick={() => setSelectedBathroom(null)}>
              Close
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
