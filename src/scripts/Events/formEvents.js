import { createWords, updateWord } from '../../api/wordData';
import { showWords } from '../components/viewWords';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-word')) {
      const wordObject = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        category: document.querySelector('#category').value,
        time: (e.timeStamp).value,
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
        firebaseKey,
        uid
      };
      updateWord(wordObject).then((wordsArray) => showWords(wordsArray));
    }
  });
};

export default formEvents;
