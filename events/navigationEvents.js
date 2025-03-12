import { getCategories } from '../api/categoryData';
import { getVocab } from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showCategories } from '../pages/categories';
import showSort from '../pages/sorting';
import { showVocab } from '../pages/vocabulary';
import clearDom from '../utils/clearDom';

const navigationEvents = (user) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    // Opens the vocabulary when clicking Add Vocabulary
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm(user);
    }
    // Both the title and All Vocabulary reset dom and show all user items and categories
    if (e.target.id.includes('home') || e.target.id.includes('all-vocab')) {
      clearDom();
      getCategories(user.uid).then(showCategories);
      getVocab(user.uid).then(showVocab);
      showSort();
    }
    // Compares search term with database and renders matching items to the dom on clicking Search
    if (e.target.id.includes('home') || e.target.id.includes('search-btn')) {
      clearDom();
      getCategories(user.uid).then(showCategories);
      const searchTerm = document.querySelector('#search-bar').value;
      getVocab(user.uid).then((vocab) => showVocab(vocab.filter((item) => (Object.values(item)).includes(searchTerm))));
      showSort();
    }
  });
};

export default navigationEvents;
