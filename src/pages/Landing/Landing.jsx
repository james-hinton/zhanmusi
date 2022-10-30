import LeftContentBar from "../../components/Landing/LeftContentBar/LeftContentBar";
import RightContentBar from "../../components/Landing/RightContentBar/RightContentBar";
import Swiper from "../../components/Landing/Swiper/Swiper";
import Footer from "../../components/Generic/Footer/Footer";
import Cursor from "../../components/Generic/Cursor/Cursor";
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

const Landing = ({ pokeData, activeCursor, showContent }) => {
  // Is mobile check if screen is less than 1000px
  const [isMobile, setIsMobile] = useState(false);

  // Whenever window is resized, check if it is mobile
  window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      console.log('Setting isMobile to true');
      setIsMobile(true);
    }
    else {
      console.log('Setting isMobile to false');
      setIsMobile(false);
    }
  });


  console.log("isMobile", isMobile);
  return (
    <div className={`${showContent ? "show" : "hide"}`}>
      <div className={`content ${showContent}`}>
        {isMobile ? <Swiper /> : <LeftContentBar pokeData={pokeData} />}
        <RightContentBar />
      </div>

      <Footer />
      <Cursor active={activeCursor} />
    </div>
  );
};

export default Landing;
