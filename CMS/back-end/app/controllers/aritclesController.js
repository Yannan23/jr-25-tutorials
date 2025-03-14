const articlesService = require('../services/articlesServices')

exports.index = async (req, res) => {
    const result = await articlesService.getAllArticles();
    res.send(result);
}

exports.show = async (req, res) => {
    const result = await articlesService.showArticleById(req.params.id);
    res.send(result);

}

exports.update = async (req, res) => {
    const result = await articlesService.updateArticleById(req.params.id, req.body);
    res.send(result);

}

exports.destroy = async (req, res) => {
    const result = await articlesService.deleteArticleById(req.params.id);
    res.sendStatus(200);
}

exports.store = async (req, res) => {
    const result = await articlesService.createArticle(req.body);
    res.send(result);
}

