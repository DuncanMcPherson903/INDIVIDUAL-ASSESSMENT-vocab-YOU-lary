import renderToDOM from '../../utils/renderToDOM';
import clearDom from '../../utils/clearDom';

const addCategoryForm = (user, obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-category--${obj.firebaseKey}` : 'submit-category'}" class="mb-4">
      <div class="form-group">
        <label for="name">Vocabulary Word</label>
        <input type="text" class="form-control" id="name" aria-describedby="bookTitle" placeholder="Enter Vocabulary Word" value="${obj.name || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit Category
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addCategoryForm;
