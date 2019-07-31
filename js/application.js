const myLibrary = [];

function addBookToLibrary(author, title, pages, isbn, read) {
  const book = new Book(author, title, pages, isbn, read);
  myLibrary.push(book);
  console.log(myLibrary);
}

function createNewBook() {
  const form = document.getElementById('newBook');
  if (form.elements.author.value === '') {
    M.toast({ html: 'Please fill the Author information' });
  } else if (form.elements.title.value === '') {
    M.toast({ html: 'Please fill the Title information' });
  } else if (form.elements.pages.value === '') {
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

document.getElementById('save').onclick = createNewBook;

(() => {
  // Create 2 sample books
  const sampleBooks = [
    {
      author: 'Ricardo Peña Marí',
      title: "Design's Programms",
      pages: 466,
      isbn: 1,
      read: false,
    },
    {
      author: 'Norton Juster',
      title: 'The Phantom Tollbooth',
      pages: 255,
      isbn: 2,
      read: true,
    },
  ];

  sampleBooks.forEach((b) => {
    addBookToLibrary(b.author, b.title, b.pages, b.isbn, b.read);
  });
})();
