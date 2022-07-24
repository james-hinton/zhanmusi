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
  console.log('Returned data from server: ', data);
  return data;
};
