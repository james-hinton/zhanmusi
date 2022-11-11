import { translater, addToSavedWords } from "./TranslateUtils";
import "./TranslateInput.scss";

import {
  getSavedWords,
  getGroupedSavedWords,
} from "../SavedWords/SavedWordsUtils";
import { useState } from "react";

const TranslateInput = ({
  setSavedWords,
  activeGroup,
  setGroupWords,
  selectedTab,
}) => {
  const [loading, setLoading] = useState(false);

  const handleTranslate = async (e) => {
    if (e.length > 0) {
      setLoading(true);
      const translation = await translater(e);

      if (selectedTab === 1) {
        await addToSavedWords(translation, activeGroup.id);
        const groupedWords = await getGroupedSavedWords(activeGroup.id);
        setGroupWords(groupedWords);
      } else {
        await addToSavedWords(translation);
      }
      const words = await getSavedWords();

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
            placeholder={
              selectedTab === 0
                ? "Translate English to 中文"
                : "Translate English to 中文 and add to the selected group"
            }
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
