import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Base Styles
import "./assets/styles/App.css";

// Pages
import Navbar from "./components/Navbar/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Zhongwen from "./pages/Zhongwen/Zhongwen";
import Mountains from "./pages/Mountains/Mountains";
import Twitter from "./pages/Twitter";
import Popcorn from "./pages/Popcorn";
import Bar from "./pages/Bar";
import MiddleEarth from "./pages/MiddleEarth";

// Components
import Hypnotoad from "./components/Hynotoad/Hypnotoad";
import CursorContextProvider from "./components/Generic/Cursor/CursorContextProvider";

import { hot } from "react-hot-loader/root";

const App = () => {
  const [background, setBackground] = useState("");
  const [activeCursor, setActiveCursor] = useState(false);
  const [showNav, setShowNav] = useState(true);

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

  // Sometimes we hide the navbar too...
  useEffect(() => {
    if (
      window.location.pathname.includes("twitter") ||
      window.location.pathname.includes("popcorn") ||
      window.location.pathname.includes("bar") ||
      window.location.pathname.includes("middle-earth")
    ) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, []);

  // If user is on a different tab, set the tab message to 'OY! COME BACK!'
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "OY! COME BACK!";
      } else {
        document.title = "James Hinton - Github";
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <CursorContextProvider>
      <div className={`app ${activeCursor ? "hide-cursor" : "show-cursor"}`}>
        {showToad && <Hypnotoad />}
        {showNav && (
          <Navbar
            setBackground={setBackground}
            pokeData={pokeData}
            setpokeData={setpokeData}
            activeCursor={activeCursor}
            setActiveCursor={setActiveCursor}
          />
        )}

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
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/popcorn" element={<Popcorn />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/middle-earth" element={<MiddleEarth />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </CursorContextProvider>
  );
};

export default hot(App);