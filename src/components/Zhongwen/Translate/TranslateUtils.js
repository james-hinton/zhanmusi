// Data
import cedict from "./cedict_ts.json";

const getPinyin = async (query) => {
  // split the queyr into its chinese characters
  const queryChars = query.split("");

  // get the pinyin of each character
  const pinyinChars = await Promise.all(
    queryChars.map(async (char) => {
      const pinyin = await getPinyinOfChar(char);
      return pinyin;
    })
  );

  // join the pinyin characters together
  const pinyin = pinyinChars.join(" ");
  return pinyin;
};

export const getPinyinOfChar = (char) => {
  const pinyin = cedict.find(
    (entry) => entry.traditional === char || entry.simplified === char
  );

  if (pinyin) {
    return pinyin.pinyin;
  }

  return "";
};

export const getDefinitionOfChar = (char) => {
  const definition = cedict.find(
    (entry) => entry.traditional === char || entry.simplified === char
  );

  if (definition) {
    return definition.definition;
  }

  return "";
};

export const addToSavedWords = async (word, group=0) => {
  // Make a request to the server to add the word to the saved words
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const URL = `${BASE_URL}/saved-words`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      word,
      group,
    }),
  };

  await fetch(URL, options);
  return 'success';
};

export const translater = async (query) => {
  const TRANSLATE_URL = process.env.REACT_APP_BACKEND_URL + "/translate";

  const payload = {
    q: query,
    source: "en",
    target: "zh",
  };

  // POST request to API
  let response = await fetch(TRANSLATE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  // Get response as JSON
  let json = await response.json();

  // Return translated text
  let translatedText = json["data"]["translations"]["translatedText"];
  let translation = {
    chinese: translatedText,
    english: query,
    pinyin: await getPinyin(translatedText),
    date: new Date().toLocaleDateString().split("/").join("-"),
  };

  return translation;
};
