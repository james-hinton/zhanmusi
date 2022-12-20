// Components
import Listener from "./components/Listener";

// Styles
import "./style.scss";

const Popcorn = () => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute("content", "width=device-width, initial-scale=1");

  return (
    <div id="popcorn" className="popcorn">
      <div className="popcorn-container">
        <div className="popcorn-header">
          <img src="/popcorn/layered-waves.svg" alt="popcorn" />
        </div>
        <div className="popcorn-content">
          <div className="popcorn-content__title">
            <h1>Popcorn Time</h1>
          </div>
          <div className="popcorn-content__description">
            <p>
              Use your microphone to listen to pops and we'll tell you the
              perfect time to take your popcorn out of the microwave.
            </p>
          </div>
          
          <Listener />
        </div>
      </div>
    </div>
  );
};

export default Popcorn;
