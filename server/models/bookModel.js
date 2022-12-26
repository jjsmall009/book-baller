// Schema for a Book
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        reps: {
            type: Number,
            required: true,
        },
        load: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
