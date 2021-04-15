'use strict'

const config = require('../config');

var url = `${config.dbhost}/${config.dbname}`;
  
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

      return db.createCollection("strava-feed")
      .then(collection => {

        let runs = [
          { title:"My daily run", distance: "5", fb_user_id: "10112072063160502", fb_user_name: "Brian Strickland" },
          { title:"My run", distance: "5", fb_user_id: "128332322", fb_user_name: "David Dupis" },
          { title:"My dddd run", distance: "5", fb_user_id: "10112072063160502", fb_user_name: "Brian Strickland" },
          { title:"My 33 run", distance: "5", fb_user_id: "10112072063160502", fb_user_name: "Brian Strickland" },
          { title:"My weekly run", distance: "10", fb_user_id: "128332322", fb_user_name: "David Dupis" },
          { title:"My monthly run", distance: "23", fb_user_id: "128332322", fb_user_name: "David Dupis" }
        ];

        return db.collection("strava-feed").insertMany(runs);
      })
      .then(() => {
         
        console.log("Collection is created!");
        client.close();

      });

    })
  
    .catch(err => {
      console.error(err);
    });

}

module.exports.down = next => {

 
}
