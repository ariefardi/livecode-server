var express = require('express');
var router = express.Router();
const articleController = require('../controllers/article-controller')

/* GET users listing. */
router.get('/', articleController.getArticles )
router.get('/:id', articleController.getOneArticles)
router.post('/', articleController.addArticle)
router.get('/:author', articleController.getByAuthor)
router.get('/:category', articleController.getByCategory)
router.delete('/delete/:id', articleController.removeOne)

module.exports = router;