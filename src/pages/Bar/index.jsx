// React
import { useRef } from "react";
// Components
import Draggable from "react-draggable";

// Styles
import "./style.scss";

// Icons
import HouseIcon from "@mui/icons-material/House";

const Bar = () => {
  const drinks = [
    {
      name: "Rum",
      image:
        "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    },
    {
      name: "Vodka",
      image:
        "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    },
    {
      name: "Tequila",
      image:
        "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    },
    {
      name: "Gin",
      image:
        "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
    },
  ];

  // Make bar content a ref
  const barContent = useRef(null);

  return (
    <div className="bar">
      <div className="bar-container"  key="bar-container">
        <div className="bar-content" ref={barContent}>
            {/* Drinks */}
            <div className="bar-content-drinks">
              {drinks.map((drink) => (
                <Draggable bounds={barContent} key={drink.name}>
                  <div className="bar-content-drinks-drink">
                    <div className="bar-content-drinks-drink-image">
                      <img src={drink.image} alt="drink" />
                    </div>
                    <div className="bar-content-drinks-drink-name">
                      {drink.name}
                    </div>
                  </div>
                </Draggable>
              ))}
            </div>

          {/* Holder */}
          {/* This is the place where you can drag the drinks into */}
          <div className="bar-content-holder"></div>
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
