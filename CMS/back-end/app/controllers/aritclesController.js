const articlesService = require('../services/articlesServices')

exports.index = (req, res) => {
    articlesService.getAllArticles();
    res.send('123');
}

exports.update = (req, res) => {
    articlesService.updateArticle(req.pramas.id)
    res.send('123');
}

exports.destroy = (req, res) => {
    articlesService.deleteArticle(req.pramas.id)
    res.send('123');
}

exports.store = (req, res) => {
    articlesService.createArticle(req.body)
    res.send('123');
}
