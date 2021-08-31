import clearDom from '../../helpers/data/clearDom';

const viewAuthor = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
  <div class="mt-5 d-flex flex-wrap">
    <div class="d-flex flex-column">
      <img src=${obj.image} alt=${obj.title} style="width: 300px;">
      <div class="mt-5">
        <i id="edit-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>
    <h5 class="card-title">${obj.first_name} ${obj.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${obj.email}</h6>
  </div>`;
};

export default viewAuthor;
