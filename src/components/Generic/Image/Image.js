import "./Image.css";
import classNames from "classnames";

import { useContext, useCallback } from "react";
import { CursorContext } from "../Cursor/CursorContextProvider";

const Image = ({ image, circle, logo, height, margin, link, mood }) => {
  const [cursor, setCursor] = useContext(CursorContext);
  const toggleCursor = useCallback((mood) => {
    setCursor(({ active }) => ({ active: !active, mood: mood }));
  });
  return (
    <>
      <img
        src={image}
        height={height}
        className={classNames({
          circle: circle,
          logo: logo,
          margin: margin,
        })}
        // if mood
        onMouseEnter={mood ? () => toggleCursor(mood) : null}
        onMouseLeave={mood ? () => toggleCursor() : null}
        onClick={link ? () => window.open(link, "_blank") : null}
      />
    </>
  );
};

export default Image;
