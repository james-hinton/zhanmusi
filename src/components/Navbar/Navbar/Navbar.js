import Image from "../../Generic/Image/Image";
import Letter from "../../../assets/images/letter.png";
import Search from "../Search/Search";
import NavLink from "./NavLink";
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
    if (window.location.pathname.includes("zhongwen")) {
      setTheme("chinese");
    }
  }, []);

  return (
    <>
      <div className={`navbar navbar-${theme}`}>
        <div className="navbar__item">
          <Image logo image={"/github.png"} link={"/"} sameTab />
        </div>
        {theme === "default" && (
          <>
            <div className="navbar__item search">
              <Search
                setBackground={setBackground}
                setpokeData={setpokeData}
                setTheme={setTheme}
              />
            </div>

            <div className="navbar__item throw">
              <NavLink
                text="Issues"
                link="#"
                Dropdown="I have no idea what I'm doing"
              />
            </div>
            {/* If on home page */}
            {window.location.pathname === "/" && (
            <div className="navbar__item throw">
              <NavLink
                text="Cat Cursor"
                link="#"
                onCustomClick={() => {
                  window.localStorage.setItem("Cat", "found");
                  setActiveCursor(!activeCursor);
                }}
              />
            </div>
            )}
          </>
        )}
        <div className="navbar__item right">
          {/* Contact Icon */}
          <img
            src={Letter}
            alt="letter"
            className="letter"
            onClick={() => {
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
