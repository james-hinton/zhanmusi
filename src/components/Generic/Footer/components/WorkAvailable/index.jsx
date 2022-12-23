// React
import { useEffect, useState } from "react";

// Utils
import detectCountryUserIsFrom from "../../../../../utils/country";

// Icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const WorkAvailable = () => {
  const [showBottomRightModal, setShowBottomRightModal] = useState(true);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    setShowBottomRightModal(false);
  }, [country]);

  useEffect(() => {
    detectCountryUserIsFrom(setCountry);
  }, []);

  return (
    <>
      {showBottomRightModal && (
        <div
          className="bottom-right-modal"
          onClick={() => setShowBottomRightModal(null)}
        >
          <div className="bottom-right-modal-close">
            <span>&times;</span>
          </div>
          <div className="bottom-right-modal--content">
            <div className="bottom-right-modal--content--title">Hi!</div>
            <br />
            <div className="bottom-right-modal--content--subtitle">
              I can see that you are in <b>{country ? country : "Country"}</b>.
              I'm available to work there!
            </div>
          </div>
        </div>
      )}

      {!showBottomRightModal && (
        <div
          className="bottom-right-arrow"
          onClick={() => {
            localStorage.setItem("Location", "found");
            setShowBottomRightModal(true);
          }}
        >
          <ArrowUpwardIcon />
        </div>
      )}
    </>
  );
};

export default WorkAvailable;
