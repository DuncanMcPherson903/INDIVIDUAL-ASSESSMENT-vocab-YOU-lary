import addVocabForm from '../components/forms/addVocabForm';

const navigationEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('add-vocab-btn')) {
      addVocabForm();
    }
  });
};

export default navigationEvents;
