export default class Book {
  constructor(author, title, pages, isbn, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.coverPath = 'img/default_cover.jpg';
    this.cover = isbn;
  }

  get cover() {
    return this.coverPath;
  }

  set cover(isbn) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    const ops = { method: 'GET', headers: {} };
    const result = fetch(url, ops)
      .then(response => response.json())
      .then((body) => {
        if (body.totalItems > 0) {
          return Promise.resolve(body.items[0].volumeInfo.imageLinks.thumbnail);
        }
        return Promise.resolve('img/default_cover.jpg');
      });

    result.then((coverPath) => {
      this.coverPath = coverPath;
    });
  }
}
