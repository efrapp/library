// eslint-disable-next-line import/extensions
import Book from './book.js';

const myLibrary = [];

function initFAB() {
  const elems = document.querySelectorAll('.fixed-action-btn');
  // eslint-disable-next-line no-undef
  M.FloatingActionButton.init(elems, {
    direction: 'left',
  });
}

function addBookToLibrary(author, title, pages, isbn, read) {
  const book = new Book(author, title, pages, isbn, read);
  myLibrary.push(book);
}

function removeBookFromLibrary(bIndex) {
  myLibrary.splice(bIndex, 1);
}

function updateReadStatus(bIndex) {
  const book = myLibrary[bIndex];
  book.read = !book.read;
}

function render() {
  const context = { books: myLibrary };
  // eslint-disable-next-line no-undef
  const html = Handlebars.templates.book(context);
  const destination = document.querySelector('.books');

  destination.innerHTML = html;
  const event = new CustomEvent('resetcomponents');
  document.dispatchEvent(event);
}

function btnRemoveEvent() {
  document.querySelectorAll('.remove-book').forEach((el) => {
    el.addEventListener('click', (e) => {
      removeBookFromLibrary(e.target.getAttribute('value'));
      render();
    });
  });
}

function btnUpdateStatusEvent() {
  document.querySelectorAll('.update-read').forEach((el) => {
    el.addEventListener('click', (e) => {
      updateReadStatus(e.target.getAttribute('value'));
      render();
    });
  });
}

document.addEventListener('resetcomponents', () => {
  initFAB();
  btnRemoveEvent();
  btnUpdateStatusEvent();
});

(() => {
  // Create 2 sample books
  const sampleBooks = [
    {
      author: 'Ricardo Peña Marí',
      title: "Design's Programms",
      pages: 466,
      isbn: 0,
      read: false,
    },
    {
      author: 'Norton Juster',
      title: 'The Phantom Tollbooth',
      pages: 255,
      isbn: 9780394815008,
      read: true,
    },
  ];

  sampleBooks.forEach((b) => {
    addBookToLibrary(b.author, b.title, b.pages, b.isbn, b.read);
  });

  render();
})();
