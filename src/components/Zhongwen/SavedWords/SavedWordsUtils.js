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

  // Reverse the array so that the most recently added words are at the top
  data.reverse();

  return data;
};
