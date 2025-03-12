import { getCategories } from '../api/categoryData';
import { createVocab, updateVocab, getVocab } from '../api/vocabData';
import { showCategories } from '../pages/categories';
import showSort from '../pages/sorting';
import { showVocab } from '../pages/vocabulary';
import clearDom from '../utils/clearDom';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB WORD
    if (e.target.id.includes('submit-vocab')) {
      const [catKey, catName] = document.querySelector('#category_id').value.split(',');
      const payload = {
        category_name: catName,
        category_id: catKey,
        description: document.querySelector('#description').value,
        term: document.querySelector('#term').value,
        uid: user.uid,
        date_submitted: Date()
      };
      clearDom();
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
      getCategories(user.uid).then(showCategories);
      showSort();
    }

    // CLICK EVENT FOR EDITING A VOCAB WORD
    if (e.target.id.includes('update-vocab')) {
      const [catKey, catName] = document.querySelector('#category_id').value.split(',');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        category_name: catName,
        category_id: catKey,
        description: document.querySelector('#description').value,
        term: document.querySelector('#term').value,
        firebaseKey
      };
      clearDom();
      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
      getCategories(user.uid).then(showCategories);
      showSort();
    }
  });
};

export default formEvents;
