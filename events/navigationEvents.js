import addVocabForm from '../components/forms/addVocabForm';
import startApp from '../utils/startApp';

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user);
    }
    if (e.target.id.includes('home')) {
      startApp(user);
    }
    if (e.target.id.includes('all-vocab')) {
      startApp(user);
    }
  });
};

export default navigationEvents;
