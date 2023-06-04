import axios from 'axios';

const BASE_URL = 'https://mock-api.driven.com.br/api/v2/trackit';

function login(body) {
  const promise = axios.post(`${BASE_URL}/auth/login`, body);

  return promise;
}

const api ={
    login,

}

export default api;