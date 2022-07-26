import { useEffect } from "react";
import { useState } from "react";
import "./SavedWords.scss";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

import { getSavedWords } from "./SavedWordsUtils";
import {
  getPinyinOfChar,
  getDefinitionOfChar,
} from "../Translate/TranslateUtils";

const SavedWords = ({ savedWords, setSavedWords }) => {
  const [activeColumns, setActiveColumns] = useState([
    "english",
    "pinyin",
    "chinese",
  ]);

  const [hover, setHover] = useState("");

  useEffect(async () => {
    const words = await getSavedWords();
    await setSavedWords(words);
  }, []);

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
          {savedWords &&
            savedWords.length > 0 &&
            savedWords.map((word, index) => {
              // loop through activeColumns and create a td for each
              const columns = activeColumns.map((column) => {
                if (column === "date") {
                  return (
                    <td key={column}>
                      {new Date(word[column]).toLocaleDateString()}
                    </td>
                  );
                } else if (column === "chinese") {
                  return (
                    <td key={column}>
                      {/* split the word into characters */}
                      {word[column].split("").map((character, index) => (
                        <Tippy content={hover}>
                          <span
                            key={index}
                            onMouseOver={async (event) => {
                              let pinyin = await getPinyinOfChar(character);
                              let defintion = await getDefinitionOfChar(
                                character
                              );

                              setHover(
                                `${character} - ${pinyin} - ${defintion}`
                              );
                            }}
                          >
                            {character}
                          </span>
                        </Tippy>
                      ))}
                    </td>
                  );
                } else if (column === "pinyin") {
                  let pinyin = word[column];
                  // split the pinyin into characters
                  let pinyinCharacters = pinyin.split(" ");

                  return (
                    <td key={column}>
                      {word.chinese.split("").map((character, index) => (
                        <Tippy content={hover}>
                          <span
                            key={index}
                            onMouseOver={async (event) => {
                              let pinyin = await getPinyinOfChar(character);
                              let defintion = await getDefinitionOfChar(
                                character
                              );

                              setHover(
                                `${character} - ${pinyin} - ${defintion}`
                              );
                            }}
                          >
                            {pinyinCharacters[index]}{" "}
                          </span>
                        </Tippy>
                      ))}
                    </td>
                  );
                } else {
                  return <td key={column}>{word[column]}</td>;
                }
              });

              // return a tr for each word
              return (
                <>
                  <tr
                    key={index}
                    onClick={() => {
                      savedWords[index].showMore = !savedWords[index].showMore;
                      setSavedWords([...savedWords]);
                    }}
                    className={
                      savedWords[index].showMore ? "show-more-title" : ""
                    }
                  >
                    {columns}
                  </tr>
                  {savedWords[index].showMore && (
                    <div className="show-more">
                      {word.chinese.split("").map((character, index) => {
                        let definition = word.definition[index];

                        return (
                          <div key={index} className="show-more--row">
                            <span className="show-more-char">{character}</span>
                            <span className="show-more-pinyin">
                              {word.pinyin.split(" ")[index]}
                            </span>
                            <span className="show-more-definition">
                              {definition}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default SavedWords;
