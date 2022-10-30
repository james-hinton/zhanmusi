import { useState } from "react";
import TreasureModal from "./components/TreasureModal";
import treasureChest from "../../../../../assets/images/treasure-chest.png";
import "./style.scss";

const TreasureChest = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <div
        className="treasure-chest"
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
      {openModal && <TreasureModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default TreasureChest;
