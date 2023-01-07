// Routes for dealing with user accounts
const express = require("express");

// controller functions
const {
    loginUser,
    signupUser,
    getUserBooks,
    updateUserBooks,
} = require("../controllers/userController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// get users books list

router.use("/get_books", requireAuth);
router.get("/get_books", getUserBooks);

// update user book list
router.put("/update", updateUserBooks);

module.exports = router;
