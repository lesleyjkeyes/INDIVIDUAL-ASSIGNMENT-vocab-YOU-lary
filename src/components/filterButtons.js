import renderToDOM from '../scripts/helpers/renderToDom';

const filterButtons = () => {
  const domString = `
  <button type="button" class="btn btn-outline-light" id= "add-button">Add New Word</button>
  <div class="btn-group" role="group">
  <button id="btnGroupDrop1" type="button" class="btn btn-outline-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Sort By
  </button>
  <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
    <li><a class="dropdown-item" href="#" id="a-z">A-Z</a></li>
    <li><a class="dropdown-item" href="#" id="z-a">Z-A</a></li>
    <li><a class="dropdown-item" href="#" id="new-old">Newest-Oldest</a></li>
    <li><a class="dropdown-item" href="#" id="old-new">Oldest-Newest</a></li>
  </ul>
</div>
</div>
  `;
  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
