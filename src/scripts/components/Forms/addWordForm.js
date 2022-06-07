import renderToDOM from '../../helpers/renderToDom';

const addWordForm = (obj = {}) => {
  const domString = `
  <form id="${obj.firebaseKey ? `update-word--${obj.firebaseKey}` : 'submit-word'}" class="mb-4">
      <div class="form-group">
        <label for="image">Title</label>
        <input type="text" class="form-control" id="title" placeholder="Title" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">Description</label>
        <input type="text" class="form-control" id="description" placeholder="Description" value="${obj.description || ''}" required>
      </div>
      <select class="form-select" id ="category" aria-label="Default select example">
        <option selected>Select Language/Tech</option>
        <option value="Javascript" id="javascript">Javascript</option>
        <option value="React" id="react">React</option>
        <option value="Python" id="python">Python</option>
      </select>
      <button type="submit" class="btn btn-primary mt-3">Add New Word</button>
    </form>`;

  renderToDOM('#main-container', domString);
};

export default addWordForm;
