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
  if (isMobile && window.innerHeight > window.innerWidth) {
    rdd.isMobile = true;
  } 

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
