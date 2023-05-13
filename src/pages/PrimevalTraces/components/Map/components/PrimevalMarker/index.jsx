import { Marker, Popup, Icon } from "react-leaflet";
import  FossilIcon from "../../../../assets/fossil-1.svg";

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