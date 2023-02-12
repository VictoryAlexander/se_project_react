const baseURL = 'https://localhost.3001';

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

function addItem({ name, weather, imageUrl }) {
  return fetch(`${baseURL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
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
      'Content-Type': 'application/json'
    }
  }).then(handleServerResponse)
}

const api = { getItemList, addItem, removeItem };

export default api;