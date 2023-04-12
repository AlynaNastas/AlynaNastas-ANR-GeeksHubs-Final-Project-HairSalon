const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const db = require('./db');


app.get('/welcome', (req, res) => {
    return res.send("Welcome to my app")
})


db.then(() => {

    app.listen(PORT, () => console.log("Server listening on" + PORT));
})
    .catch((err) => console.log(err.message));   

