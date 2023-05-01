export const baseUrl = process.env.NODE_ENV === 'production' 
  ? 'api.wtwr.minecraftnoob.com'
  : 'http://localhost:3001';

export function handleServerResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItemList() {
  return fetch(`${baseUrl}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(handleServerResponse);
}

function addItem(name, weather, imageUrl, token) {
  return fetch(`${baseUrl}/items`, {
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

function removeItem(id, token) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }).then(handleServerResponse)
}

function addCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }).then(handleServerResponse)
}

function removeCardLike(id, token) {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  }).then(handleServerResponse)
}

const api = { getItemList, addItem, removeItem, addCardLike, removeCardLike };

export default api;