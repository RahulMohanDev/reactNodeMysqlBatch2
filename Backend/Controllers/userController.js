const Book = require("../Model/Book");

function showUserPage(req, res) {
  Book.getBooks().then((bookList) => {
    console.log(bookList);
    res.render("index", {
      title: "New title 2",
      books: bookList,
    });
  });
}

function getBooks(req, res) {
  Book.getBooks().then((bookList) => {
    res.send(bookList);
  });
}

exports.showUser = showUserPage;
exports.getBooks = getBooks;
