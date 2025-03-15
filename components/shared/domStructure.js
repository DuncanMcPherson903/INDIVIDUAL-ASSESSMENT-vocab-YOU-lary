import renderToDOM from '../../utils/renderToDOM';

const domStructure = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container" class="d-flex flex-column align-items-center">
    <div id="greeting"></div>
    <div id="filters" class="d-flex flex-row justify-content-center"></div>
    <div id="form-container"></div>
    <div id="sort-container" class="d-flex flex-row align-items-center" style="margin-top: 10px"></div>
    <div id="cards" class="d-flex flex-row justify-content-center flex-wrap"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domStructure;
