// Functions for handling book route requests
const Workout = require("../models/bookModel");
const mongoose = require("mongoose");

// get all books
const getBooks = async (req, res) => {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).json(books);
};

// // get a single book
// const getWorkout = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const workout = await Workout.findById(id);
//         res.status(200).json(workout);
//     } catch (error) {
//         return res.status(404).json({ error: "No such workout" });
//     }
// };

// add a new book
const addBook = async (req, res) => {
    const { title, reps, load } = req.body;

    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// // delete a workout
// const deleteWorkout = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const workout = await Workout.findOneAndDelete({ _id: id });
//         res.status(200).json(workout);
//     } catch (error) {
//         return res.status(404).json({ error: "No such workout" });
//     }
// };

// // update a workout
// const updateWorkout = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const workout = await Workout.findOneAndUpdate(
//             { _id: id },
//             {
//                 ...req.body,
//             }
//         );
//         res.status(200).json(workout);
//     } catch (error) {
//         return res.status(404).json({ error: "No such workout" });
//     }
// };

module.exports = {
    getBooks,
    addBook,
};
