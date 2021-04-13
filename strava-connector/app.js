const express = require('express');
var app = express();

const port = process.env.PORT || 3002;

const router = require('./routes/routes.js');
app.use("", router);

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}, point your browser at http://localhost:${port}`);
}); 