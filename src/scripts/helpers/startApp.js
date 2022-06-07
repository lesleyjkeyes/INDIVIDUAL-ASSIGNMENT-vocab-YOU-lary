import domBuilder from '../../components/domBuilder';
import filterButtons from '../../components/filterButtons';
import navBar from '../../components/navBar';
import { showWords } from '../components/viewWords';
import logoutButton from '../components/logoutButton';
import { getWords } from '../../api/wordData';
import filterEvents from '../Events/filterEvents';
import navEvents from '../Events/navEvents';
import formEvents from '../Events/formEvents';
import domEvents from '../Events/domEvents';

const startApp = () => {
  domBuilder();
  filterEvents();
  navBar();
  navEvents();
  formEvents();
  domEvents();
  filterButtons();
  logoutButton();
  getWords().then((wordsArray) => showWords(wordsArray));
};

export default startApp;
