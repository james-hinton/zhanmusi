import DropdownItem from "./DropdownItem.js";
import "./Dropdown.css";
import { useEffect, useState } from "react";
import Pokemon from "../../../constants/Pokemon";

const Dropdown = ({ searchText, setSearchText }) => {
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    var pokemonResults = [];

    Pokemon.findIndex((poke) => {
      if (poke.startsWith(searchText.toLowerCase()) === true) {
        pokemonResults.push(poke.charAt(0).toUpperCase() + poke.slice(1));
      }
    }, searchText);

    // Add pokemon to the local storage

    setDropdownItems(pokemonResults.slice(0, 5));
  }, [searchText]);

  return (
    <>
      {dropdownItems.length && (
        <div className="dropdown">
          {dropdownItems.map((item) => {
            return (
              <>
                <DropdownItem title={item} setSearchText={setSearchText} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Dropdown;
