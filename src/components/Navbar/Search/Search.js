import { useState, useEffect } from "react";
import colours from "../../../constants/colours";
import Dropdown from "../Dropdown/Dropdown";

import poke from "../../../utils/pokeapi";

import "./Search.css";

const Search = ({ setBackground, setpokeData, setTheme }) => {
  const [searchText, setSearchText] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowDropdown(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleFocus = () => {
    if (searchText) setShowDropdown(true);
  };

  // Show dropdown
  useEffect(() => {
    if (searchText) setShowDropdown(true);
    else setShowDropdown(false);
    poke(searchText, setpokeData, setShowDropdown);
  }, [searchText]);

  // Random thing to change background colour
  useEffect(() => {
    if (colours.includes(searchText)) {
      localStorage.setItem("Background", "found");
      setBackground(searchText);
    }
    if (searchText === "stripe") {
      setBackground("stripe");
    }
    if (!searchText) {
      setBackground("white");
    }
  }, [searchText]);

  // Check for Chinese
  useEffect(() => {
    if (window.location.pathname !== "/zhongwen") {
      if (["china", "taiwan", "台灣", "中國"].includes(searchText)) {
        window.location.href = "/zhongwen";
      }
    }
  }, [searchText]);

  return (
    <>
      <input
        type="text"
        onFocus={handleFocus}
        onChange={handleChange}
        value={searchText ? searchText : ""}
        className="searchBox"
        placeholder="Enter a pokemon..."
      ></input>

      {showDropdown ? (
        <Dropdown searchText={searchText} setSearchText={setSearchText} />
      ) : null}
    </>
  );
};

export default Search;
