import { deleteWord, getSingleWord } from '../../api/wordData';
import addWordForm from '../components/Forms/addWordForm';
import { showWords } from '../components/viewWords';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-word')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleWord(firebaseKey).then((wordObject) => addWordForm(wordObject, uid));
    }
    if (e.target.id.includes('delete-word')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteWord(firebaseKey, uid).then((wordArray) => showWords(wordArray));
      }
    }
  });
};

export default domEvents;
