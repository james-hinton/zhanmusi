// React
import { useEffect, useState } from "react";

// Styles
import "./style.scss";

// Icons
import HouseIcon from "@mui/icons-material/House";

// Data
// There are two JSON files, one is the data for the drinks, the other is the data for the food
import allIngredients from "./data/ingredients.json";
import allCocktails from "./data/cocktails.json";

const Bar = () => {
  // State
  const [drinks, setDrinks] = useState(allCocktails);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  // When user first enters the page, a random cocktail will be selected
  useEffect(() => {
    setSelectedCocktail(drinks[Math.floor(Math.random() * drinks.length)]);
  }, []);

  return (
    <div className="bar">
      <div className="bar-content">
        {/* Logo */}
        <div className="bar-content-logo">
          <img src="/bar/logo.png" alt="logo" />
        </div>
        {/* Drinks */}
        <div className="bar-content-drinks">
          {/* Search Box */}
          <div className="bar-content-drinks-search">
            <input
              type="text"
              placeholder="Search for a drink"
              onChange={(e) => {
                setDrinks(
                  allCocktails.filter((drink) =>
                    drink.name
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                  )
                );
              }}
            />
          </div>

          {/* Table */}
          <div className="bar-content-drinks-table">
            {/* Drinks */}
            {drinks.map((drink, index) => (
              <div
                className="bar-content-drinks-table-row"
                key={index}
                onClick={() => {
                  setSelectedCocktail(drink);
                }}
              >
                {/* Name */}
                <div className="bar-content-drinks-table-row-name">
                  {drink.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Holder */}
        <div className="bar-content-holder">
          {/* cocktail selected */}
          <div className="bar-content-holder-cocktail">
            {/* cocktail name */}
            <div className="bar-content-holder-subheading">Name</div>
            <div className="bar-content-holder-cocktail-value">
              <b>{selectedCocktail?.name}</b>
            </div>
            {/* cocktail ingredients */}
            <div className="bar-content-holder-subheading">Ingredients</div>
            <div className="bar-content-holder-cocktail-ingredients">
              {selectedCocktail?.ingredients.map((ingredient, index) => (
                <div
                  className="bar-content-holder-cocktail-ingredients-item"
                  key={index}
                >
                  {ingredient}
                </div>
              ))}
            </div>
            {/* cocktail instructions */}
            <div className="bar-content-holder-subheading">Mix Method</div>
            <div className="bar-content-holder-cocktail-value">
              {selectedCocktail?.mix_method}
            </div>

            {/* Notes */}
            <div className="bar-content-holder-subheading">Notes</div>
            <div className="bar-content-holder-cocktail-value">
              {/* Loop through notes */}
              {selectedCocktail?.note.map((note, index) => (
                <div
                  className="bar-content-holder-cocktail-ingredients-item"
                  key={index}
                >
                  {note}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Home  */}
      {/* Back to home button */}
      <div className="bar-back">
        <a href="/">
          <HouseIcon />
        </a>
      </div>
    </div>
  );
};

export default Bar;
