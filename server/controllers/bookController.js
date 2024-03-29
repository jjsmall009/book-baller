// Functions for handling book route requests
const Book = require("../models/bookModel");
const mongoose = require("mongoose");

// get all books for a user
const getBooks = async (req, res) => {
    const user_id = req.user._id;

    const books = await Book.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(books);
};

// get a single book
const getBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        res.status(200).json(book);
    } catch (error) {
        return res.status(404).json({ error: "No such book" });
    }
};

// add a new book
const addBook = async (req, res) => {
    const { openlibrary_id, title, author, year, description, cover_i } =
        req.body;

    let exists = await Book.findOne({ openlibrary_id: openlibrary_id });
    if (exists) {
        console.log("exists")
        res.status(200).json(exists);
        return;
    }

    try {
        const book = await Book.create({
            openlibrary_id,
            title,
            author,
            year,
            description,
            cover_i,
        });
        res.status(200).json(book);
        console.log("book added to db = great success");
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// delete a book
const deleteBook = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findOneAndDelete({ _id: id });
        res.status(200).json(book);
    } catch (error) {
        return res.status(404).json({ error: "No such book" });
    }
};

module.exports = {
    getBooks,
    getBook,
    addBook,
    deleteBook,
};
