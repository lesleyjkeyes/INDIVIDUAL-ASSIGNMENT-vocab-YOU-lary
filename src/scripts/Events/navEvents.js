import { getWords } from '../../api/wordData';
import { showWords } from '../components/viewWords';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('all-words')) {
      getWords().then((wordsArray) => showWords(wordsArray));
    }
  });
};

export default navEvents;
