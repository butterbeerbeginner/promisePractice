import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

// API CALLS FOR AUTHORS
const dbUrl = firebaseConfig.databaseURL;

// GET AUTHORS
const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE AUTHOR
const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => {
      getAuthors().then(resolve);
    })
    .catch(reject);
});

// CREATE AUTHOR
const createAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, authorObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then((authorsArray) => resolve(authorsArray));
        });
    }).catch((error) => reject(error));
});

// FILTER FAVORITE AUTHOR
const favoriteAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json?orderBy="favorite"&equalTo=true`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// UPDATE AUTHOR
const updateAuthor = (authorObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${authorObj.firebaseKey}.json`, authorObj)
    .then(() => getAuthors().then(resolve))
    .catch(reject);
});
// SEARCH AUTHORS

export {
  getAuthors,
  deleteAuthor,
  createAuthor,
  favoriteAuthors,
  updateAuthor
};
