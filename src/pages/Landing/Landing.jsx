import { useEffect, useState } from "react";

import LeftContentBar from "../../components/Landing/LeftContentBar/LeftContentBar";
import RightContentBar from "../../components/Landing/RightContentBar/RightContentBar";
import Footer from "../../components/Generic/Footer/Footer";
import Cursor from "../../components/Generic/Cursor/Cursor";

import detectCountryUserIsFrom from "../../utils/country";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


const Landing = ({
  pokeData, activeCursor
}) => {
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
      <div className="content">
        <LeftContentBar pokeData={pokeData} />

        <RightContentBar />
      </div>

      <Footer />

      <Cursor active={activeCursor} />

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
            setShowBottomRightModal(true);
          }}
        >
          <ArrowUpwardIcon />
        </div>
      )}
    </>
  );
};

export default Landing;
