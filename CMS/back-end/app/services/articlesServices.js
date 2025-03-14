const Article = require('../model/article.js')

exports.getAllArticles = async () => {
    // console.log("do all stuff");
    const result = await Article.find({})
    return result;
}

exports.showArticleById = async (id) => {
    const result = await Article.findById(id)
    return result;
}

exports.updateArticleById = async (id, data) => {
    const article = await Article.findByIdAndUpdate(id, data, { new: true })
    const result = await article.save()
    return result;
}

exports.deleteArticleById = async (id) => {
    const result = await Article.findByIdAndDelete(id)
    return result
}

exports.createArticle = async (data) => {
    const article = new Article(data)
    const result = await article.save()
    return result;
}
