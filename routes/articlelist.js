const express = require('express'),
router = express.Router(),
books = require("../controllers/articlelist")

router.get('/',books.books)

module.exports = router;