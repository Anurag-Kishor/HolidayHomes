const express = require('express');
const app = express();

const pool = require("./db");

//middlewares
app.use(express.json());

//routes
app.get('/', (req, res) => {
    console.log('Hello');
    res.end();
})


app.post("/", async(req, res) => {
    try {
        console.log(req.body);

        const newTest = pool.query(
            "INSERT INTO test (text) VALUES ($1)",
            [req.body.text]
        );
    } catch (error) {
        
    }
})
app.listen(5000, console.log('Connected to port 5000'));