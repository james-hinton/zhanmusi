import { useState } from "react";
import classNames from "classnames";
import "../assets/styles/NavLink.css";

const Navlink = ({
  text,
  link,
  dark,
  border,
  hoverText,
  onCustomClick,
  Dropdown,
}) => {
  const [showHoverText, setShowHoverText] = useState(false);

  return (
    <>
      <div
        className={classNames({
          navlink: "navlink",
          dark: "dark",
          border,
        })}
      >
        <a
          href={link}
          onMouseEnter={() => setShowHoverText(true)}
          onMouseLeave={() => setShowHoverText(false)}
          onClick={onCustomClick ? onCustomClick : () => {}}
        >
          <p className={dark && "dark"}>{text}</p>
        </a>
      </div>

      {Dropdown && showHoverText && (
        <div className="dropdown autowidth">
          <div className="dropdown__item noborder ">
            <p>{Dropdown}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navlink;
