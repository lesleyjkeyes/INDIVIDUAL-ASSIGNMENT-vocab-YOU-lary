import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWords = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createWords = (wordsObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/words.json`, wordsObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/words/${payload.firebaseKey}.json`, payload)
        .then(() => {
          getWords(wordsObj.uid).then(resolve);
        });
    })
    .catch(reject);
});

const deleteWord = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/words/${firebaseKey}.json`)
    .then(() => {
      getWords(uid).then((wordsArray) => resolve(wordsArray));
    })
    .catch((error) => reject(error));
});

const updateWord = (wordObj, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/words/${wordObj.firebaseKey}.json`, wordObj)
    .then(() => getWords(uid).then(resolve))
    .catch(reject);
});

const getSingleWord = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/words/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const javascriptFilter = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((wordsArray) => {
    const filterWords = wordsArray.filter((words) => words.category === 'Javascript');
    resolve(filterWords);
  }).catch((error) => reject(error));
});

const reactFilter = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((wordsArray) => {
    const filterWords = wordsArray.filter((words) => words.category === 'React');
    resolve(filterWords);
  }).catch((error) => reject(error));
});

const pythonFilter = (uid) => new Promise((resolve, reject) => {
  getWords(uid).then((wordsArray) => {
    const filterWords = wordsArray.filter((words) => words.category === 'Python');
    resolve(filterWords);
  }).catch((error) => reject(error));
});

export {
  getWords,
  createWords,
  deleteWord,
  updateWord,
  getSingleWord,
  javascriptFilter,
  reactFilter,
  pythonFilter,
};
