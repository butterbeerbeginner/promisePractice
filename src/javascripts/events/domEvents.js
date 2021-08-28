import { showBooks } from '../components/books';
import addBookForm from '../components/forms/addBookForm';
import addAuthorForm from '../components/forms/addAuthorform';
import { createBook, deleteBook, getSingleBook } from '../helpers/data/bookData';
import { getAuthors, deleteAuthor, createAuthor } from '../helpers/data/authorData';
import { showAuthors } from '../components/authors';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE BOOK', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, id] = e.target.id.split('--');

        console.warn(id);
        deleteBook(id).then(showBooks);
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A BOOK
    if (e.target.id.includes('add-book-btn')) {
      console.warn('CLICKED ADD BOOK BUTTON', e.target.id);
      addBookForm();
    }

    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      e.preventDefault();
      const bookObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').value,
        author_id: document.querySelector('#author_id').value
      };

      createBook(bookObject).then((booksArray) => showBooks(booksArray));
    }

    // CLICK EVENT FOR EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-book-btn')) {
      const [, id] = e.target.id.split('--');

      getSingleBook(id).then((bookObj) => addBookForm(bookObj));
    }

    // CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      console.warn('CLICKED EDIT BOOK', e.target.id);
    }

    // ADD CLICK EVENT FOR DELETING AN AUTHOR
    if (e.target.id.includes('delete-author')) {
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE author', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, id] = e.target.id.split('--');

        console.warn(id);
        deleteAuthor(id).then(showAuthors);
      }
    }

    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('add-author-btn')) {
      console.warn('CLICKED ADD AUTHOR BUTTON', e.target.id);
      addAuthorForm();
    }
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      e.preventDefault();
      const authorObject = {
      };

      createAuthor(authorObject).then((authorsArray) => showAuthors(authorsArray));
    }
    // ADD CLICK EVENT FOR EDITING AN AUTHOR
    if (e.target.id.includes('edit-author-btn')) {
      const [, id] = e.target.id.split('--');

      getAuthors(id).then((authorObj) => addBookForm(authorObj));
    }
  });
};

export default domEvents;
