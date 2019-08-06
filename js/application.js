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

function createNewBook() {
  const form = document.getElementById('newBook');
  if (form.elements.author.value === '') {
    // eslint-disable-next-line no-undef
    M.toast({ html: 'Please fill the Author information' });
  } else if (form.elements.title.value === '') {
    // eslint-disable-next-line no-undef
    M.toast({ html: 'Please fill the Title information' });
  } else if (form.elements.pages.value === '') {
    // eslint-disable-next-line no-undef
    M.toast({ html: 'Please fill the Pages information' });
  } else {
    addBookToLibrary(
      form.elements.author.value,
      form.elements.title.value,
      parseInt(form.elements.pages.value, 10),
      parseInt(form.elements.isbn.value, 10),
      form.elements.read.checked,
    );
    form.reset();
    M.updateTextFields();
    M.toast({ html: 'Book created!' });
  }
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

document.addEventListener('DOMContentLoaded', () => {
  const elems = document.querySelectorAll('.modal');
  M.Modal.init(elems);
});

document.getElementById('save').addEventListener('click', () => {
  createNewBook();
  render();
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
