import { useEffect, useState } from "react";

// Components
import { getGroupedSavedWords } from "../../SavedWords/SavedWordsUtils";
import { translater, addToSavedWords } from "../../Translate/TranslateUtils";

// Icons
import PlusIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";

// Styles
import "./ManageGroupModal.scss";

const ManageGroupModal = ({
  showManageGroupModal,
  setShowManageGroupModal,
  group,
  setGroups,
}) => {
  const [wordsInGroup, setWordsInGroup] = useState([]);
  const [showSearch, setShowSearch] = useState(true);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGroupedWords = async () => {
      const groupedWords = await getGroupedSavedWords(group.id);
      // Reverse
      setWordsInGroup(groupedWords.reverse());
    };
    getGroupedWords();
  }, [group]);

  const handleTranslate = async (e) => {
    if (e.length > 0) {
      setLoading(true);

      const translation = await translater(e);
      await addToSavedWords(translation, group.id);
      const words = await getGroupedSavedWords(group.id);
      setWordsInGroup(words);
      setLoading(false);
    }
  };

  console.log("Words in group", wordsInGroup);

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
        </div>
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
            <input type="file" name="image" id="image" />
          </div>
        </div>
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
          {showSearch &&
            (loading ? (
              <>Loading ...</>
            ) : (
              <div className="zhongwen-manage-group-modal-saved-words-search">
                <label htmlFor="search">Search / Translate</label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  onChange={(e) => {
                    console.log(`Query: ${e.target.value}`);
                    setQuery(e.target.value);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleTranslate(e.target.value);
                    }
                  }}
                />
                <button
                  onClick={(e) => {
                    handleTranslate(query);
                  }}
                >
                  Add
                </button>
              </div>
            ))}

          {/* List of the english phrases */}
          {!loading && (
            <div className="zhongwen-manage-group-modal-saved-words-list">
              {wordsInGroup.map((word) => {
                return (
                  <div className="zhongwen-manage-group-modal-saved-words-list-item">
                    {word.english}
                  </div>
                );
              })}
            </div>
          )}
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
            }}
          >
            取消
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageGroupModal;
