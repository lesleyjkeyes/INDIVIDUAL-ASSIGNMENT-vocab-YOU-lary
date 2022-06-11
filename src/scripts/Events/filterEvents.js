import {
  orderAz, orderNewOld, orderOldNew, orderZa
} from '../../api/wordData';
import addWordForm from '../components/Forms/addWordForm';
import { showWords } from '../components/viewWords';

const filterEvents = (uid) => {
  document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    if (e.target.id.includes('add-button')) {
      addWordForm(uid);
    }
    if (e.target.id.includes('a-z')) {
      orderAz(uid).then((sortedWords) => showWords(sortedWords));
    }
    if (e.target.id.includes('z-a')) {
      orderZa(uid).then((sortedWords) => showWords(sortedWords));
    }
    if (e.target.id.includes('new-old')) {
      orderNewOld(uid).then((sortedWords) => showWords(sortedWords));
    }
    if (e.target.id.includes('old-new')) {
      orderOldNew(uid).then((sortedWords) => showWords(sortedWords));
    }
  });
};

export default filterEvents;
