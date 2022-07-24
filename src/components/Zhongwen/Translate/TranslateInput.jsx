import { translater, addToSavedWords } from "./TranslateUtils.js";
import "./TranslateInput.scss";

const TranslateInput = () => {
  const handleTranslate = async (e) => {
    console.log("Translating...", e);
    let translation = await translater(e);
    await addToSavedWords(translation, 1);
    console.log("Translation:", translation);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Translate English to 中文"
        className="translate-input"
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
