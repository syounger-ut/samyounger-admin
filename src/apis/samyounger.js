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
    TOKEN = response.data.token;
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

export function getUser() {
  var requestUrl = `${SAM_YOUNGER_API_URL}/users/me`;
  console.log(TOKEN)
  return axios({
    method: 'get',
    url: requestUrl,
    headers: { 'Authorization': TOKEN }
  }).then(function(response) {
    return response.data;
  })
}
