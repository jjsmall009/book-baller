// Schema for a Book
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: false,
        },
        description: {
            type: String,
            required: false,
        },
        cover_i: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
