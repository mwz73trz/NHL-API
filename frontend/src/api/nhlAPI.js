const BASE_URL = "http://localhost:8000/";

const getInit = (token) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    },
  };
};

const tryCatchFetch = async (url, init) => {
  try {
    let response = await fetch(url, init);
    if (response.ok) {
      if (response.status !== 204) {
        let data = response.json();
        return data;
      } else {
        return { success: true };
      }
    }
  } catch (error) {
    console.error(":ERR:", error);
    return null;
  }
};

const doLogin = async (credentials) => {
  let url = `${BASE_URL}login/`;
  let init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };
  return await tryCatchFetch(url, init);
};

const getTeams = async (token) => {
  let url = `${BASE_URL}api/teams/`;
  return await tryCatchFetch(url, getInit(token));
};

const getTeamById = async (teamId, token) => {
  let url = `${BASE_URL}api/teams/${teamId}/`;
  return await tryCatchFetch(url, getInit(token));
};

const getTeamPlayers = async (teamId, token) => {
  let url = `${BASE_URL}api/teams/${teamId}/players/`;
  return await tryCatchFetch(url, getInit(token));
};

const getPlayerById = async (playerId, token) => {
  let url = `${BASE_URL}api/players/${playerId}/`;
  return await tryCatchFetch(url, getInit(token));
};

const getPlayerStats = async (playerId, token) => {
  let url = `${BASE_URL}api/players/${playerId}/stats/`;
  return await tryCatchFetch(url, getInit(token));
};

const myExports = {
  doLogin,
  getTeams,
  getTeamById,
  getTeamPlayers,
  getPlayerById,
  getPlayerStats,
};

export default myExports;
