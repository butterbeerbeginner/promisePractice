// import axios from 'axios';
import { getSingleAuthor } from './authorData';
import { getSingleBook } from './bookData';
// import deleteSingleAuthor
// import deleteBook,
const viewBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey)
    .then((bookObject) => {
      getSingleAuthor(bookObject.author_id)
        .then((authorObject) => {
          resolve({ author: authorObject, ...bookObject });
        });
    }).catch(reject);
});

const viewAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey)
    .then((bookObject) => {
      getSingleBook(bookObject.author_id)
        .then((authorObject) => {
          resolve({ author: authorObject, ...bookObject });
        });
    }).catch(reject);
});

// const deleteAuthorBooks = (authorId) => new Promise((resolve, reject) => {
//   getAuthorBooks(authorId).then((authorsBookArray) => {
//     const deleteBooks = authorsBookArray.map((book) => deleteBook(book.firebaseKey));
//     Promise.all(deleteBooks).then(() => resolve(deleteSingleAuthor(authorId)
//     ));
//   }).catch(reject);
// });
// const viewBookDetails = (firebaseKey) => (async () => {
//   const book = await getSingleBook(firebaseKey);
//   const author = await getSingleAuthor(book.author_id);
//   return ({ author, ...book });
// })().catch(console.warn);

export { viewBookDetails, viewAuthorDetails };
// deleteAuthorBooks
