const express = require('express');
const mongodb = require('mongodb');
const ejs = require('ejs');

var app = express();
/*
if (!process.env.DBHOST) {
    throw new Error("Please specify the databse host using environment variable DBHOST.");
}

if (!process.env.DBNAME) {
    throw new Error("Please specify the name of the database using environment variable DBNAME");
}*/

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

const router = require('./routes/routes.js');
app.use("", router);

/*app.get("/get", (req, res) => {
    console.log("HERE");
})*/

app.listen(port, () => {
    console.log(`Feed Reader is listening on port ${port}, point your browser at http://localhost:3001`);
});