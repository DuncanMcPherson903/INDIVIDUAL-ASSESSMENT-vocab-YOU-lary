import { getCategories } from '../api/categoryData';
import { createVocab, updateVocab, getVocab } from '../api/vocabData';
import { showCategories } from '../pages/categories';
import { showVocab } from '../pages/vocabulary';

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
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      });
      getCategories(user.uid).then(showCategories);
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
      updateVocab(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
      getCategories(user.uid).then(showCategories);
    }
  });
};

export default formEvents;
