// src/services/apiService.js

const BASE_URL = 'http://localhost:5000/api';

async function registerUser(userData) {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return await response.json();
}

async function loginUser(userData) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
  return await response.json();
}

// Alte funcții pentru gestionarea înregistrărilor de timp, dacă este necesar

export { registerUser, loginUser };
