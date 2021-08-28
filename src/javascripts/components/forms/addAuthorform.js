import selectAuthor from './selectAuthor';

const addAuthorForm = (obj = {}) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-author-form" class="mb-4">
    </div>
      <div class="form-group" id="select-author">
      </div>
      <button type="submit" id="submit-author" class="btn btn-primary">Submit Author</button>
    </form>`;

  selectAuthor(`${obj.author_id || ''}`);
};

export default addAuthorForm;
