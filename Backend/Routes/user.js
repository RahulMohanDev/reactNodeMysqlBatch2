const express = require("express");
const { showUser, getBooks } = require("../Controllers/userController");

const router = express.Router();

router.get("/library", showUser);

router.get("/books", getBooks);

module.exports = router;
