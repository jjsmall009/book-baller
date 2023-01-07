// Routes for dealing with user accounts
const express = require("express");

// controller functions
const {
    loginUser,
    signupUser,
    getUserBooks,
    updateUserBooks,
} = require("../controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// get users books list
router.get("/get_books", getUserBooks);

// update user book list
router.put("/update", updateUserBooks);

module.exports = router;
