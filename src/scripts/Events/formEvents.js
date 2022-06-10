import { createWords, updateWord } from '../../api/wordData';
import { showWords } from '../components/viewWords';

const formEvents = (uid) => {
  const time = () => {
    const today = new Date();
    const date = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()}`;
    return date;
  };

  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-word')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        time: time(),
        uid
      };
      createWords(wordObject).then((wordsArray) => showWords(wordsArray));
    }
    if (e.target.id.includes('update-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      const wordObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        time: time(),
        firebaseKey
      };
      updateWord(wordObject, uid).then((wordsArray) => showWords(wordsArray));
    }
  });
};

export default formEvents;
