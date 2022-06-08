import { getWords } from '../../api/wordData';
import { showWords } from '../components/viewWords';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('all-words')) {
      getWords(uid).then((wordsArray) => showWords(wordsArray));
    }
  });
};

export default navEvents;
