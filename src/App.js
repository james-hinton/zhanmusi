import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/styles/App.css";

import Navbar from "./components/Navbar/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Zhongwen from "./pages/Zhongwen/Zhongwen";
import Mountains from "./pages/Mountains/Mountains";

import CursorContextProvider from "./components/Generic/Cursor/CursorContextProvider";

const App = () => {
  const [background, setBackground] = useState(null);

  const [activeCursor, setActiveCursor] = useState(false);
  const [pokeData, setpokeData] = useState([]);

  useEffect(() => {
    if (background) {
      document.body.style.background = background;
    }
  }, [background]);

  return (
    <CursorContextProvider>
      <div className={`app ${activeCursor ? "hide-cursor" : "show-cursor"}`}>
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
              <Landing pokeData={pokeData} activeCursor={activeCursor} />
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
