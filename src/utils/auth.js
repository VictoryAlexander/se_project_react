import { handleServerResponse } from "./api";

const baseURL = 'http://localhost:3001';

function register(name, avatar, email, password) {
  return fetch(`${baseURL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, avatar, email, password })
  })
  .then(handleServerResponse);
};

function signIn(email, password) {
  return fetch(`${baseURL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then(handleServerResponse);
};

function checkToken(token) {
  return fetch(`${baseURL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  .then(handleServerResponse);
};

function editProfile(name, avatar, token) {
  return fetch(`${baseURL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar })
  })
  .then(handleServerResponse);
}

const auth = { register, signIn, checkToken, editProfile };

export default auth;