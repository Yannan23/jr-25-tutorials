const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({

    title: {
        type: String,
    },
    content: {
        type: String,

    },
    author: {
        type: String,

    },
    publishDate: { type: Date, }, tags: [{ type: String, },], likedBy: [{ type: String, },], image: { type: String, }, category: [{ type: String, },], type: { type: String, }, comments: [{ type: String, },],

    status: {

        type: String,

    },

    slug: {

        type: String,

    },

});

module.exports = mongoose.model("Article", articleSchema);
