const baseURL = 'http://localhost:3001';

const token = localStorage.getItem('jwt');

function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

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

function checkToken() {
  return fetch(`${baseURL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
  .then(handleServerResponse);
};

function editProfile(name, avatar) {
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