const express = require('express'),
router = express.Router(),
articles = require("../controllers/articlelist")

router.get('/',articles.articles)

module.exports = router;