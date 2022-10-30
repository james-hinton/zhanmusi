import { useEffect, useState } from "react";
import hypnotoad from "../../assets/images/hypnotoad.gif";


const Hypnotoad = () => {
  const [stripeSpeed, setStripeSpeed] = useState(0.15);

  const animation = () => {
    var c = document.getElementById("canv");
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
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
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
  };

  useEffect(() => {
    animation();
  }, [stripeSpeed]);


  return (
    <>
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
    </>
  );
};

export default Hypnotoad;
