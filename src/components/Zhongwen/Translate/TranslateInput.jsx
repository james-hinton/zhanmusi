import { translate } from "./TranslateUtils.js";
import "./TranslateInput.scss";

const TranslateInput = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Translate English to 中文"
        className="translate-input"
      />
      <button
        className="translate-button"
        onClick={async (e) => {
          await translate(e.target.previousSibling.value);
        }}
      >
        Translate
      </button>
    </>
  );
};

export default TranslateInput;
