import { deleteWord, getSingleWord } from '../../api/wordData';
import addWordForm from '../components/Forms/addWordForm';
import { showWords } from '../components/viewWords';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-word')) {
      const [, wordFirebaseKey] = e.target.id.split('--');
      getSingleWord(wordFirebaseKey).then((wordObject) => addWordForm(wordObject));
    }
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, wordFirebaseKey] = e.target.id.split('--');
        deleteWord(wordFirebaseKey).then((showWords));
      }
    }
  });
};

export default domEvents;
