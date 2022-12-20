import React, { useState, useEffect } from "react";
import StopCircleIcon from "@mui/icons-material/StopCircle";

import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
const Listener = ({ stopPopcorn, setStopPopcorn }) => {
  // Initialize state variables
  const [isListening, setIsListening] = useState(false);
  const [popTimestamps, setPopTimestamps] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const startListening = () => {
    setPopTimestamps([]);
    setStopPopcorn(false);

    // Check if the browser supports the Web Audio API
    if (window.AudioContext && isListening === false) {
      // Request access to the user's microphone
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        // Create an AudioContext and an audio source from the microphone stream
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);

        // Create an analyzer node to analyze the audio data
        const analyzer = audioContext.createAnalyser();
        analyzer.fftSize = 2048;
        const bufferLength = analyzer.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        source.connect(analyzer);

        let popTimes = [];

        // Create an interval to check the audio data every 100ms
        const interval = setInterval(() => {
          analyzer.getByteTimeDomainData(dataArray);

          // Check if the audio data is above a certain threshold
          const isLoudNoise = dataArray.some((data) => data > 130);

          if (isLoudNoise) {
            // Get frequency
            analyzer.getByteFrequencyData(dataArray);

            // Find the frequency with the highest amplitude
            let maxAmplitude = 0;
            let maxAmplitudeIndex = 0;
            for (let i = 0; i < dataArray.length; i++) {
              if (dataArray[i] > maxAmplitude) {
                maxAmplitude = dataArray[i];
                maxAmplitudeIndex = i;
              }
            }

            // Calculate the pitch of the audio based on the frequency with the highest amplitude
            const pitch =
              (audioContext.sampleRate / analyzer.fftSize) * maxAmplitudeIndex;

            // Filter out pitches that are not in the range of a popcorn pop
            if (pitch > 1000 && pitch < 1850) {
              // Add the current timestamp to the popTimestamps array
              popTimes.push(Date.now());
              setPopTimestamps((prev) => [...prev, Date.now()]);
            }
          }
          // If its been more than 1 seconds since the last pop, end.
          if (popTimes.length > 40) {
            const lastPop = popTimes[popTimes.length - 1];
            if (Date.now() - lastPop > 3000) {
              // Clear the interval and set the isListening state variable to false
              setStopPopcorn(true);
              clearInterval(interval);
              setIsListening(false);
            }
          }
        }, 100);

        // Set the intervalId state variable to the interval ID
        setIntervalId(interval);

        // Set the isListening state variable to true
        setIsListening(true);
      });
    }
  };

  const stopListening = () => {
    // Clear the interval and set the isListening state variable to false
    clearInterval(intervalId);
    setIsListening(false);
  };

  return (
    <div>
      {!isListening ? (
        <div className="popcorn-content__button">
          {/* Bg color rgb(254 253 173 / 92%); */}
          <button
            onClick={startListening}
            style={{
              backgroundColor: "rgb(254 253 173 / 92%)",
              color: "#565526",
            }}
          >
            <PlayCircleFilledWhiteIcon style={{ fontSize: 40 }} />
          </button>
        </div>
      ) : (
        <div className="popcorn-content__button">
          <button onClick={stopListening}>
            <StopCircleIcon style={{ fontSize: 40 }} />
          </button>
        </div>
      )}

      {isListening && (
        <div className="popcorn-content__total">
          <span>Total Poppin: </span>
          <span>{popTimestamps.length}</span>
        </div>
      )}
    </div>
  );
};

export default Listener;
