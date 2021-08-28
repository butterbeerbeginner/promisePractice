// FIXME: STUDENTS show your authors
const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  document.querySelector('#form-container').innerHTML = '';

  // FIXME: STUDENTS create cards for your authors
  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `<div class="card">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="height: 400px;">
        <div class="card-body" style="height: 180px;">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
        <hr>
        <button class="btn btn-info" id="edit-author-btn--${item.firebaseKey}">Edit Author</button>
        <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
        </div>
      </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
