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
  const getAudioFile = (pinyin) => {
    const audioFile = `https://www.mdbg.net/chinese/rsc/audio/voice_pinyin_pz/${pinyin}.mp3`;
    return audioFile;
  };
  const getFullAudioFile = async (pinyin) => {
    // Loop through each pinyin and get audio file
    const pinyinArray = pinyin.split(" ");
    const audioFiles = [];
    for (let i = 0; i < pinyinArray.length; i++) {
      const audioFile = getAudioFile(pinyinArray[i]);
      audioFiles.push(audioFile);
    }
    return audioFiles;
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
                      // Get array of audio files
                      const audioFile = await getFullAudioFile(data.pinyin);
                      // Loop through each audio file and play
                      for (let i = 0; i < audioFile.length; i++) {
                        const audio = new Audio(audioFile[i]);
                        audio.play();

                        // Wait for audio to finish playing before playing next audio file
                        await new Promise((resolve) =>
                          audio.addEventListener("ended", resolve)
                        );
                        
                      }
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
                            onClick={() => {
                              const audio = new Audio(
                                getAudioFile(data.pinyin.split(" ")[index])
                              );
                              audio.play();
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
