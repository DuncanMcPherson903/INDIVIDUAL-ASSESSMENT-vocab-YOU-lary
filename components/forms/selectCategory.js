import { getCategories } from '../../api/categoryData';
import renderToDOM from '../../utils/renderToDOM';

const selectCategory = (user, categoryId) => {
  let domString = `
    <select class="form-control" id="category_id" required>
    <option value="">Select a category</option>`;

  getCategories(user.uid).then((categoriesArray) => {
    categoriesArray.forEach((category) => {
      domString += `
          <option 
            value="${category.firebaseKey},${category.name}" 
            ${categoryId === category.firebaseKey ? 'selected' : ''}>
              ${category.name}
          </option>`;
    });
    domString += '</select>';
    renderToDOM('#select-category', domString);
  });
};

export default selectCategory;
