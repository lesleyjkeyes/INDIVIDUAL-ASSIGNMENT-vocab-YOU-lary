import domBuilder from '../../components/domBuilder';
import navBar from '../../components/navBar';
import logoutButton from '../components/logoutButton';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;
