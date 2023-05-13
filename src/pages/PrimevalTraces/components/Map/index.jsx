import React, { useRef } from "react";
import { MapContainer, TileLayer, useMap} from "react-leaflet";
import PrimevalMarker from "./components/PrimevalMarker";

import "leaflet/dist/leaflet.css";
import "./style.scss";

const PrimevalMap = () => {
  const mapRef = useRef();
  const defaultCenter = [38.9072, -77.0369];

  return (
    <div className="primeval-map">
      <MapContainer center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PrimevalMarker position={[51.505, -0.09]}/>
      </MapContainer>
    </div>
  );
};

export default PrimevalMap;
