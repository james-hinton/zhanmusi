import React from "react";

function actionByKey(key) {
  const keys = {
    KeyQ: "moveDown",
    KeyE: "moveUp",
    KeyA: "moveLeft",
    KeyD: "moveRight",
    KeyW: "moveForward",
    KeyS: "moveBackward",
  };
  return keys[key];
}

export const useKeyboardControls = () => {
  const [movement, setMovement] = React.useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    moveUp: false,
    moveDown: false,
  });

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (actionByKey(e.code)) {
        setMovement((state) => ({ ...state, [actionByKey(e.code)]: true }));
      }
    };
    const handleKeyUp = (e) => {
      if (actionByKey(e.code)) {
        setMovement((state) => ({ ...state, [actionByKey(e.code)]: false }));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const movementText = movement.moveForward
    ? "Up"
    : movement.moveLeft
    ? "Left"
    : movement.moveRight
    ? "Right"
    : movement.moveBackward
    ? "Down"
    : "Stading";
  return { movement, movementText };
};
