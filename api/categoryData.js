import client from '../utils/client';

const endpoint = client.databaseURL;

const getCategories = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data)); // will resolve an array of objects
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleCategory = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/categories/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

export { getSingleCategory, getCategories };
