const baseURL = 'https://my-json-server.typicode.com/VictoryAlexander/se_project_react';

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

function addItem(id, name, weather, imageUrl) {
  return fetch(`${baseURL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
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
      'Content-Type': 'application/json'
    }
  }).then(handleServerResponse)
}

const api = { getItemList, addItem, removeItem };

export default api;