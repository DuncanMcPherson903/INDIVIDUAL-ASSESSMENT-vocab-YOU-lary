import domStructure from '../components/shared/domStructure';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navBar from '../components/shared/navBar';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navigationEvents';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabulary';
import { getCategories } from '../api/categoryData';
import { showCategories } from '../pages/categories';

const startApp = (user) => {
  domStructure(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);

  getCategories(user.uid).then((cat) => showCategories(cat));
  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
