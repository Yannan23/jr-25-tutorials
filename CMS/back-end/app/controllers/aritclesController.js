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

=======
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
