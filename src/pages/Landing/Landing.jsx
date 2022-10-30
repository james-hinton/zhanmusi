import LeftContentBar from "../../components/Landing/LeftContentBar/LeftContentBar";
import RightContentBar from "../../components/Landing/RightContentBar/RightContentBar";
import Footer from "../../components/Generic/Footer/Footer";
import Cursor from "../../components/Generic/Cursor/Cursor";

const Landing = ({ pokeData, activeCursor, showContent }) => {
  return (
    <div className={`${showContent ? "show" : "hide"}`}>
      <div className={`content ${showContent}`}>
        <LeftContentBar pokeData={pokeData} />
        <RightContentBar />
      </div>

      <Footer />
      <Cursor active={activeCursor} />
    </div>
  );
};

export default Landing;
