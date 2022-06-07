import addWordForm from '../components/Forms/addWordForm';

const filterEvents = () => {
  document.querySelector('#filter-buttons').addEventListener('click', (e) => {
    if (e.target.id.includes('add-button')) {
      addWordForm();
    }
  });
};

export default filterEvents;
