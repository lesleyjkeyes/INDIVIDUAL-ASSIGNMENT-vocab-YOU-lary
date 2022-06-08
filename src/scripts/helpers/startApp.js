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

const startApp = (user) => {
  domBuilder();
  navBar();
  filterButtons();
  logoutButton();
  filterEvents(user.uid);
  formEvents(user.uid);
  domEvents(user.uid);
  navEvents(user.uid);
  getWords(user.uid).then((wordsArray) => showWords(wordsArray));
};

export default startApp;
