class Book {
  constructor(author, title, pages, isbn = 0, read = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
    this.read = read;
  }
}
