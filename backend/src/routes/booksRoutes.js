const express = require('express');
const booksController = require('../controller/booksController');

const router = express.Router();

router.get("/", booksController.getAllBooks);

router.post("/rating", booksController.addRatingBook);

router.put("/rating", booksController.updateBookRating);

router.delete("/rating", booksController.deleteBookRating);


module.exports = router;
