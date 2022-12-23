// React
import { useEffect, useState } from "react";

// Components
import LeftContentBar from "../../components/Landing/LeftContentBar/LeftContentBar";
import RightContentBar from "../../components/Landing/RightContentBar/RightContentBar";
import Swiper from "../../components/Landing/Swiper/Swiper";
import Footer from "../../components/Generic/Footer/Footer";
import Cursor from "../../components/Generic/Cursor/Cursor";

// Mobile Styles
import * as rdd from "react-device-detect";
import { isMobile } from "react-device-detect";

const Landing = ({ pokeData, activeCursor, showContent }) => {
  // Save width and height to state
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log("Im being called");
    if (
      isMobile &&
      (window.innerHeight < window.innerWidth || window.innerWidth > 1024)
    ) {
      rdd.isMobile = false;
    }
  }, [width]);

  return (
    <div className={`${showContent ? "show" : "hide"}`}>
      <div className="content__divider"></div>
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
