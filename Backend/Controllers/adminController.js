const Book = require("../Model/Book");

function renderAdminPage(req, res, next) {
  res.render("admin");
}

async function addBooks(req, res, next) {
  const newBook = new Book(req.body.title, req.body.author);
  await newBook.add();
  res.status(200).send({ message: "ok" });
}

exports.renderAdminPage = renderAdminPage;
exports.addBooks = addBooks;
