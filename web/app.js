const express = require('express');
const ejs = require('ejs');
var app = express();
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid');
dotenv.config(); 
var cookieParser = require('cookie-parser');
var session = require('express-session');

const cookieSession = require('cookie-session')


const passport = require('passport');
require("./passport");


app.use(cookieSession({
    name: 'facebook-auth-session',
    keys: ['key1', 'key2']
  }))
  app.use(passport.initialize());
  app.use(passport.session());

  
  app.get('/auth/error', (req, res) => res.send('Unknown Error'))
  app.get('/auth/facebook',passport.authenticate('facebook'));
  app.get('/auth/facebook/callback',passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
         res.redirect('/');
  });


const port = process.env.PORT || 3001;

const router = require('./routes/routes.js');

var sess = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {},
    genid: function(res){
        return uuidv4(); // use UUIDs for session IDs
    }
};

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
  }

  
app.use(session(sess));

app.use(router);

app.set('view engine', 'ejs');
//app.use(cookieParser());


app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
  })


app.listen(port, () => {
    console.log(`Microservice listening on port ${port}, point your browser at http://localhost:${port}`);
}); 

module.exports = app;