import renderToDOM from '../utils/renderToDOM';

const showSort = () => {
  let domString = '';

  domString += `
    <i id="alphabet-btn" class="btn btn-light fas fa-sort-alpha-down">Alphabetical Sort</i>
    <i id="date-btn" class="btn btn-light fas fa-calendar-alt">Date Created Sort</i>
    `;

  renderToDOM('#sort-container', domString);
};

export default showSort;
