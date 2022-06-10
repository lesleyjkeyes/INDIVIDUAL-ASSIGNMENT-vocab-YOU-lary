import {
  getWords, javascriptFilter, pythonFilter, reactFilter
} from '../../api/wordData';
import { showWords } from '../components/viewWords';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('all-words')) {
      getWords(uid).then((wordsArray) => showWords(wordsArray));
    }
    if (e.target.id.includes('javascript')) {
      console.warn('clicked');
      javascriptFilter(uid).then((wordsArray) => showWords(wordsArray));
    }
    if (e.target.id.includes('react')) {
      console.warn('clicked');
      reactFilter(uid).then((wordsArray) => showWords(wordsArray));
    }
    if (e.target.id.includes('python')) {
      console.warn('clicked');
      pythonFilter(uid).then((wordsArray) => showWords(wordsArray));
    }
  });
};

export default navEvents;
