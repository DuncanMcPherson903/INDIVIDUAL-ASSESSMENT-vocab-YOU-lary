import { createVocab, updateVocab, getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocabulary';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-vocab')) {
      const payload = {
        category: '',
        category_id: '',
        description: document.querySelector('#description').value,
        term: document.querySelector('#term').value,
        uid: user.uid
      };
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateVocab(patchPayload).then(() => {
          getVocab().then(showVocab);
        });
      });
    }
  });
};

export default formEvents;
