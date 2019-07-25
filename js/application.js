const myLibrary = [];

function addBookToLibrary(author, title, pages, read) {
  const book = new Book(author, title, pages, read);
  myLibrary.push(book);
}

(() => {
  // Create 2 sample books
  const sampleBooks = [
    {
      author: 'Ricardo Peña Marí',
      title: "Design's Programms",
      pages: 466,
      read: false
    },
    {
      author: 'Norton Juster',
      title: 'The Phantom Tollbooth',
      pages: 255,
      read: true
    }
  ];

  sampleBooks.forEach(b => {
    addBookToLibrary(b.author, b.title, b.pages, b.read);
  });
  console.log(myLibrary);
})();
