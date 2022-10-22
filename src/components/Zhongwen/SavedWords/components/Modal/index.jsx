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
  const getFullAudioFile = async (characters) => {
    const resp = await fetch(
      "https://westeurope.tts.speech.microsoft.com/cognitiveservices/v1?",
      {
        method: "POST",
        headers: {
          authority: "westeurope.tts.speech.microsoft.com",
          accept: "*/*",
          "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
          authorization:
            "Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiJ3ZXN0ZXVyb3BlIiwic3Vic2NyaXB0aW9uLWlkIjoiZTExODFkYTI2YzhhNGQ5ZDlkYjcwOWM0YzkwNjQxYTciLCJwcm9kdWN0LWlkIjoiQ29nbml0aXZlU2VydmljZXMuUzAiLCJjb2duaXRpdmUtc2VydmljZXMtZW5kcG9pbnQiOiJodHRwczovL2FwaS5jb2duaXRpdmUubWljcm9zb2Z0LmNvbS9pbnRlcm5hbC92MS4wLyIsImF6dXJlLXJlc291cmNlLWlkIjoiL3N1YnNjcmlwdGlvbnMvMTUzYTFlMTEtYTU5Yi00M2IxLTk5ZWUtNGI2NmVlMjk1ZDljL3Jlc291cmNlR3JvdXBzL1Byb2RFc3NlbnRpYWxzL3Byb3ZpZGVycy9NaWNyb3NvZnQuQ29nbml0aXZlU2VydmljZXMvYWNjb3VudHMvU1RDSVRyYW5zbGF0aW9uQW5zd2VyTmV1cmFsV2VzdEV1cm9wZSIsInNjb3BlIjpbInNwZWVjaHRvaW50ZW50cyIsImh0dHBzOi8vYXBpLm1pY3Jvc29mdHRyYW5zbGF0b3IuY29tLyIsInNwZWVjaHNlcnZpY2VzIiwidmlzaW9uIl0sImF1ZCI6WyJ1cm46bXMuc3BlZWNoIiwidXJuOm1zLmx1aXMud2VzdGV1cm9wZSIsInVybjptcy5taWNyb3NvZnR0cmFuc2xhdG9yIiwidXJuOm1zLnNwZWVjaHNlcnZpY2VzLndlc3RldXJvcGUiLCJ1cm46bXMudmlzaW9uLndlc3RldXJvcGUiXSwiZXhwIjoxNjY2NDYyODI4LCJpc3MiOiJ1cm46bXMuY29nbml0aXZlc2VydmljZXMifQ.xDVosWo4EVZs_rnjIt28D8Py1RW2HAmHh0LTi9Fck1M",
          "cache-control": "no-cache",
          "content-type": "application/ssml+xml",
          origin: "https://www.bing.com",
          pragma: "no-cache",
          referer: "https://www.bing.com/",
          "sec-ch-ua":
            '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "user-agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
          "x-microsoft-outputformat": "audio-16khz-32kbitrate-mono-mp3",
        },
        body: `<speak version='1.0' xml:lang='zh-CN'><voice xml:lang='zh-CN' xml:gender='Female' name='zh-CN-XiaoxiaoNeural'><prosody rate='-20.00%'>
        {${characters}}
        </prosody></voice></speak>`,
      }
    );
    // Convert characters to unicode

    const blob = await resp.blob();
    const audioFile = URL.createObjectURL(blob);
    return audioFile;
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
                  <div
                    className="zhongwen-modal-body-content-row-label"

                  >
                    Pinyin
                  </div>
                  <div
                    className="zhongwen-modal-body-content-row-value"
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={async (e) => {
                      // Get audio for whole sentence
                      const audioFile = await getFullAudioFile(data.hanzi);
                      const audio = new Audio(audioFile);
                      audio.play();
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
