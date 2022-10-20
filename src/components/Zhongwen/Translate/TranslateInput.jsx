import { translater, addToSavedWords } from "./TranslateUtils.js";
import "./TranslateInput.scss";

import { getSavedWords } from "../SavedWords/SavedWordsUtils";
import { useState } from "react";

const TranslateInput = ({ setSavedWords }) => {
  const [loading, setLoading] = useState(false);

  const handleTranslate = async (e) => {
    if (e.length > 0) {
      setLoading(true);
      let translation = await translater(e);
      await addToSavedWords(translation, 1);
      const words = await getSavedWords();
      setSavedWords(words);
      //document.getElementById("translate-input").value = "";
      setLoading(false);
    }
  };

  // Listen for any key press and focus on the input
  document.addEventListener("keydown", (e) => {
    document.getElementById("translate-input").focus();
  });

  return (
    <>
      {!loading ? (
        <>
          <input
            type="text"
            placeholder="Translate English to 中文"
            className="translate-input"
            autoComplete="off"
            id="translate-input"
            onKeyPress={async (e) => {
              if (e.key === "Enter") {
                await handleTranslate(e.target.value);
              }
            }}
          />
          <button
            className="translate-button"
            onClick={async (e) => {
              await handleTranslate(e.target.previousSibling.value);
            }}
          >
            翻译
          </button>
        </>
      ) : (
        <div className="loading-container">
          {/* Swirly */}
          {/* Show /duck.gif */}
          <img src="/duck.gif" alt="Loading..." className="loading-image" />
        </div>
      )}
    </>
  );
};

export default TranslateInput;
