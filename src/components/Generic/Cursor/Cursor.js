// React
import { useContext } from "react";

// Hooks
import useMousePosition from "../../../hooks/useMousePosition"

// Provider
import { CursorContext } from "./CursorContextProvider";

const Cursor = ({active}) => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);

  if (!active) {
    return null;
  }
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          height: "40px",
          width: "40px",
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%)`,
          transition: "transform .2s ease-in-out",
        }}
      >
        {!cursor.mood ? (
          <img src="./cursors/cursor.png" />
        ) : (
          <img src={`./cursors/${cursor.mood}.png`} />
        )}
      </div>
    </div>
  );
};

export default Cursor;
