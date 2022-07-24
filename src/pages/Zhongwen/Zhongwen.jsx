import TranslateInput from "../../components/Zhongwen/Translate/TranslateInput";
import WordBanks from "../../components/Zhongwen/WordBanks/WordBanks";
import SavedWords from "../../components/Zhongwen/SavedWords/SavedWords";
import ModeIcon from "@mui/icons-material/Mode";
import "./Zhongwen.scss";

const Zhongwen = () => {
  return (
    <>
      <div className="content flex-col">
        <div className="zhongwen-title">
          <h1>你好，詹姆斯。</h1>
        </div>

        <TranslateInput />
      </div>

      <div className="content flex-col">
        <div className="zhongwen-title">
          <div className="zhongwen-heading-multiple">
            <div className="create-word-bank-container">
              <button>
                <ModeIcon />
              </button>
            </div>
            <div className="content-subtitle flex-col">
              <h1>保存的单词</h1>
              <small>Bǎocún de dāncí</small>
            </div>
          </div>
        </div>

        <SavedWords />
      </div>
    </>
  );
};

export default Zhongwen;
