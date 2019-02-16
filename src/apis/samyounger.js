// Make API Calls here

import axios from 'axios';

const SAM_YOUNGER_API_URL = 'http://localhost:4000/api'
let TOKEN = localStorage.getItem("auth_token");

export function loginUser(user) {
  var requestUrl = `${SAM_YOUNGER_API_URL}/login`;

  return axios({
    method: 'post',
    url: requestUrl,
    data: {
      email:    user.email,
      password: user.password
    }
  }).then(function(response) {
    localStorage.setItem("auth_token", response.data.token)
    return response.data;
  }).catch(function(error) {
    if(error.response.status === 401) {
      throw new Error("Login failed. Please try again");
    } else {
      throw new Error(error.message);
    }
  });
}

export function authenticateToken(token) {
  var requestUrl = `${SAM_YOUNGER_API_URL}/authenticate`;

  return axios({
    method: 'post',
    url: requestUrl,
    headers: { 'Authorization': token }
  }).then(function(response) {
    localStorage.setItem("auth_token", response.data.token)
    return response.data;
  }).catch(function(error) {
    localStorage.removeItem("auth_token");
    throw new Error("Your login session expired. Please login");
  });
}
