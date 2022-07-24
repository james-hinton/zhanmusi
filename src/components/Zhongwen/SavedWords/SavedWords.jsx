import { useState } from "react";
import "./SavedWords.scss";

const SavedWords = () => {
  // Table of Saved Words

  let words = [
    {
      chinese: "詹姆斯是最酷的人",
      english: "james is the coolest person",
      pinyin: "Zhānmǔsī shì zuì kù de rén",
      date: new Date().toLocaleDateString().split("/").join("-"),
    },
    {
      chinese: "我是最酷的人",
      english: "I am the coolest person",
      pinyin: "Wǒ shì zuì kù de rén",
      date: new Date().toLocaleDateString().split("/").join("-"),
    },
    {
      english: "where are you?",
      chinese: "你在哪里？",
      pinyin: "Nǐ zài nǎlǐ?",
      // date with format "DD/MM/YYYY"
      date: new Date().toLocaleDateString().split("/").join("-"),
    },
    {
      english: "Okay, lets see if this actually works. I'll have one steak for dinner.",
      chinese: "好，让我们看看这个是不是真的好用。我会把一个牛排给你吃。",
      pinyin: "Hǎo, ràng wǒmen kàn kàn zhège shì bùshì zhēng de hǎo yòng. Wǒ huì bǎ yī gè niúpái gùi nǐ chī.",
      date: new Date().toLocaleDateString().split("/").join("-"),
    },
    {
      english: "I'm going to go to the store.",
      chinese: "我要去商店。",
      pinyin: "Wǒ yào qù shāngdiàn.",
      date: new Date().toLocaleDateString().split("/").join("-"),
    }
    ,
    {
      english: "Wow, I had no idea that copilot was so cool.",
      chinese: "哇，我以前没有想过这个是不是真的好用。",
      pinyin: "Wā, yǐqián méiyǒu xiǎngguò zhège shì bùshì zhēng de hǎo yòng.",
      date: new Date().toLocaleDateString().split("/").join("-"),
    }
  ];

  

  const [activeColumns, setActiveColumns] = useState([
    "english",
    "pinyin",
    "date",
    "chinese",
  ]);

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
              <th key={column}>{
                 column.charAt(0).toUpperCase() + column.slice(1)
              }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {words.map((word, index) => {
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
