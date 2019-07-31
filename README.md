# Library
Javascript app to simulate basic usage of a bookstore

## Concept Applied
The idea with this project is to applied the ES6 syntax and the classes approach to create new objects

## Technologies

* **Materialize**: to style the page
* **Handlebars.js**: to decouple the view and the logic

## Install
  1. Clone the repository in a local folder
  2. Navigate to folder project and open the `index.html` file in the browser. You can use a ready-to-use web server like [`http-server`](https://www.npmjs.com/package/http-server) to test the project right away.
  
## Usage

The application will show two sample books at the top of the page and there will be a form at the bottom to create new books.
If you click in the title of the book it will show more information relate to it.

In the form we can fill:
  
  * the name of the `author` (required)
  * the `title` of the book (required)
  * the number of `pages`(required)
  * the `ISBN` of the book (optional)
  * if the book has been `read` or not (uncked means No)

If you provide an existing ISBN the application will find a cover for the book you are creating if not it will put a default cover.

## Contributors

* [Efrain Pinto](https://github.com/efrapp)
