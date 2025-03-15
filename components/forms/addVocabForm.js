import renderToDOM from '../../utils/renderToDOM';
import clearDom from '../../utils/clearDom';
import selectCategory from './selectCategory';

const addVocabForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <input type="text" class="form-control" id="term" placeholder="Enter Vocabulary Word" value="${obj.term || ''}" required>
      </div>
      <br>
      <div class="form-group">
        <textarea class="form-control" placeholder="Vocabulary Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <br>
      <div class="form-group" id="select-category">
      </div>
      <br>
      <button type="submit" class="btn btn-primary">Submit Vocabulary Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
  selectCategory(user, `${obj.category_id || ''}`);
};

export default addVocabForm;
