import { useEffect, useState } from "react";
import TreasureModal from "./components/TreasureModal";
import treasureChest from "../../../../../assets/images/treasure-chest.png";
import { allHints } from "./components/TreasureModal/consts";
import "./style.scss";

const TreasureChest = () => {
  const [openModal, setOpenModal] = useState(false);
  const [treasuresFound, setTreasuresFound] = useState([]);

  const checkFoundTreasures = () => {
    // In teh local storage if the allHints title is present then add 1 to the treasuresFound
    allHints.forEach((hint) => {
      if (localStorage.getItem(hint.title)) {
        // If it is not already in the treasuresFound array then add it
        if (!treasuresFound.includes(hint.title)) {
          setTreasuresFound([...treasuresFound, hint.title]);
          playAnimation();
        }
      }
    });
  };

  useEffect(() => {
    checkFoundTreasures();
  });

  const playAnimation = () => {
    const treasureChest = document.getElementById("treasure-chest");
    treasureChest.classList.add("treasure-chest-animation");
    setTimeout(() => {
      treasureChest.classList.remove("treasure-chest-animation");
    }, 1000);
  };

  return (
    <>
      <div
        className="treasure-chest"
        id="treasure-chest"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        {/* Chest image */}
        <div className="treasure-chest__image">
          <img src={treasureChest} alt="Treasure Chest" />
        </div>
      </div>
      {/* Chest modal */}
      {openModal && (
        <TreasureModal
          setOpenModal={setOpenModal}
          checkFoundTreasures={checkFoundTreasures}
          treasuresFound={treasuresFound}
          setTreasuresFound={setTreasuresFound}
        />
      )}
    </>
  );
};

export default TreasureChest;
