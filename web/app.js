const express = require('express');
const ejs = require('ejs');
var app = express();

const port = process.env.PORT || 3001;

//app.use(express.static(__dirname + '/public'));

//app.get('/', (req, res) => {
// res.render('index')
//});

app.set('view engine', 'ejs');

var indexRouter = require('./routes/index-route.js');
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Microservice listening on port ${port}, point your browser at http://localhost:${port}`);
});