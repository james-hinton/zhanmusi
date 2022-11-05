import { useEffect, useState } from "react";

// Components
import ManageGroupModal from "../ManageGroupModal/ManageGroupModal";

// Utils
import { getGroupedSavedWords } from "../../SavedWords/SavedWordsUtils";

// Manage Icon
import SettingsIcon from "@mui/icons-material/Settings";

const Group = ({
  group,
  setGroupWords,
  setGroups,
  setShowGroups,
  setActiveGroup,
}) => {
  const [showManageGroupModal, setShowManageGroupModal] = useState(false);

  return (
    <>
      <div
        className="zhongwen-group-card"
        key={group.id}
        onClick={() => {
          const getGroupedWords = async () => {
            const groupedWords = await getGroupedSavedWords(group.id);
            setGroupWords(groupedWords);

            // If grouped words empty, open manage group modal
            if (groupedWords.length === 0) {
              setShowManageGroupModal(true);
              setActiveGroup(null);
            } else {
              setShowGroups(false);
              setActiveGroup(group);
            }
          };
          getGroupedWords();
        }}
      >
        <div className="zhongwen-group-card-header">
          <img src={group.image} alt="group" />
        </div>
        <div className="zhongwen-group-card-body">
          <h2>{group.name}</h2>
          <p>{group.description}</p>
        </div>
        <div className="zhongwen-group-card-footer">
          {/* View and Manage Button */}

          <div
            className="zhongwen-group-card-footer-button"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setShowManageGroupModal(true);
            }}
          >
            <SettingsIcon />
          </div>
        </div>
      </div>
      {showManageGroupModal && (
        <ManageGroupModal
          showManageGroupModal={showManageGroupModal}
          setShowManageGroupModal={setShowManageGroupModal}
          group={group}
          setGroups={setGroups}
        />
      )}
    </>
  );
};

export default Group;
