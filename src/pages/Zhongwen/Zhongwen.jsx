import { useEffect, useState } from "react";

// Components
import TranslateInput from "../../components/Zhongwen/Translate/TranslateInput";
import SavedWords from "../../components/Zhongwen/SavedWords/SavedWords";
import ModeIcon from "@mui/icons-material/Mode";

// Styles
import "./Zhongwen.scss";
import "react-tabs/style/react-tabs.css";

const Zhongwen = () => {
  const [savedWords, setSavedWords] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    localStorage.setItem("Zhongwen", "found");
  }, []);

  return (
    <>
      <div className="content flex-col">
        <div className="zhongwen-title">
          <h1>你好，詹姆斯。</h1>
        </div>

        <TranslateInput setSavedWords={setSavedWords} />
      </div>

      {/* Tab Menu */}
      <div className="zhongwen-tab-menu">
        <div
          onClick={() => setSelectedTab(0)}
          className={`zhongwen-tab-menu-item ${
            selectedTab === 0 && "zhongwen-tab-menu-item-selected"
          }`}
        >
          <span>Recently Searched</span>
          <br />
          <small
            style={{
              fontSize: "0.8rem",
              color: "lightgray",
            }}
          >
            最近搜索
          </small>
        </div>
        <div
          className={`zhongwen-tab-menu-item ${
            selectedTab === 1 && "zhongwen-tab-menu-item-selected"
          }`}
          onClick={() => setSelectedTab(1)}
        >
          <span>Groups</span>
          <br />
          <small
            style={{
              fontSize: "0.8rem",
              color: "lightgray",
            }}
          >
            团体
          </small>
        </div>
      </div>

      <div className="content flex-col">
        <div className="zhongwen-title">
          <div className="zhongwen-heading-multiple">
            <div className="create-word-bank-container">
              <button
                className="
                create-word-bank-button
              "
              >
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
