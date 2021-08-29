import selectAuthor from './selectAuthor';

const addAuthorForm = (obj = {}) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <form id="author-form" class="mb-4">
  <div class="form-group">
    <label for="image">First Name</label>
    <input type="text" class="form-control" id="first_name" placeholder="First Name" value="${obj.first_name || ''}""required>
  </div>
  <div class="form-group">
    <label for="image">Last Name</label>
    <input type="text" class="form-control" id="last_name" placeholder="Last Name" value="${obj.last_name || ''}"required>
  </div>
  <div class="form-group">
    <label for="title">Email</label>
    <input type="email" class="form-control" id="email" aria-describedby="Email" placeholder="Enter Email" value="${obj.email || ''}"required>
  </div>
  <button type="submit"
  id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="btn btn-primary mt-3">Submit Author</button>
</form>`;

  selectAuthor(`${obj.author_id || ''}`);
};

export default addAuthorForm;
