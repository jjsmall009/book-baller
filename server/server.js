require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/books");
const userRoutes = require('./routes/user')

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use("/api/books", bookRoutes);
app.use('/api/user', userRoutes)

// connect to db
mongoose
    .connect(process.env.MONGO_CONN)
    .then(() => {
        console.log("connected to database");
        // listen to port
        app.listen(process.env.SERVER_PORT, () => {
            console.log("listening for requests on port", process.env.SERVER_PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    });
