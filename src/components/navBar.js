import renderToDOM from '../scripts/helpers/renderToDom';
import logo from '../Images/logo.jpg';

const navBar = () => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <img src=${logo} class="rounded mx-auto d-block" height="100" width="100" alt="...">
      <h4 class="navbar-brand" >Vocab-YOU-Lary</h4>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" id="all-words">All Words</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#" id="javascript">Javascript</a></li>
              <li><a class="dropdown-item" href="#" id="react">React</a></li>
              <li><a class="dropdown-item" href="#" id="python">Python</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
    <div id="login-form-container"></div>
  </nav>
  `;
  renderToDOM('#navigation', domString);
};

export default navBar;
