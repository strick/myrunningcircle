'use strict'

var url = "mongodb://localhost:4000/feeds";
  
  // create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

//TODO:  Blog entry on setting up the migration
//TODD:  Blog entry about how to refactor this code.
module.exports.up = next => {
 
  // make client connect to mongo service
  return MongoClient.connect(url,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(client => {
      
      let db = client.db();

      console.log("Switched to "+db.databaseName+" database");      
      db.createCollection("running-feed");
      
      return client;

    })
    .then(client => {
         
          console.log("Collection is created!");
          client.close();

          // Gives:   warning : if your migration returns a promise, do not call the done callback
          //return next();
    })
    .catch(err => {
      console.error(err);
    });

}

module.exports.down = next => {

  // make client connect to mongo service
  return MongoClient.connect(url,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(client => {
      
      let db = client.db();

      // db pointing to newdb
      console.log("Switched to "+db.databaseName+" database");

      // create 'users' collection in newdb database
      db.dropCollection("running-feed");

      return client;

    })
    .then(client => {
      console.log("Collection is Deleted!");
      client.close();
      //return next();  // Must have this for migations
    })
    .catch(err => {
      console.error(err);
    });
}
