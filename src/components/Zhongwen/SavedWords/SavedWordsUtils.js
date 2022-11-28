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

  // Reverse the array so that the most recently added words are at the top
  data.reverse();

  // I will leave this commented out, this should be done from the DB Level
  // const sorted_data = data.sort((a, b) => {
  //   return new Date(b.date) - new Date(a.date);
  // });

  return data
};

export const getGroupedSavedWords = async (groupId) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const URL = `${BASE_URL}/saved-words/group/${groupId}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(URL, options);
  const data = await response.json();

  // Reverse the array so that the most recently added words are at the top
  data.reverse();

  return data;
};
