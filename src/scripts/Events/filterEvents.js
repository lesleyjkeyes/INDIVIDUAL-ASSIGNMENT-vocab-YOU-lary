import addWordForm from '../components/Forms/addWordForm';

const filterEvents = (uid) => {
  document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    if (e.target.id.includes('add-button')) {
      addWordForm(uid);
    }
  });
};

export default filterEvents;
