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

      return db.createCollection("users")
      .then(collection => {

        let users = [
          { fb_user_id: "101120720631605023", fb_user_name: "Brian Strickland" },
          { fb_user_id: "128332322", fb_user_name: "David Dupis" }
        ];

        return db.collection(config.usersTable).insertMany(users);
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

  // make client connect to mongo service
  return MongoClient.connect(url,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(client => {
      
      let db = client.db();

      // db pointing to newdb
      console.log("Switched to "+db.databaseName+" database");

      // create 'users' collection in newdb database
      return db.dropCollection("users")
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
