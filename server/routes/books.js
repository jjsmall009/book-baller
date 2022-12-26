// Routes for dealing with book requests
const express = require("express");
const {
    getBooks,
    getBook,
    addBook,
    deleteBook,
    updateBook,
} = require("../controllers/bookController");

const router = express.Router();

// GET all workouts
router.get("/", getBooks);

// // GET a single workout
// router.get("/:id", getBook);

// POST a new book
router.post("/", addBook);

// // DELETE a workout
// router.delete("/:id", deleteBook);

// // UPDATE a workout
// router.patch("/:id", updateBook);

module.exports = router;
