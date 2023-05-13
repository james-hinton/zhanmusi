import React, { useRef, useEffect, useCallback } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import PrimevalMarker from "./components/PrimevalMarker";

import { retrieveFossilsForBoundingBox } from "../../services/Fossils";

import "leaflet/dist/leaflet.css";
import "./style.scss";

const UpdateMap = ({ onMoveEnd }) => {
  const map = useMapEvents({
    moveend: () => {
      onMoveEnd(map.getBounds());
    },
  });

  useEffect(() => {
    onMoveEnd(map.getBounds());
  }, []);

  return null;
};

const PrimevalMap = () => {
  const updateMap = (bounds) => {
    const boundingBox = {
      lngmin: bounds._southWest.lng,
      lngmax: bounds._northEast.lng,
      latmin: bounds._southWest.lat,
      latmax: bounds._northEast.lat,
    };
    retrieveFossilsForBoundingBox(boundingBox).then((fossils) => {
      console.log(fossils);
    });
  };

  return (
    <div className="primeval-map">
      <MapContainer center={[51.5, 0]} zoom={11}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <PrimevalMarker position={[51.505, -0.09]} content="Dinosaur Fossil" />
        <UpdateMap onMoveEnd={updateMap} />
      </MapContainer>
    </div>
  );
};

export default PrimevalMap;
