import { Icon } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { allHints } from "./consts";

const TreasureModal = ({
  setOpenModal,
  checkFoundTreasures,
  treasuresFound,
  setTreasuresFound,
}) => {
  const [hint, setHint] = useState("");
  const [allFound, setAllFound] = useState(false);

  const restartTreasureHunt = () => {
    // Clear all the local storage
    localStorage.clear();
    // Set the treasuresFound to 0
    setTreasuresFound([]);
    // Set the allFound to false
    setAllFound(false);
  };

  useEffect(() => {
    if (treasuresFound === allHints.length) {
      setAllFound(true);
    }
  }, [treasuresFound]);

  const generateHint = () => {
    const randomHint = allHints[Math.floor(Math.random() * allHints.length)];
    if (hint === randomHint.hint) {
      generateHint();
    }
    setHint(randomHint.hint);
  };

  // Check local storage for found treasures
  useEffect(() => {
    checkFoundTreasures();
  }, [window.localStorage]);

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
          {allFound ? (
            <>
              <div className="treasure-modal__body__subtitle">
                <strong>Blisterin' barnacles!</strong> Ye've found all me secret
                booty.
                <br /> I was ne'er expectin' anyone t' find this. <br />
                <br />
                Anyway, about that prize...
                <br />
                well... <br />
                it doesn't exist. Me bad.
              </div>
              {/* Button to reset */}
              <button
                className="treasure-modal__body__button"
                onClick={() => {
                  restartTreasureHunt();
                }}
              >
                Jab me t' restart
              </button>
            </>
          ) : (
            <>
              <div className="treasure-modal__body__subtitle">
                <b>Listen up!</b> <br />
                This might be the most important message ye'll ever read,
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
                  {
                    // Check if the treasuresFound is 0, if so then check the local storage for the treasures
                    treasuresFound.length
                  }{" "}
                  / {allHints.length}
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

              <button
                className="treasure-modal__body__button"
                onClick={() => {
                  restartTreasureHunt();
                }}
              >
                Jab me t' restart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreasureModal;
