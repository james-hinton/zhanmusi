import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import FossilIcon from "../../../../assets/fossil-1.svg";

const PrimevalMarker = ({ position, fossil, setIsOpenTooltip }) => {
  const icon = new L.Icon({
    iconUrl: FossilIcon,
    iconRetinaUrl: FossilIcon,
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 55],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  });

  
  const handleOpen = () => {
    setIsOpenTooltip(true);
  };

  const handleClose = () => {
    setIsOpenTooltip(false);
  }

  return (
    <Marker position={position} icon={icon}
      eventHandlers={{
        popupopen: handleOpen,
        popupclose: handleClose,
      }}
    >
      <Popup>
        <div>
          <h3>
            {fossil.idn} ({fossil.tna})
          </h3>
          <p>
            <strong>Occurrence ID:</strong> {fossil.oid}
          </p>
          <p>
            <strong>Collection ID:</strong> {fossil.cid}
          </p>
          <p>
            <strong>Early Age:</strong> {fossil.eag}
          </p>
          <p>
            <strong>Late Age:</strong> {fossil.lag}
          </p>
          <p>
            <strong>Location:</strong> {fossil.ggc}
          </p>
          <p>
            <strong>Country:</strong> {fossil.cc2}
          </p>
          <p>
            <strong>State:</strong> {fossil.stp}
          </p>
        </div>
      </Popup>
    </Marker>
  );
};

export default PrimevalMarker;
