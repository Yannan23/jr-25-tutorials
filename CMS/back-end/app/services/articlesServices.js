const Article = require('../models/article')

exports.getAllArticles = async () => {
    console.log("do all stuff");
    const result = await Article.find({})
    console.log(result);
    return result;
}

exports.showA