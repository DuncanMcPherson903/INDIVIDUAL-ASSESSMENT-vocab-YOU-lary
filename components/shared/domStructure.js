import renderToDOM from '../../utils/renderToDOM';

const domStructure = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
    <div id="greeting"></div>
    <div id="filters" class="d-flex flex-row"></div>
    <div id="form-container"></div>
    <div id="cards"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domStructure;
