import TranslateInput from "../../components/Zhongwen/Translate/TranslateInput";
import SavedWords from "../../components/Zhongwen/SavedWords/SavedWords";
import ModeIcon from "@mui/icons-material/Mode";
import "./Zhongwen.scss";
import { useState } from "react";

const Zhongwen = () => {
  const [savedWords, setSavedWords] = useState([]);

  return (
    <>
      <div className="content flex-col">
        <div className="zhongwen-title">
          <h1>你好，詹姆斯。</h1>
        </div>

        <TranslateInput setSavedWords={setSavedWords} />
      </div>

      <div className="content flex-col">
        <div className="zhongwen-title">
          <div className="zhongwen-heading-multiple">
            <div className="create-word-bank-container">
              <button className="
                create-word-bank-button
              ">
                <ModeIcon />
              </button>
            </div>
            <div className="content-subtitle flex-col">
              <h1>保存的单词</h1>
              <small>Bǎocún de dāncí</small>
            </div>
          </div>
        </div>

        <SavedWords savedWords={savedWords} setSavedWords={setSavedWords} />
      </div>
    </>
  );
};

export default Zhongwen;
