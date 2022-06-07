import renderToDOM from '../scripts/helpers/renderToDom';

const filterButtons = () => {
  const domString = `
  <button type="button" class="btn btn-outline-light">Language/Tech</button>
  <button type="button" class="btn btn-outline-light">Language/Tech</button>
  <button type="button" class="btn btn-outline-light">Language/Tech</button>
  <button type="button" class="btn btn-outline-light" id= "add-button">Add New Word</button>
  `;
  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
