var db = require("../utils/db");
var MongoClient = require('mongodb').MongoClient;

const config = require('../config');

var url = `${config.dbhost}/${config.dbname}`;

const isLoggedIn = (req, res, next) => {

  if(req.originalUrl == "/" && req.user){
    res.redirect("/profile");
  }
  else if (req.user) {

    // Restrict this to only users that have signed up for the application
    //console.log(url);
    MongoClient.connect(url,
      {useNewUrlParser: true, useUnifiedTopology: true})
      .then(client => {
      
          let db = client.db();

          var query  = {fb_user_id: req.user.id };
          
          return db.collection("users").find(query).toArray(function(err, result) {              
              client.close();

              if(result.length == 0)
                  res.status(401).send('Not Authorized: <a href="/auth/facebook">Login</a>');
              else     
                next();
            });
      })
      .catch(err => {
        console.error(err);
      }); 
  } else {
      res.status(401).send('Not Logged In: <a href="/auth/facebook">Login</a>');
    }
  }
  module.exports = isLoggedIn