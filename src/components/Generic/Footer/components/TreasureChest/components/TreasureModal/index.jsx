import { Icon } from "@mui/material";
import { useState } from "react";

const TreasureModal = ({ setOpenModal }) => {
  const [treasuresFound, setTreasuresFound] = useState(0);
  const [hint, setHint] = useState("");

  const allHints = [
    {
      id: 21891289,
      title: "Pokemon",
      hint: "Use the search bar t' find yer favourite pokemon",
    },
    {
      id: 48393498,
      title: "Background",
      hint: "Use the search bar 'n put a colour in",
    },
    {
      id: 28912981,
      title: "Chinese",
      hint: "Skewer me nationality on the port side panel",
    },
    {
      id: 12091201,
      title: "Facebook",
      hint: "Try t' visit me Facebook page ye raucous scallywag",
    },
    {
      id: 93093293,
      title: "Location",
      hint: "Jab the bottom right button, I know where ye lay",
    },
    {
      id: 12312312,
      title: "Mountains",
      hint: "Change me emoji t' the mountains. Aye, that's the one",
    },
    {
      id: 62322823,
      title: "Stripe",
      hint: "Ready t' feel sick? Type 'stripe' into the search bar",
    },
    {
      id: 73832782,
      title: "Cabin",
      hint: "Visit the about me page t' see me cabin",
    },
  ];

  const generateHint = () => {
    const randomHint = allHints[Math.floor(Math.random() * allHints.length)];
    if (hint === randomHint.hint) {
      generateHint();
    }
    setHint(randomHint.hint);
  };

  return (
    <div
      className="treasure-modal"
      onClick={() => {
        setOpenModal(false);
      }}
    >
      <div
        className="treasure-modal__content"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        {/* Top bar with title and close button */}
        <div className="treasure-modal__header">
          <div className="treasure-modal__title">Davy James' Locker</div>
          <div
            className="treasure-modal__close-button"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </div>
        </div>

        {/* Body */}
        <div className="treasure-modal__body">
          <div className="treasure-modal__body__subtitle">
            <b>Listen up!</b> <br />
            This might be the most important message ye'll ever read.
            <br />
            'tis no mear normal website!
            <br />
            <br />
            Scattered throughout the site are hidden secrets.
            <br /> Find 'em all 'n ye'll be rewarded wit' a special prize.
          </div>
          <div className="treasure-modal__body__counter">
            <div className="treasure-modal__body__counter__title">
              Treasures found:
            </div>
            <div className="treasure-modal__body__counter__number">
              {treasuresFound} / {allHints.length}
            </div>
          </div>

          {/* Hint */}
          <div
            className="treasure-modal__body__hint"
            onClick={() => {
              generateHint();
            }}
          >
            Need a hint?
          </div>
          {hint && (
            <div className="treasure-modal__body__hint-hint">
              {hint && `${hint}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreasureModal;
