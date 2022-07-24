import { translater, addToSavedWords } from "./TranslateUtils.js";
import "./TranslateInput.scss";

import { getSavedWords } from "../SavedWords/SavedWordsUtils";

const TranslateInput = ({ setSavedWords }) => {
  const handleTranslate = async (e) => {
    if (e.length > 0) {
      let translation = await translater(e);
      await addToSavedWords(translation, 1);
      setSavedWords(await getSavedWords());

      // clear input
      document.getElementById("translate-input").value = "";
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Translate English to 中文"
        className="translate-input"
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
  );
};

export default TranslateInput;
