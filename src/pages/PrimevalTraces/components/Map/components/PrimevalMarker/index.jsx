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
  };

  const renderPopupContent = () => {
    let { idn, tna, oid, cid, eag, lag, ggc, cc2, stp, tid } = fossil;
    tid = tid && tid.replace("txn:", "");
    cid = cid && cid.replace("col:", "");

    return (
      <div>
        <h3>
          {idn} ({tna})
        </h3>

        {oid && (
          <p>
            <strong>Occurrence ID:</strong> {oid}
          </p>
        )}
        {cid && (
          <p>
            <strong>Collection ID:</strong>
            {cid}
          </p>
        )}

        {eag && (
          <p>
            <strong>Early Age:</strong> {eag}
          </p>
        )}
        {lag && (
          <p>
            <strong>Late Age:</strong> {lag}
          </p>
        )}
        {ggc && (
          <p>
            <strong>Location:</strong> {ggc}
          </p>
        )}
        {cc2 && (
          <p>
            <strong>Country:</strong> {cc2}
          </p>
        )}
        {stp && (
          <p>
            <strong>State:</strong> {stp}
          </p>
        )}
        {tid && (
          <p>
            <strong>Taxon ID:</strong>
            <a
              href={`https://paleobiodb.org/classic/basicTaxonInfo?taxon_no=${tid}`}
              target="_blank"
              rel="noreferrer"
            >
              {tid}
            </a>
          </p>
        )}
      </div>
    );
  };

  return (
    <Marker
      position={position}
      icon={icon}
      eventHandlers={{
        popupopen: handleOpen,
        popupclose: handleClose,
      }}
    >
      <Popup>{renderPopupContent()}</Popup>
    </Marker>
  );
};

export default PrimevalMarker;
