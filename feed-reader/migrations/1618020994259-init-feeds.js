'use strict'

var url = "mongodb://localhost:4000/feeds";
  
  // create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

//TODO:  Blog entry on setting up the migration
//TODD:  Blog entry about how to refactor this code.
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

          let runs = [
            { title:"My daily run", distance: "5" },
            { title:"My weekly run", distance: "10" },
            { title:"My weekly run", distance: "10" },
            { title:"My weekly run", distance: "10" },
            { title:"My monthly run", distance: "23" }
          ];


        //  console.log("test");
          db.collection("running-feed").insertMany(runs);
          // close the connection to db when you are done with it
          client.close();
          next();
      });   
  });;
}

module.exports.down = next => {
 
  // make client connect to mongo service
  MongoClient.connect(url, function(err, client) {
    const db = client.db();
      if (err) throw err;
      // db pointing to newdb
      console.log("Switched to "+db.databaseName+" database");
      // create 'users' collection in newdb database
      db.dropCollection("running-feed", function(err, result) {
          if (err) throw err;
          console.log("Collection is deleted!");
          // close the connection to db when you are done with it
          client.close();
          next();
      });   
  });;
}
/*
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
*/
