import renderToDOM from '../../utils/renderToDOM';

const domStructure = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container" class="d-flex flex-column justify-content-center">
    <div id="greeting"></div>
    <div id="filters" class="d-flex flex-row justify-content-center"></div>
    <div id="form-container"></div>
    <div id="cards" class="d-flex flex-row justify-content-center"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domStructure;
