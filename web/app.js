const express = require('express');
const ejs = require('ejs');
var app = express();

const port = process.env.PORT || 3001;

app.set('view engine', 'ejs');

const router = require('./routes/routes.js');
app.use("", router);

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}, point your browser at http://localhost:${port}`);
}); 