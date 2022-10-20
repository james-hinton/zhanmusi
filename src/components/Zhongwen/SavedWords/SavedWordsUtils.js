import {
  getPinyinOfChar,
  getDefinitionOfChar,
} from "../Translate/TranslateUtils";

export const getSavedWords = async () => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const URL = `${BASE_URL}/saved-words`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(URL, options);
  const data = await response.json();

  // add a show more true/false property to the data
  data.forEach((word) => {
    word.showMore = false;
  });

  // add a definition property to the data
  data.forEach((word) => {
    // split the word.characters into an array of characters
    const characters = word.hanzi.split("");

    word.definition = [];
    // loop through the characters of the word
    characters.forEach(async (character) => {
      // get the definition of the character
      const definition = await getDefinitionOfChar(character);
      // add the definition to the character
      word.definition.push(definition);
    });
  });

  return data;
};
