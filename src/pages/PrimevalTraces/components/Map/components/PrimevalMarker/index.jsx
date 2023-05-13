import { Marker, Popup } from "react-leaflet";

const PrimevalMarker = ({ position }) => {
  return (
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

export default PrimevalMarker;