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

         return db.collection("strava-feed").createIndex({"external_id":1},{unique:true})
      })
         .then(collection => {

          let runs = [
            { title:"My daily run", distance: "5", fb_user_id: "10112072063160502", fb_user_name: "Brian Strickland", external_id: "1b6279d3-075f-4ac4-b426-e87899105532"},
            { title:"My run", distance: "5", fb_user_id: "128332322", fb_user_name: "David Dupis", external_id: "1b6279d3-075f-4ac4-b426-e87899105532"},
            { title:"My dddd run", distance: "5", fb_user_id: "10112072063160502", fb_user_name: "Brian Strickland", external_id: "7c092e2d-b0e9-453b-820b-70cd9f94313c" },
            { title:"My 33 run", distance: "5", fb_user_id: "10112072063160502", fb_user_name: "Brian Strickland", external_id: "84b7604f-0436-4acc-bdc1-a26243cff123" },
            { title:"My weekly run", distance: "10", fb_user_id: "128332322", fb_user_name: "David Dupis", external_id: "e167ac4c-2efb-43b3-8aa8-43c6b7c9af05" },
            { title:"My monthly run", distance: "23", fb_user_id: "128332322", fb_user_name: "David Dupis", external_id: "21238c79-976b-4e1e-b3ce-a2c59764086d" }
          ];

          // The idea is to get the entire feed list back from a vendor, update recoreds that exist and insert hte ones that dont.
          return Promise.all(runs.map(function(run) {
            return db.collection("strava-feed").updateOne({external_id:run.external_id}, {$set:run}, {upsert:true})
          }));
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

    return MongoClient.connect(url,
      {useNewUrlParser: true, useUnifiedTopology: true})
      .then(client => {
        
        let db = client.db();
  
        // db pointing to newdb
        console.log("Switched to "+db.databaseName+" database");
  
        // create 'users' collection in newdb database
        return db.dropCollection("strava-feed")
        .then(() => {
          console.log("Collection is Deleted!");
          client.close();
        });
  s            
      })
      .catch(err => {
        console.error(err);
      });
 
}
