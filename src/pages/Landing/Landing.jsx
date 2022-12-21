import LeftContentBar from "../../components/Landing/LeftContentBar/LeftContentBar";
import RightContentBar from "../../components/Landing/RightContentBar/RightContentBar";
import Swiper from "../../components/Landing/Swiper/Swiper";
import Footer from "../../components/Generic/Footer/Footer";
import Cursor from "../../components/Generic/Cursor/Cursor";
import { useMediaQuery } from "@mui/material";

const Landing = ({ pokeData, activeCursor, showContent }) => {
  // Is mobile check if screen is less than 1000px
  const isMobile = useMediaQuery("(max-width:1000px)");

  return (
    <div className={`${showContent ? "show" : "hide"}`}>
      {/* Div with 2em height, and 100% width */}
      <div 
        style={{
          height: "2.5em",
          width: "100%",
        }}
      ></div>

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
