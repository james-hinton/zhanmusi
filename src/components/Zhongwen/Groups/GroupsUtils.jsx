export const fetchGroups = async (userId) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const URL = `${BASE_URL}/groups`;
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `UserId ${userId}`,
    },
  });
  const data = await response.json();
  return data;
};
