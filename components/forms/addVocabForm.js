import renderToDOM from '../../utils/renderToDOM';
import clearDom from '../../utils/clearDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="term">Vocabulary Word</label>
        <input type="text" class="form-control" id="term" aria-describedby="bookTitle" placeholder="Enter Vocabulary Word" value="${obj.term || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" placeholder="Book Description" id="description" style="height: 100px">${obj.description || ''}</textarea>
      </div>
      <div class="form-group" id="select-category">
      </div>
      <button type="submit" class="btn btn-primary">Submit Vocabulary Word
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
