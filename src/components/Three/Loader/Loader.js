import { Html, useProgress } from "@react-three/drei";

function Loader() {
  const { progress } = useProgress();

  // Round progress down to 2 decimals. It is read only, so we need to create a new variable
  let roundedProgress = progress;
  roundedProgress = Math.floor(progress * 100) / 100;
  roundedProgress = roundedProgress.toString() + "%";

  return (
    <Html center>
      <h2 id="loading">{roundedProgress} loaded</h2>
    </Html>
  );
}

export default Loader;
