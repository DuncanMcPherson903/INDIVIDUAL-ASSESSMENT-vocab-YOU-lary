import { getVocab } from '../api/vocabData';
// import { showCategories } from '../pages/categories';
import { showVocab } from '../pages/vocabulary';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('filter-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getVocab(user.uid).then((vocab) => showVocab(vocab.filter((item) => item.category_id === firebaseKey)));
    }
  });
};

export default domEvents;
