/* The server for Book Baller
/  JJ Small ©2022
*/ 
require("dotenv").config();

// Server setup
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Book Baller!')
})

// Run the server and let it rip
app.listen(process.env.SERVER_PORT, () => {
    console.log("listening on port", process.env.SERVER_PORT);
});
