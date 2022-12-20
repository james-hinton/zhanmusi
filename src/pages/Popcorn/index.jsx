// Components
import { useState } from "react";
import Listener from "./components/Listener";

// Styles
import "./style.scss";

// Icons
import HouseIcon from '@mui/icons-material/House';

const Popcorn = () => {
  const [stopPopcorn, setStopPopcorn] = useState(false);

  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute("content", "width=device-width, initial-scale=1");

  return (
    <div id="popcorn" className="popcorn">
      <div className="popcorn-container">
        <div className="popcorn-content">
          {!stopPopcorn ? (
            <img
              className="popcorn-content__image"
              src="/popcorn/confused.png"
              alt="Popcorn"
            />
          ) : (
            <img
              className="popcorn-content__image"
              src="/popcorn/happy.png"
              alt="Popcorn"
            />
          )}

          {!stopPopcorn ? (
            <div className="popcorn-content__description">
              <p>
                Use your microphone to listen to pops and we'll tell you the
                perfect time to take your popcorn out of the microwave.
                <br />
                <br />
                I can remember my friend asked me to make this for them years
                ago, I don't really speak to her anymore. But decided to do it
                anyway. I wonder how she's doing
                <br />
                <br />
                If you wanna test it out, get a YouTube video of popcorn popping
                and play it into the microphone. It should work.

                <br />
                <br />
                It finds loud noises, and checks the volume and the frequency of 
                the noise to check if it's a pop. If there's too much of a break between
                pops, it'll let you know.
              </p>
            </div>
          ) : (
            <div className="popcorn-content__description">
              <p>
                I'm done listening. I think I've heard enough pops.
                <br />
                <br />
                <span className="popcorn-content__take-it-out">
                  TAKE IT OUT
                </span>
              </p>
            </div>
          )}

          <Listener stopPopcorn={stopPopcorn} setStopPopcorn={setStopPopcorn} />
        </div>
      </div>

      {/* Back to home button */}
      <div className="popcorn-back">
        <a href="/">
          <HouseIcon />
        </a>
        </div>
    </div>
  );
};

export default Popcorn;
