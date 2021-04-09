const express = require('express');
const mongodb = require('mongodb');

var app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Feed Reader is listening on port ${port}, point your browser at http://localhost:3001`);
});