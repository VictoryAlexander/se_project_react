const baseURL = 'http://localhost:3001';

const token = localStorage.getItem('jwt');

function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItemList() {
  return fetch(`${baseURL}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(handleServerResponse);
}

function addItem(name, weather, imageUrl) {
  return fetch(`${baseURL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      name,
      weather,
      imageUrl
    })
  }).then(handleServerResponse)
}

function removeItem(id) {
  return fetch(`${baseURL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }).then(handleServerResponse)
}

function addCardLike(id) {
  return fetch(`${baseURL}/items/${id}/likes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }).then(handleServerResponse)
}

function removeCardLike(id) {
  return fetch(`${baseURL}/items/${id}/likes`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }).then(handleServerResponse)
}

const api = { getItemList, addItem, removeItem, addCardLike, removeCardLike };

export default api;