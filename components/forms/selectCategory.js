import getCategory from '../../api/categoryData';
import renderToDOM from '../../utils/renderToDOM';

const selectCategory = (categoryId) => {
  let domString = `<label for="author">Select a category</label>
    <select class="form-control" id="category_id" required>
    <option value="">Select a category</option>`;

  getCategory().then((categoriesArray) => {
    categoriesArray.forEach((category) => {
      domString += `
          <option 
            value="${category.firebaseKey}" 
            ${categoryId === category.firebaseKey ? 'selected' : ''}>
              ${category.name}
          </option>`;
    });

    domString += '</select>';

    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
