import { useEffect, useState } from "react";

// Components
import TranslateInput from "../../components/Zhongwen/Translate/TranslateInput";
import SavedWords from "../../components/Zhongwen/SavedWords/SavedWords";
import Groups from "../../components/Zhongwen/Groups/Groups";
import AddGroupModal from "../../components/Zhongwen/Groups/AddGroupModal";

// Utilities
import { createGroup } from "../../components/Zhongwen/Groups/GroupsUtils";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Styles
import "./Zhongwen.scss";
import "react-tabs/style/react-tabs.css";
import "../../components/Zhongwen/Groups/AddGroupModal.scss";

const Zhongwen = () => {
  const [savedWords, setSavedWords] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedTab, setSelectedTab] = useState(1);
  const [showAddGroupModal, setShowAddGroupModal] = useState(true);

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
            <div className="zhongwen-title">
              <div className="zhongwen-heading-multiple">
                <div className="content-subtitle flex-col">
                  <h1>管理您的群組</h1>
                  <small>Guǎnlǐ nín de qún zǔ</small>
                </div>
              </div>
              {/* Button to add new group */}
              <div
                className="zhongwen-add-group"
                onClick={() => {
                  setShowAddGroupModal(true);
                }}
              >
                <AddIcon />
              </div>
            </div>
            <Groups />
            {showAddGroupModal && (
              <AddGroupModal
                showAddGroupModal={showAddGroupModal}
                setShowAddGroupModal={setShowAddGroupModal}
                groups={groups}
                setGroups={setGroups}
                createGroup={createGroup}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Zhongwen;
