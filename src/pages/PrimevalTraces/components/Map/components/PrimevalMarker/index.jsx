import L from 'leaflet';
import { Marker, Popup, Icon } from "react-leaflet";
import  FossilIcon from "../../../../assets/fossil-1.svg";

const PrimevalMarker = ({ position, content }) => {

  const icon = new L.Icon({
    iconUrl: FossilIcon,
    iconRetinaUrl: FossilIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  });

  return (
    <Marker position={position} icon={icon}>
      <Popup>
        {content}
      </Popup>
    </Marker>
  );
};

export default PrimevalMarker;