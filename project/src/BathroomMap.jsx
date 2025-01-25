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
