import renderToDOM from '../scripts/helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filter-buttons"></div>
  <div id="main-container">
    <div id="creat-button"></div>
    <div id="form-container"></div>
    <div id="vocab"></div>
    <div id="view"></div>
  </div>`;
  renderToDOM('#app', domString);
};

export default domBuilder;
