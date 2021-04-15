var db = require("../utils/db");
var MongoClient = require('mongodb').MongoClient;

const config = require('../config');

var url = `${config.dbhost}/${config.dbname}`;

const isLoggedIn = (req, res, next) => {

  if (req.user) {

    // Restrict this to only users that have signed up for the application
    //if(db.userExists(req.user.id)){
    //   next();
    //
    //else {
//      res.status(401).send('Not authorized: <a href="/auth/facebook">Login</a>');
    //}
    console.log(url);
    MongoClient.connect(url,
      {useNewUrlParser: true, useUnifiedTopology: true})
      .then(client => {
      
          let db = client.db();
        console.log("looking");
          var query  = {fb_user_id: req.user.id };
          
          return db.collection("users").find(query).toArray(function(err, result) {              
              client.close();

              if(result.length == 0)
                  res.status(401).send('Not Authorized: <a href="/auth/facebook">Login</a>');
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