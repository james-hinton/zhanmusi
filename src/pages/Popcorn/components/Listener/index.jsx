import React, { useState, useEffect } from "react";

const Listener = () => {
  // Initialize state variables
  const [isListening, setIsListening] = useState(false);
  const [popTimestamps, setPopTimestamps] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  const startListening = () => {
    setPopTimestamps([]);

    // Check if the browser supports the Web Audio API
    if (window.AudioContext && isListening === false) {
      // This listens to the audio, and when it detects a pop, it adds the timestamp to the popTimestamps array
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

        source.connect(analyzer)
        
        let popTimes = [];

        // Create an interval to check the audio data every 100ms
        const interval = setInterval(() => {
          analyzer.getByteTimeDomainData(dataArray);

          // Check if the audio data is above a certain threshold
          const isPop = dataArray.some((data) => data > 130);

          if (isPop) {
            console.log("POP!");
            // If it is, add the current timestamp to the popTimestamps array
            popTimes.push(Date.now());
            setPopTimestamps((prev) => [...prev, Date.now()]);
          }
          // If its been more than 1 seconds since the last pop, end.
          if (popTimes.length > 0) {
            const lastPop = popTimes[popTimes.length - 1];
            if (Date.now() - lastPop > 1000) {
              // Clear the interval and set the isListening state variable to false
              console.log("STOPPING DUE TO NO POPS");
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
          <button onClick={startListening}>Start Listening</button>
        </div>
      ) : (
        <div className="popcorn-content__button">
          <button onClick={stopListening}>Stop Listening</button>
        </div>
      )}

      {isListening ? "Listening for popcorn pops..." : "Not listening"}

      <div className="popcorn-content__timestamps">
        <h3>Timestamps</h3>
        {/* TOTAL */}
        <div className="popcorn-content__timestamp">
          <span>Total: </span>
          <span>{popTimestamps.length}</span>
        </div>
        {/* 1 */}
      </div>
    </div>
  );
};

export default Listener;
