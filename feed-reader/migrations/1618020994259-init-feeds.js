'use strict'

var url = "mongodb://localhost:4000/feeds";
  
  // create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

module.exports.up = next => {
 
  // make client connect to mongo service
  MongoClient.connect(url, function(err, client) {

    const db = client.db();
      if (err) throw err;
      // db pointing to newdb
      console.log("Switched to "+db.databaseName+" database");
      // create 'users' collection in newdb database
      db.createCollection("running-feed", function(err, result) {
          if (err) throw err;
          console.log("Collection is created!");
          // close the connection to db when you are done with it
          client.close();

          next();
      });   
  });

}

module.exports.down = next => {

  // make client connect to mongo service
  return MongoClient.connect(url)
    .then(client => {
      return client.db();
    })
    .then(db => {

      // db pointing to newdb
      console.log("Switched to "+db.databaseName+" database");
      // create 'users' collection in newdb database
      return db.dropCollection("running-feed");

    })
    .then(() => {
      console.log("Collection is Deleted!");
      client.close();
      return next();  // Must have this for migations
    })
  .catch(err => next(err));
}
