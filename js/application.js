const myLibrary = [];

function addBookToLibrary(author, title, pages, isbn, read) {
  const book = new Book(author, title, pages, isbn, read);
  myLibrary.push(book);
}

function render() {
  const source = document.querySelector('#book-template').innerHTML;
  const template = Handlebars.compile(source);
  const context = { books: myLibrary };
  const html = template(context);
  const destination = document.querySelector('.books');

  destination.innerHTML = html;

  return destination.innerHTML;
}

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
  // console.log(sampleBooks);
  sampleBooks.forEach((b) => {
    addBookToLibrary(b.author, b.title, b.pages, b.isbn, b.read);
  });
  console.log(myLibrary);
  render();
})();
