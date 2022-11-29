import { useEffect, useState } from "react";

// Components
import { getGroupedSavedWords } from "../../SavedWords/SavedWordsUtils";
import { translater, addToSavedWords } from "../../Translate/TranslateUtils";
import { updateGroup, deleteGroup } from "../GroupsUtils";

// Icons
import PlusIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";

// Styles
import "./ManageGroupModal.scss";
import { createGroup, fetchGroups } from "../GroupsUtils";

const ManageGroupModal = ({
  showManageGroupModal,
  setShowManageGroupModal,
  group,
  setGroups,
}) => {
  const [wordsInGroup, setWordsInGroup] = useState([]);
  const [showSearch, setShowSearch] = useState(true);
  const [showEdit, setShowEdit] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGroupedWords = async () => {
      const groupedWords = await getGroupedSavedWords(group.id);
      // Reverse
      setWordsInGroup(groupedWords);

      // If no words, show search
      if (groupedWords.length === 0) {
        setShowSearch(true);
      }
    };
    getGroupedWords();
  }, [group]);

  const handleTranslate = async (e) => {
    if (e.length > 0) {
      // If not already in group
      if (!wordsInGroup.some((word) => word.english === e)) {
        setLoading(true);

        // Temporaryly add to group
        setWordsInGroup((prev) => [
          {
            english: e,
            status: "loading",
          },
          ...prev,
        ]);

        const translation = await translater(e);
        await addToSavedWords(translation, group.id);
        const words = await getGroupedSavedWords(group.id);
        setWordsInGroup(words);
        setLoading(false);
      }
    }
  };

  return (
    <div
      className="zhongwen-manage-group-modal"
      onClick={() => {
        setShowManageGroupModal(false);
      }}
    >
      <div
        className="zhongwen-manage-group-modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="zhongwen-manage-group-modal-header">
          <h1>管理组</h1>
          <EditIcon
            className="zhongwen-manage-group-modal-header-icon"
            onClick={() => {
              setShowEdit(!showEdit);
            }}
          />
        </div>
        {showEdit && (
          <>
            <div className="zhongwen-manage-group-modal-body">
              <div className="zhongwen-manage-group-modal-input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={group.name}
                />
              </div>
              <div className="zhongwen-manage-group-modal-input">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  defaultValue={group.description}
                />
              </div>
              <div className="zhongwen-manage-group-modal-input">
                <label htmlFor="image">Image</label>
                {/* Sub text */}
                <div className="zhongwen-add-group-modal-subtext">
                  <p>
                    Use an Unsplash image URL
                    <a
                      href="https://unsplash.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Click to find an image
                    </a>
                  </p>
                </div>
                <input
                  type="text"
                  name="image"
                  id="image"
                  defaultValue={group.image}
                />
              </div>

              <div className="zhongwen-manage-group-modal-footer">
                <button
                  className="zhongwen-add-group-modal-save"
                  onMouseEnter={(e) => {
                    e.target.innerText = "Save";
                  }}
                  onMouseLeave={(e) => {
                    e.target.innerText = "保存";
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // Save the group
                    const name = document.getElementById("name").value;
                    const description =
                      document.getElementById("description").value;
                    const image = document.getElementById("image").value;

                    const updatedGroup = {
                      id: group.id,
                      name,
                      description,
                      image,
                    };

                    const sendData = async () => {
                      // Update the group
                      await updateGroup(1, updatedGroup);
                      // Refresh the groups
                      await fetchGroups(1).then((groups) => {
                        setGroups(groups);
                      });

                      // Close the modal
                      setShowManageGroupModal(false);
                    };

                    sendData();
                  }}
                >
                  取消
                </button>
                {/* Delete button*/}
                <button
                  className="zhongwen-add-group-modal-save"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    marginLeft: 20,
                  }}
                  onMouseEnter={(e) => {
                    e.target.innerText = "Delete";
                  }}
                  onMouseLeave={(e) => {
                    e.target.innerText = "删除";
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    const sendData = async () => {
                      // Delete the group
                      await deleteGroup(1, group.id);
                      // Refresh the groups
                      await fetchGroups(1).then((groups) => {
                        setGroups(groups);
                      });

                      // Close the modal
                      setShowManageGroupModal(false);
                    };

                    sendData();
                  }}
                >
                  删除
                </button>
              </div>
            </div>
          </>
        )}
        <div className="zhongwen-manage-group-modal-saved-words">
          <div className="zhongwen-manage-group-modal-saved-words-header">
            <h2>已保存的单词</h2>
            {!showSearch ? (
              <PlusIcon
                className="zhongwen-manage-group-modal-saved-words-header-icon"
                onClick={() => {
                  setShowSearch(true);
                }}
              />
            ) : (
              <MinusIcon
                className="zhongwen-manage-group-modal-saved-words-header-icon"
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            )}
          </div>
          {showSearch && (
            <div className="zhongwen-manage-group-modal-saved-words-search">
              <label htmlFor="search">Search / Translate</label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Enter a word or phrase here to add it to your group"
                onChange={(e) => {
                  console.log(`Query: ${e.target.value}`);
                  setQuery(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleTranslate(e.target.value);
                    // Clear the input
                    e.target.value = "";
                  }
                }}
              />
              <button
                onClick={(e) => {
                  handleTranslate(query);
                  // Clear the input
                  document.getElementById("search").value = "";
                }}
              >
                Add
              </button>
            </div>
          )}

          {/* List of the english phrases */}
          <>
            <h4 className="zhongwen-manage-group-modal-saved-words-list-header">
              Words / Phrases ( 短语 )
            </h4>
            <div className="zhongwen-manage-group-modal-saved-words-list">
              {wordsInGroup.length > 0 ? (
                <>
                  {wordsInGroup.map((word) => {
                    return (
                      <div className="zhongwen-manage-group-modal-saved-words-list-item">
                        {word.english}
                      </div>
                    );
                  })}
                </>
              ) : (
                <div
                  className="zhongwen-manage-group-modal-saved-words"
                  style={{
                    marginTop: 20,
                  }}
                >
                  Nothing in this group, add some phrases using the query bar
                  above
                </div>
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default ManageGroupModal;
