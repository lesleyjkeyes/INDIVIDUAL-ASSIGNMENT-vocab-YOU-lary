import renderToDOM from '../helpers/renderToDom';

const emptyWords = () => {
  const domString = '<h1>No Words</h1>';
  renderToDOM('#main-container', domString);
};

const showWords = (array) => {
  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;" id="word-card">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.category}</h6>
          <p class="card-text">${item.description}</p>
          <h3>${item.timeStamp}</h3>
          <a href="#" class="card-link" id="delete-word--${item.firebaseKey}">Delete Word</a>
          <a href="#" class="card-link" id="edit-word--${item.firebaseKey}">Edit Word</a>
        </div>
      </div>
      `;
      renderToDOM('#main-container', domString);
    });
  } else {
    emptyWords();
  }
};

export { showWords, emptyWords };
