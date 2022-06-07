import { getSingleWord } from '../../api/wordData';
import addWordForm from '../components/Forms/addWordForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-word')) {
      const [, wordFirebaseKey] = e.target.id.split('--');
      getSingleWord(wordFirebaseKey).then((wordObject) => addWordForm(wordObject));
    }
  });
};

export default domEvents;
