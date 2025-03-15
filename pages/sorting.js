import renderToDOM from '../utils/renderToDOM';

const showSort = () => {
  let domString = '';

  domString += `
    <i id="alphabet-btn" class="btn btn-light" style="margin-right: 5px; width: 150px;">Alphabetical Sort</i>
    <i id="date-btn" class="btn btn-light" style="margin-left: 5px; width: 150px;">Date Created Sort</i>
    `;

  renderToDOM('#sort-container', domString);
};

export default showSort;
