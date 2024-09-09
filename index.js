
const express = require('express');

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json());


const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port at ${PORT}`);
})


const dbConnect = require('./config/database');
dbConnect();


app.get("/", (req, res) => {
    res.send(`<h1> Harshit is duniya ka papa hai</h1>`)
})

