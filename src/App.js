import { useEffect, useState } from "react";
import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import LeftContentBar from "./components/LeftContentBar";
import RightContentBar from "./components/RightContentBar";
import Footer from "./components/Footer";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import detectCountryUserIsFrom from "./utils/country";

function App() {
  const [background, setBackground] = useState(null);

  const [showBottomRightModal, setShowBottomRightModal] = useState(true);
  const [country, setCountry] = useState(null);

  const [pokeData, setpokeData] = useState([]);

  useEffect(() => {
    detectCountryUserIsFrom(setCountry);
  }, []);

  useEffect(() => {
    setShowBottomRightModal(false);
  }, [country]);

  useEffect(() => {
    if (background) {
      document.body.style.background = background;
    }
  }, [background]);

  return (
    <div className="app">
      <Navbar
        setBackground={setBackground}
        pokeData={pokeData}
        setpokeData={setpokeData}
      />

      <div className="content">
        <LeftContentBar pokeData={pokeData} />

        <RightContentBar />
      </div>

      <Footer />

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
        <div className="bottom-right-arrow" onClick={() => {
          setShowBottomRightModal(true);
        }}>
          <ArrowUpwardIcon />
          
        </div>
      )}
    </div>
  );
}

export default App;
