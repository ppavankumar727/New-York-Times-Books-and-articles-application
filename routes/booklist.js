const express = require('express'),
router = express.Router(),
books = require("../controllers/booklist")

router.get('/',books.books)

module.exports = router;