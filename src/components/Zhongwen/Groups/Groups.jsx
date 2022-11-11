import { useEffect, useState } from "react";

// Components
import { createGroup, fetchGroups } from "./GroupsUtils";
import AddGroupModal from "./AddGroupModal/AddGroupModal";
import SavedWords from "../SavedWords/SavedWords";
import Group from "./Group/Group";
import Tippy from "@tippyjs/react";

// Icons
import AddIcon from "@mui/icons-material/Add";
import TableChartIcon from "@mui/icons-material/TableChart";

// Styles
import "./Groups.scss";
import "tippy.js/dist/tippy.css"; // optional

const Groups = ({
  groups,
  setGroups,
  activeGroup,
  setActiveGroup,
  groupWords,
  setGroupWords,
}) => {
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);
  const [showGroups, setShowGroups] = useState(false);

  useEffect(() => {
    // If group words is empty, show groups
    if (groupWords.length === 0) {
      setShowGroups(true);
    }
  }, [groupWords]);

  const groupTooltip = () => {
    // Either show or hide groups, but if no active group selected it should be please select a group
    if (!activeGroup) {
      return "Please select a group";
    }
    if (showGroups) {
      return "Hide groups";
    }
    return "Show groups";
  };

  return (
    <>
      <div className="zhongwen-title">
        <div className="zhongwen-heading-multiple">
          <div className="content-subtitle flex-col">
            {!activeGroup ? (
              <>
                <h1>管理您的群組</h1>
                <small>Guǎnlǐ nín de qún zǔ</small>
              </>
            ) : (
              <>
                <h1>{activeGroup.name}</h1>
                <small>{activeGroup.description}</small>
              </>
            )}
          </div>
        </div>
        {/* Button to add new group */}
        {showGroups && (
          <div
            className="zhongwen-add-group"
            onClick={() => {
              setShowAddGroupModal(true);
            }}
            style={{
              userSelect: "none",
            }}
          >
            <Tippy content="Create a new group" placement="top">
              <AddIcon />
            </Tippy>
          </div>
        )}

        {/* Button to show ghroups */}
        <div
          className="zhongwen-add-group"
          style={{
            marginLeft: "3rem",
            userSelect: "none",
            // If no active group, disable button
            opacity: !activeGroup ? 0.5 : 1,
            backgroundColor: !activeGroup && "#e0e0e0",
          }}
          onClick={() => {
            // Only hide groups if there are words in the group
            if (groupWords.length > 0) {
              setShowGroups(!showGroups);
            } else {
              setShowGroups(true);
            }
          }}
        >
          <Tippy content={groupTooltip()} placement="top">
            <TableChartIcon />
          </Tippy>
        </div>
      </div>
      {showGroups && (
        <div className="zhongwen-groups">
          {groups.map((group) => {
            return (
              <Group
                group={group}
                setGroupWords={setGroupWords}
                setGroups={setGroups}
                setShowGroups={setShowGroups}
                setActiveGroup={setActiveGroup}
              />
            );
          })}
        </div>
      )}
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
      {
        // If group words is not empty, show group words
        groupWords.length > 0 && (
          <SavedWords savedWords={groupWords} setSavedWords={setGroupWords} />
        )
      }
    </>
  );
};

export default Groups;
