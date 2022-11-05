const AddGroupModal = ({
  showAddGroupModal,
  setShowAddGroupModal,
  setGroups,
  groups,
  createGroup,
}) => {
  return (
    <div
      className="zhongwen-add-group-modal"
      onClick={() => {
        setShowAddGroupModal(false);
      }}
    >
      <div
        className="zhongwen-add-group-modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="zhongwen-add-group-modal-header">
          <h2>添加新群組</h2>
        </div>
        <div className="zhongwen-add-group-modal-body">
          <div className="zhongwen-add-group-modal-input">
            <label
              htmlFor="group-name"
              className="zhongwen-add-group-modal-label"
            >
              {" "}
              群組名稱
              <b>Group Name</b>
            </label>
            <input
              type="text"
              id="group-name"
              onInput={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            />
          </div>
          <div className="zhongwen-add-group-modal-input">
            <label
              htmlFor="group-description"
              className="zhongwen-add-group-modal-label"
            >
              群組描述 <b>Description</b>{" "}
            </label>
            <input type="text" id="group-description" />
          </div>
          <div className="zhongwen-add-group-modal-input">
            <label
              htmlFor="group-image"
              className="zhongwen-add-group-modal-label"
            >
              群組圖片<b>Image</b>{" "}
            </label>
            <input type="file" id="group-image" />
          </div>
        </div>
        <div className="zhongwen-add-group-modal-footer">
          <button
            className="zhongwen-add-group-modal-cancel"
            // On hover change text to Cancel
            onMouseEnter={(e) => {
              e.target.innerText = "Cancel";
            }}
            // On mouse leave change text back to 取消
            onMouseLeave={(e) => {
              e.target.innerText = "取消";
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowAddGroupModal(false);
            }}
          >
            取消
          </button>
          <button
            className="zhongwen-add-group-modal-save"
            // On hover change text to Save
            onMouseEnter={(e) => {
              e.target.innerText = "Save";
            }}
            // On mouse leave change text back to 保存
            onMouseLeave={(e) => {
              e.target.innerText = "保存";
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const groupName = document.getElementById("group-name").value;
              const groupDescription =
                document.getElementById("group-description").value;
              const groupImage = document.getElementById("group-image").value;
              const newGroup = {
                name: groupName,
                description: groupDescription,
                image: groupImage,
              };

              // Add new group to groups
              createGroup(1, newGroup);

              // Close modal
              setShowAddGroupModal(false);
            }}
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGroupModal;
