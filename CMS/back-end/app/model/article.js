const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        index: true,
    },
    author: {
        type: String
    },
    content: {
        type: String
    },
    category: [{
        type: String
    }],
    likeBy: [{
        type: String
    }],
    status: {
        type: Date
    },
    image: {
        type: String
    },
    comments: [{
        type: String
    }],
    tags: [{
        type: String
    }],
    publishDate: {
        type: Date
    },
    slug: {
        type: String,
        unique: true,
    }
})

module.exports = mongoose.model('Article', articleSchema)