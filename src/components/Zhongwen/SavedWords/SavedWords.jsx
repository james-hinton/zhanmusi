import { useEffect } from "react";
import { useState } from "react";
import "./SavedWords.scss";

import { getSavedWords } from "./SavedWordsUtils";

const SavedWords = () => {
  const [activeColumns, setActiveColumns] = useState([
    "english",
    "pinyin",
    "date",
    "chinese",
  ]);

  const [savedWords, setSavedWords] = useState([]);

  useEffect(() => {
    getSavedWords().then((words) => {
      setSavedWords(words);
    });
  }, []);

  console.log(savedWords)

  return (
    <div className="saved-words">
      <div className="checkbox-container">
        <div className="active-columns">
          <div className="active-columns--checkbox">
            <input
              type="checkbox"
              id="english"
              name="english"
              checked={activeColumns.includes("english")}
              onChange={() => {
                if (activeColumns.includes("english")) {
                  setActiveColumns(
                    activeColumns.filter((column) => column !== "english")
                  );
                } else {
                  setActiveColumns([...activeColumns, "english"]);
                }
              }}
            />
            <label htmlFor="english">English</label>
          </div>
          <div className="active-columns--checkbox">
            <input
              type="checkbox"
              id="pinyin"
              name="pinyin"
              checked={activeColumns.includes("pinyin")}
              onChange={() => {
                if (activeColumns.includes("pinyin")) {
                  setActiveColumns(
                    activeColumns.filter((column) => column !== "pinyin")
                  );
                } else {
                  setActiveColumns([...activeColumns, "pinyin"]);
                }
              }}
            />
            <label htmlFor="pinyin">Pinyin</label>
          </div>
          <div className="active-columns--checkbox">
            <input
              type="checkbox"
              id="date"
              name="date"
              checked={activeColumns.includes("date")}
              onChange={() => {
                if (activeColumns.includes("date")) {
                  setActiveColumns(
                    activeColumns.filter((column) => column !== "date")
                  );
                } else {
                  setActiveColumns([...activeColumns, "date"]);
                }
              }}
            />
            <label htmlFor="date">Date</label>
          </div>
          <div className="active-columns--checkbox">
            <input
              type="checkbox"
              id="chinese"
              name="chinese"
              checked={activeColumns.includes("chinese")}
              onChange={() => {
                if (activeColumns.includes("chinese")) {
                  setActiveColumns(
                    activeColumns.filter((column) => column !== "chinese")
                  );
                } else {
                  setActiveColumns([...activeColumns, "chinese"]);
                }
              }}
            />
            <label htmlFor="chinese">Chinese</label>
          </div>
        </div>
      </div>

      <table className="saved-words-table">
        <thead>
          <tr>
            {activeColumns.map((column) => (
              <th key={column}>
                {column.charAt(0).toUpperCase() + column.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {savedWords.map((word, index) => {
            // loop through activeColumns and create a td for each
            const columns = activeColumns.map((column) => {
              return <td key={column}>{word[column]}</td>;
            });

            // return a tr for each word
            return <tr key={index}>{columns}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SavedWords;
