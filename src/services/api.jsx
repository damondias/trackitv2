import axios from 'axios';

const BASE_URL = 'https://mock-api.driven.com.br/api/v2/trackit';

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);

  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);

  return promise;
}

function getDailyHistory(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/habits/history/daily`, config);

  return promise;
}

function getHabits(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/habits`, config);

  return promise;
}

function createHabit(body, token) {
  const config = createConfig(token);

  const promise = axios.post(`${BASE_URL}/habits`, body, config);

  return promise;
}

function deleteHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);

  return promise;
}

function getTodayHabits(token) {
  const config = createConfig(token);

  const promise = axios.get(`${BASE_URL}/habits/today`, config);

  return promise;
}

function checkHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.post(`${BASE_URL}/habits/${id}/check`, null, config);

  return promise;
}

function uncheckHabit(id, token) {
  const config = createConfig(token);

  const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, null, config);

  return promise;
}

const api ={
    login,
    signUp,
    getDailyHistory,
    getHabits,
    createHabit,
    deleteHabit,
    getTodayHabits,
    checkHabit,
    uncheckHabit,
}

export default api;