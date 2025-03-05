const articlesService = require('../services/articlesServices')

exports.index = (req, res) => {
    articlesService.getAllArticles();
    res.send('123');
}