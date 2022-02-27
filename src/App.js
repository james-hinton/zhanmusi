import { useEffect, useState } from "react";
import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import LeftContentBar from "./components/LeftContentBar";
import RightContentBar from "./components/RightContentBar";
import Footer from "./components/Footer";

function App() {
  const [background, setBackground] = useState(null);

  const [pokeData, setpokeData] = useState([]);

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
    </div>
  );
}

export default App;
