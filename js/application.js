let myLibrary = [];

function addBookToLibrary(author, title, pages, read){
  let book = new Book(author, title, pages, read);
  myLibrary.push(book);
}

(function(){

  // Create 2 sample books
  let sampleBooks = [
    {
      author: "Ricardo Peña Marí",
      title: "Design's Programms",
      pages: 466,
      read: false
    },
    {
      author: "Norton Juster",
      title: "The Phantom Tollbooth",
      pages: 255,
      read: true
    },
  ];

  sampleBooks.forEach(b => {
    addBookToLibrary(b.author, b.title, b.pages, b.read);
  });
    
  console.log(myLibrary);
})();