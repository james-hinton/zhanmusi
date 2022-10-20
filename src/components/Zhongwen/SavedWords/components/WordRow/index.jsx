import {
  getPinyinOfChar,
  getDefinitionOfChar,
} from "../../../Translate/TranslateUtils";

import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import { useState } from "react";


const WordRow = ({ activeColumns, word }) => {
  const [hover, setHover] = useState("");
  const [showMore, setShowMore] = useState(false);

  // loop through activeColumns and create a td for each
  const columns = activeColumns.map((column) => {
    if (column === "date") {
      return (
        <td key={column}>{new Date(word[column]).toLocaleDateString()}</td>
      );
    } else if (column === "hanzi") {
      return (
        <td key={column}>
          {/* split the word into characters */}
          {word[column].split("").map((character, index) => (
            <Tippy content={hover}>
              <span
                key={index}
                onMouseOver={async (event) => {
                  let pinyin = await getPinyinOfChar(character);
                  let defintion = await getDefinitionOfChar(character);

                  setHover(`${character} - ${pinyin} - ${defintion}`);
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
          {word.hanzi.split("").map((character, index) => (
            <Tippy content={hover}>
              <span
                key={index}
                onMouseOver={async (event) => {
                  let pinyin = await getPinyinOfChar(character);
                  let defintion = await getDefinitionOfChar(character);

                  setHover(`${character} - ${pinyin} - ${defintion}`);
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
      <div
        key={word.id}
        onClick={() => {
          setShowMore(!showMore);
        }}
        className="saved-words-row"
      >
        {columns}
      </div>
      {showMore && (
        <div className="show-more">
          {word.hanzi.split("").map((character, index) => {
            let definition = word.definition[index];

            return (
              <div key={index} className="show-more--row">
                <span className="show-more-char">{character}</span>
                <span className="show-more-pinyin">
                  {word.pinyin.split(" ")[index]}
                </span>
                <span className="show-more-definition">{definition}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default WordRow;
