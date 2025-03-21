import { getVocab, getSingleVocab, deleteSingleVocab } from '../api/vocabData';
// import { showCategories } from '../pages/categories';
import { showVocab } from '../pages/vocabulary';
import addVocabForm from '../components/forms/addVocabForm';
import sortVocab from '../utils/sortVocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // FOR FILTERING VOCABULARY BY CATEGORY
    if (e.target.id.includes('filter-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getVocab(user.uid).then((vocab) => showVocab(vocab.filter((item) => item.category_id === firebaseKey)));
    }
    // FOR EDITING VOCAB FROM CARD BUTTON
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(user, vocabObj));
    }
    // FOR DELETING VOCAB FROM CARD BUTTON
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE VOCAB', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');
        deleteSingleVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }
    // FOR SORTING BY ALPHABETICAL ORDER
    if (e.target.id.includes('alphabet-btn')) {
      getVocab(user.uid).then((vocab) => showVocab(sortVocab(vocab, 'term')));
    }
    // FOR SORTING BY DATE SUBMITTED
    if (e.target.id.includes('date-btn')) {
      getVocab(user.uid).then((vocab) => showVocab(sortVocab(vocab, 'date_submitted')));
    }
  });
};

export default domEvents;
