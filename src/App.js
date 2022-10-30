import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/styles/App.css";

import Navbar from "./components/Navbar/Navbar/Navbar";
import Landing from "./pages/Landing/Landing";
import Zhongwen from "./pages/Zhongwen/Zhongwen";
import Mountains from "./pages/Mountains/Mountains";

import CursorContextProvider from "./components/Generic/Cursor/CursorContextProvider";

import hypnotoad from "./assets/images/hypnotoad.gif";

const App = () => {
  const [background, setBackground] = useState("stripe");
  const [activeCursor, setActiveCursor] = useState(false);
  const [pokeData, setpokeData] = useState([]);
  const [showContent, setShowContent] = useState(true);

  const [stripeSpeed, setStripeSpeed] = useState(0.15);
  useEffect(() => {
    if (background === "stripe") {
      var container = document.getElementById("stripe");
      container.style.display = "block";
      var c = document.getElementById("canv");
      c.style.display = "block";
      // Show canvas
      // Get id stripe

      setShowContent(false);
      var $ = c.getContext("2d");

      var col = function (x, y, r, g, b) {
        $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        $.fillRect(x, y, 1, 1);
      };
      var R = function (x, y, t) {
        return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
      };

      var G = function (x, y, t) {
        return Math.floor(
          192 +
            64 *
              Math.sin(
                (x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300
              )
        );
      };

      var B = function (x, y, t) {
        return Math.floor(
          192 +
            64 *
              Math.sin(
                5 * Math.sin(t / 9) +
                  ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
              )
        );
      };

      var t = 0;

      var run = function () {
        for (let x = 0; x <= 35; x++) {
          for (let y = 0; y <= 35; y++) {
            col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
          }
        }
        t = t + stripeSpeed;
        window.requestAnimationFrame(run);
      };

      run();
    } else if (background) {
      // Hide the canvas
      var c = document.getElementById("canv");
      var container = document.getElementById("stripe");
      container.style.display = "none";
      setShowContent(true);
      document.body.style.background = background;
    }
  }, [background, stripeSpeed]);

  return (
    <CursorContextProvider>
      <div className={`app ${activeCursor ? "hide-cursor" : "show-cursor"}`}>
        <div id="stripe">
          <canvas id="canv" width="32" height="32" />
          <div className="hypnotoad">
            <img src={hypnotoad} alt="hypnotoad" />
            {/* Scroll to pick speed  */}
            <div className="stripe-speed">
              <input
                type="range"
                min="0.01"
                max="3"
                step="0.01"
                value={stripeSpeed}
                onChange={(e) => setStripeSpeed(parseFloat(e.target.value))}
              />
              <p>Stripe Speed: {stripeSpeed}</p>
            </div>
          </div>
        </div>
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
