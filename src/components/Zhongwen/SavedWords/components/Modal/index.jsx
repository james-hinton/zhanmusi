import { getDefinitionOfChar } from "../../../Translate/TranslateUtils";
import "./style.scss";

// Import volume.png from assets
import volume from "../../../../../assets/images/volume.png";

const Modal = ({ openModal, setOpenModal, data }) => {
  const renderDefinition = (character) => {
    const definition = getDefinitionOfChar(character);
    // Capitalize first letter of definition
    return definition.charAt(0).toUpperCase() + definition.slice(1);
  };

  const playAudio = async (pinyin) => {
    // Make a request to backend/speak/zhongwen/pinyin to get audio
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/speak/zhongwen/${pinyin}`
    );

    // This returns a blob of an mp3 file
    const blob = await response.blob();

    // Create an audio object
    const audio = new Audio(URL.createObjectURL(blob));
    audio.play();
  };

  return (
    <>
      {openModal && (
        <div className="zhongwen-modal" onClick={() => setOpenModal(false)}>
          <div
            className="zhongwen-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="zhongwen-modal-header">
              <h2>{data.hanzi}</h2>
            </div>
            <div className="zhongwen-modal-body">
              <div className="zhongwen-modal-body-content">
                {/* Pinyin */}
                <div className="zhongwen-modal-body-content-row">
                  <div className="zhongwen-modal-body-content-row-label">
                    Pinyin
                  </div>
                  <div
                    className="zhongwen-modal-body-content-row-value"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={async (e) => {
                      await playAudio(data.pinyin);
                    }}
                  >
                    {data.pinyin}

                    <span className="zhongwen-modal-body-content-row-value-audio">
                      <img
                        src={volume}
                        alt="audio"
                        className="zhongwen-modal-audio-icon"
                      />
                    </span>
                  </div>
                </div>
                {/* English */}
                <div className="zhongwen-modal-body-content-row">
                  <div className="zhongwen-modal-body-content-row-label">
                    English
                  </div>
                  <div className="zhongwen-modal-body-content-row-value">
                    {data.english}
                  </div>
                </div>
                {/* A table of the pinyin split */}
                <div className="zhongwen-modal-body-content-row">
                  <div className="zhongwen-modal-body-content-row-value">
                    <table className="zhongwen-modal-table">
                      <tr>
                        <th>Character</th>
                        <th>Pinyin</th>
                        <th>English</th>
                      </tr>
                      {data.hanzi.split("").map((character, index) => {
                        return (
                          <tr
                            onClick={async () => {
                              playAudio(data.pinyin.split(" ")[index]);
                            }}
                          >
                            <td
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                window.open(
                                  `https://www.mdbg.net/chinese/dictionary?page=worddict&wdrst=0&wdqb=${character}`,
                                  "_blank"
                                );
                              }}
                              className="zhongwen-modal-table-character"
                            >
                              {character}
                            </td>
                            <td>{data.pinyin.split(" ")[index]}</td>
                            <td>{renderDefinition(character)}</td>
                          </tr>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
