// import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const emptyCategories = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#cards', domString);
};

const showCategories = (array) => {
  // clearDom();
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <i class="btn btn-secondary" id="filter-vocab-btn--${item.firebaseKey}">${item.name}</i>
    </div>
    `;
  });
  renderToDOM('#filters', domString);
};

export { emptyCategories, showCategories };
