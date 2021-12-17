const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: { type: String, required: true, minLength: 20 },
    shortDescription: { type: String, required: true, minLength: 20 },
    Description: { type: String, required: true, minLength: 20 },
    publishDate: { type: Date, default: Date.now(), min: Date.now() },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users"
        }
    ],
    author:
    {
        type: mongoose.Schema.Types.ObjectId
    }
},
    {
        collection: "blogs",
    }

);

module.exports = mongoose.model("blog", blogSchema);