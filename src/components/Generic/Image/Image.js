import "./Image.css";
import classNames from "classnames";

import { useContext, useCallback } from "react";
import { CursorContext } from "../Cursor/CursorContextProvider";

const Image = ({
  image,
  circle,
  logo,
  height,
  margin,
  link,
  mood,
  sameTab,
  treasure,
}) => {
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
        onClick={
          // IF treasure is Facebook then add to localstorage
          link
            ? () => {
                if (treasure === "Facebook") {
                  localStorage.setItem("Facebook", "found");
                }
                window.open(link, sameTab ? "_self" : "_blank");
              }
            : null
        }
      />
    </>
  );
};

export default Image;
