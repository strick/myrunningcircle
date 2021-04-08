const express = require('express');
var app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

console.log("hello");

app.get('/', (req, res) => {
    res.send(`Hello Express on port:${port}`)
});

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}, point your browser at http://localhost:3001`);
});