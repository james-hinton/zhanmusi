import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/styles/App.css";

import Navbar from "./components/Navbar/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Zhongwen from "./pages/Zhongwen/Zhongwen";
import Mountains from "./pages/Mountains/Mountains";
import Hypnotoad from "./components/Hynotoad/Hypnotoad";

import CursorContextProvider from "./components/Generic/Cursor/CursorContextProvider";

const App = () => {
  const [background, setBackground] = useState("");
  const [activeCursor, setActiveCursor] = useState(false);

  const [pokeData, setpokeData] = useState([]);
  const [showContent, setShowContent] = useState(true);
  const [showToad, setShowToad] = useState(false);

  useEffect(() => {
    if (background === "stripe") {
      setShowContent(false);
      setShowToad(true);
    } else if (background) {
      setShowToad(false);
      setShowContent(true);
      document.body.style.background = background;
    }
  }, [background]);

  return (
    <CursorContextProvider>
      <div className={`app ${activeCursor ? "hide-cursor" : "show-cursor"}`}>
        {showToad && <Hypnotoad />}
        <Navbar
          setBackground={setBackground}
          pokeData={pokeData}
          setpokeData={setpokeData}
          activeCursor={activeCursor}
          setActiveCursor={setActiveCursor}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Landing
                pokeData={pokeData}
                activeCursor={activeCursor}
                showContent={showContent}
              />
            }
          />
          <Route path="/zhongwen" element={<Zhongwen />} />
          <Route path="/mountains" element={<Mountains />} />
        </Routes>
      </div>
    </CursorContextProvider>
  );
};

export default App;
