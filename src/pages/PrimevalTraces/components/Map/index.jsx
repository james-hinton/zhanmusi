import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import PrimevalMarker from "./components/PrimevalMarker";
import { retrieveFossilsForBoundingBox } from "../../services/Fossils";
import "leaflet/dist/leaflet.css";
import "./style.scss";

// Component responsible for listening to map events
const UpdateMap = ({ onMoveEnd, isOpenTooltip }) => {
  const map = useMapEvents({
    // Listen for the moveend event on the map
    moveend: () => {
      // Only call onMoveEnd if no tooltip is open
      if (!isOpenTooltip) {
        onMoveEnd(map.getBounds());
      }
    },
  });

  // Call onMoveEnd immediately after the first render
  useEffect(() => {
    onMoveEnd(map.getBounds());
  }, []);

  return null;
};

const PrimevalMap = () => {
  // Create a ref for the MapContainer
  const mapRef = useRef();
  // State for the fossils data
  const [fossils, setFossils] = useState([]);
  // State for the open status of the tooltip
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);

  // Function to update the map, called on moveend event and tooltip close
  const updateMap = (bounds) => {
    // Clear the current fossil data
    setFossils([]);

    // Define the bounding box for the API request
    const boundingBox = {
      lngmin: bounds._southWest.lng,
      lngmax: bounds._northEast.lng,
      latmin: bounds._southWest.lat,
      latmax: bounds._northEast.lat,
    };

    // Call the API to retrieve fossils for the bounding box
    retrieveFossilsForBoundingBox(boundingBox).then((response) => {
      // Update the state with the new data if the response was successful
      if (response.status === 200) {
        setFossils(response.data);
      }
    });
  };

  // Effect to listen for the tooltip closing
  useEffect(() => {
    // Only update the map if a tooltip has just closed and the map ref is defined
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
