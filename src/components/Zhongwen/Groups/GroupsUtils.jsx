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
  // Reverse
  return data.reverse();
};

export const createGroup = async (userId, group) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const URL = `${BASE_URL}/groups`;
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `UserId ${userId}`,
    },
    body: JSON.stringify(group),
  });
  const data = await response.json();
  return data;
};

export const updateGroup = async (userId, group) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const URL = `${BASE_URL}/groups/${group.id}`;
  const response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `UserId ${userId}`,
    },
    body: JSON.stringify(group),
  });
  const data = await response.json();
  return data;
};

export const deleteGroup = async (userId, groupId) => {
  const BASE_URL = process.env.REACT_APP_BACKEND_URL;
  const URL = `${BASE_URL}/groups/${groupId}`;
  const response = await fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `UserId ${userId}`,
    },
  });
  const data = await response.json();
  return data;
};
