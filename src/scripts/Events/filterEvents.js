import filterButtons from '../../components/filterButtons';
import addWordForm from '../components/Forms/addWordForm';
import { showWords } from '../components/viewWords';

const filterEvents = (uid) => {
  document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    if (e.target.id.includes('add-button')) {
      addWordForm(uid);
    }
    if (e.target.id.includes('javascript')) {
      console.warn('clicked');
      filterButtons().then((wordsArray) => showWords(wordsArray));
    }
  });
};

export default filterEvents;
