// Functions for handling user route requests
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);

        // create a token
        const token = createToken(user._id);

        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// signup a user
const signupUser = async (req, res) => {
    console.log("user controller - sign up");
    const { username, password } = req.body;

    try {
        console.log("about to add user to database");
        const user = await User.signup(username, password);

        // create a token
        const token = createToken(user._id);

        console.log("added user is a success");
        res.status(200).json({ username, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
``;
// get users books
const getUserBooks = async (req, res) => {
    const user_id = req.user._id;

    try {
        const data = await User.findOne(user_id).populate("books").sort({ createdAt: -1 });
        res.status(200).json(data.books.reverse());
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// update users book list
const updateUserBooks = async (req, res) => {
    console.log("updating user books list with new book");

    const { username, book_id } = req.body;
    console.log(req.body);

    try {
        const added = await User.findOneAndUpdate(
            { username: username },
            { $addToSet: { books: book_id } },
            { new: true }
        );

        let x = JSON.stringify(added.books[added.books.length - 1]);
        let y = x.substring(1, x.length - 1);

        if (y === book_id) {
            console.log("book added to user list in db = good");
            res.status(200).json({ mssg: "yo yo ma" });
        } else {
            console.log("book already in your list");
            res.status(200).json({ error: "Book already in your list" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// deletes the given book from the users list
const deleteBook = async (req, res) => {
    console.log("in user controller", req.params);
    console.log(req.body.user.username);

    const { id } = req.params;
    const { user } = req.body;

    try {
        const added = await User.findOneAndUpdate(
            { username: user.username },
            { $pull: { books: id } }
        );

        console.log(added.books);
        res.status(200).json({ _id: id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { signupUser, loginUser, getUserBooks, updateUserBooks, deleteBook };
