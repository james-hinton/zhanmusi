import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import PrimevalMarker from "./components/PrimevalMarker";

import { retrieveFossilsForBoundingBox } from "../../services/Fossils";

import "leaflet/dist/leaflet.css";
import "./style.scss";

const UpdateMap = ({ onMoveEnd, isOpenTooltip }) => {
  const map = useMapEvents({
    moveend: () => {
      if (!isOpenTooltip) {
        onMoveEnd(map.getBounds());
      }
    },
  });
  useEffect(() => {
    onMoveEnd(map.getBounds());
  }, []);

  return null;
};

const PrimevalMap = () => {
  const mapRef = useRef();
  const [fossils, setFossils] = useState([]);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);

  const updateMap = (bounds) => {
    setFossils([]);

    const boundingBox = {
      lngmin: bounds._southWest.lng,
      lngmax: bounds._northEast.lng,
      latmin: bounds._southWest.lat,
      latmax: bounds._northEast.lat,
    };

    retrieveFossilsForBoundingBox(boundingBox).then((response) => {
      if (response.status === 200) {
        setFossils(response.data);
      }
    });
  };

  useEffect(() => {
    if (!isOpenTooltip && mapRef.current) {
      updateMap(mapRef.current.getBounds());
    }
  }, [isOpenTooltip]);

  return (
    <div className="primeval-map">
      <MapContainer center={[51.5, 0]} zoom={11} ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {fossils.map((fossil, index) => (
          <PrimevalMarker
            key={index}
            position={[fossil.lat, fossil.lng]} // Assuming that fossil object has lat and lng properties
            fossil={fossil} // Using idn property as content of the marker
            setIsOpenTooltip={setIsOpenTooltip}
          />
        ))}
        <UpdateMap onMoveEnd={updateMap} isOpenTooltip={isOpenTooltip} />
      </MapContainer>
    </div>
  );
};

export default PrimevalMap;
