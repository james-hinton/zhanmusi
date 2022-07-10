import Image from "./Image";
import Search from "./Search";
import NavLink from "./NavLink";
import GitHub from "../assets/github.png";
import startBounce from "../utils/bounce";

import DropdownText from "./DropdownText";

import { useState } from "react";

import "../assets/styles/Navbar.css";

const Navbar = ({ setBackground, pokeData, setpokeData, activeCursor, setActiveCursor }) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__item">
          <Image logo image={GitHub} />
        </div>

        <div className="navbar__item">
          <Search
            setBackground={setBackground}
            pokeData={pokeData}
            setpokeData={setpokeData}
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
          <NavLink text="Cat Cursor" link="#" onCustomClick={
            () => {
              setActiveCursor(!activeCursor);
            }
          } />
        </div>

        <div className="navbar__item">
          <NavLink
            text="Useless Button"
            link="#"
            onCustomClick={(e) => {
              startBounce(e);
            }}
          />
        </div>

        <div className="navbar__item right">
          <NavLink text="Contact" link="#" border />
        </div>
      </div>
    </>
  );
};

export default Navbar;
