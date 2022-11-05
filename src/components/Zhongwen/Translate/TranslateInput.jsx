import { translater, addToSavedWords } from "./TranslateUtils";
import "./TranslateInput.scss";

import { getSavedWords } from "../SavedWords/SavedWordsUtils";
import { useState } from "react";

import { getGroupedSavedWords } from "../SavedWords/SavedWordsUtils";

const TranslateInput = ({ setSavedWords, activeGroup, setGroupWords }) => {
  const [loading, setLoading] = useState(false);

  const handleTranslate = async (e) => {
    if (e.length > 0) {
      setLoading(true);
      const translation = await translater(e);

      await addToSavedWords(translation, activeGroup.id);
      const words = await getSavedWords();

      if (activeGroup.id) {
        const groupedWords = await getGroupedSavedWords(activeGroup.id);
        console.log("This is the grouped words", groupedWords);
        setGroupWords(groupedWords);
      }
      setSavedWords(words);
      setLoading(false);
    }
  };

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
          <img src="/duck.gif" alt="Loading..." className="loading-image" />
        </div>
      )}
    </>
  );
};

export default TranslateInput;
