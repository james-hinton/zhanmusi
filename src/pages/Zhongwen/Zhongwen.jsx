import { useEffect, useState } from "react";

// Components
import TranslateInput from "../../components/Zhongwen/Translate/TranslateInput";
import SavedWords from "../../components/Zhongwen/SavedWords/SavedWords";
import Groups from "../../components/Zhongwen/Groups/Groups";

// Utilities
import { fetchGroups } from "../../components/Zhongwen/Groups/GroupsUtils";
import { getSavedWords } from "../../components/Zhongwen/SavedWords/SavedWordsUtils";

// Styles
import "./Zhongwen.scss";
import "react-tabs/style/react-tabs.css";
import "../../components/Zhongwen/Groups/AddGroupModal/AddGroupModal.scss";

const Zhongwen = () => {
  const [savedWords, setSavedWords] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const [activeGroup, setActiveGroup] = useState(null);
  const [groupWords, setGroupWords] = useState([]);

  useEffect(() => {
    const getSavedWordsFromStorage = async () => {
      const words = await getSavedWords();
      setSavedWords(words);
    };

    if (!savedWords.length) {
      getSavedWordsFromStorage();
    }
  }, []);

  useEffect(() => {
    const fetchGroupsData = async () => {
      const groups = await fetchGroups(1);
      setGroups(groups);
    };

    fetchGroupsData();
  }, []);

  useEffect(() => {
    localStorage.setItem("Zhongwen", "found");
  }, []);

  return (
    <>
      <div className="content flex-col">
        <div className="zhongwen-title">
          <h1>你好，詹姆斯。</h1>
        </div>

        <TranslateInput
          setSavedWords={setSavedWords}
          activeGroup={activeGroup}
          setGroupWords={setGroupWords}
        />
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
          <span>My Words</span>
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
        {selectedTab === 0 && (
          <>
            <div className="zhongwen-title">
              <div className="zhongwen-heading-multiple">
                <div className="content-subtitle flex-col">
                  <h1>保存的单词</h1>
                  <small>Bǎocún de dāncí</small>
                </div>
              </div>
            </div>

            <SavedWords savedWords={savedWords} setSavedWords={setSavedWords} />
          </>
        )}

        {selectedTab === 1 && (
          <>
            <Groups
              groups={groups}
              setGroups={setGroups}
              activeGroup={activeGroup}
              setActiveGroup={setActiveGroup}
              groupWords={groupWords}
              setGroupWords={setGroupWords}
            />
          </>
        )}
      </div>
    </>
  );
};

export default Zhongwen;
