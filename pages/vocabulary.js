import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#cards', domString);
};

const showVocab = (array) => {
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#cards').innerHTML = '';
  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.term}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
        <p>${item.description}</p>
        <hr>
        <i class="btn btn-success fa-solid fa-pen-to-square" id="edit-vocab-btn--${item.firebaseKey}"></i>
        <i class="btn btn-danger fa-solid fa-trash" id="delete-vocab-btn--${item.firebaseKey}"></i>
      </div>
    </div>
    `;
  });
  renderToDOM('#cards', domString);
};

export { showVocab, emptyVocab };
