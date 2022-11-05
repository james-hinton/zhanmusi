import { useEffect, useState } from "react";

// Components
import { createGroup, fetchGroups } from "./GroupsUtils";
import AddGroupModal from "./AddGroupModal/AddGroupModal";
import SavedWords from "../SavedWords/SavedWords";
import Group from "./Group/Group";

// Icons
import AddIcon from "@mui/icons-material/Add";

// Styles
import "./Groups.scss";

const Groups = ({ groups, setGroups }) => {
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);
  const [groupWords, setGroupWords] = useState([]);

  return (
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
      <div className="zhongwen-groups">
        {groups.map((group) => {
          return (
            <Group
              group={group}
              setGroupWords={setGroupWords}
              setGroups={setGroups}
            />
          );
        })}
      </div>
      {showAddGroupModal && (
        <AddGroupModal
          showAddGroupModal={showAddGroupModal}
          setShowAddGroupModal={setShowAddGroupModal}
          groups={groups}
          setGroups={setGroups}
          createGroup={createGroup}
          fetchGroups={fetchGroups}
        />
      )}

      <SavedWords savedWords={groupWords} setSavedWords={setGroupWords} />
    </>
  );
};

export default Groups;
