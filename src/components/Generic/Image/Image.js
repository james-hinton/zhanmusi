// React
import { useContext, useCallback } from "react";

// Styles
import "./Image.css";

// Components
import classNames from "classnames";

// Providers
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
          // IF treasure is Twitter then add to localstorage
          link
            ? () => {
                if (treasure === "Twitter") {
                  localStorage.setItem("Twitter", "found");
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
