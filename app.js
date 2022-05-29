
const express = require("express");
const fs = require("fs");
const tourRouter = express.Router("./dev-data/routes/tourRoute");
const app = express();
app.use(express.json());



app.use('/api/v1/tours', tourRouter);
console.log(tourRouter);


// app.get("/api/v1/tours", (req,res) =>{
//     res.status(200).send("hey there from the server");
// })

module.exports = app;