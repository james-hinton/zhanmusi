import Image from "../../Generic/Image/Image";
import Search from "../Search/Search";
import NavLink from "./NavLink";
import startBounce from "../../../utils/bounce";
import Contact from "../../Contact";

import "./Navbar.scss";
import { useEffect, useState } from "react";

const Navbar = ({
  setBackground,
  setpokeData,
  activeCursor,
  setActiveCursor,
}) => {
  const [theme, setTheme] = useState("default");
  const [showModal, setShowModal] = useState(false);

  // Check the URL path and set the theme
  useEffect(() => {
    if (window.location.pathname === "/zhongwen") {
      setTheme("chinese");
    }
  }, []);

  return (
    <>
      <div className={`navbar navbar-${theme}`}>
        <div className="navbar__item">
          <Image logo image={"/github.png"} link={"/"} />
        </div>

        <div className="navbar__item">
          <Search
            setBackground={setBackground}
            setpokeData={setpokeData}
            setTheme={setTheme}
          />
        </div>

        <div className="navbar__item">
          <NavLink text="Pull requests" link="#" />
        </div>

        <div className="navbar__item">
          <NavLink
            text="Issues"
            link="#"
            Dropdown="I have no idea what I'm doing"
          />
        </div>

        <div className="navbar__item">
          <NavLink
            text="Cat Cursor"
            link="#"
            onCustomClick={() => {
              setActiveCursor(!activeCursor);
            }}
          />
        </div>
        {/* 
        <div className="navbar__item">
          <NavLink
            text="Useless Button"
            link="#"
            onCustomClick={(e) => {
              startBounce(e);
            }}
          />
        </div> */}

        <div className="navbar__item right">
          <NavLink
            text="Contact"
            link="#"
            border
            onCustomClick={() => {
              setShowModal(true);
            }}
          />
        </div>
        <Contact showModal={showModal} setShowModal={setShowModal} />
      </div>
    </>
  );
};

export default Navbar;
