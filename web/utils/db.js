'use strict'

const config = require('../config');

var url = `${config.dbhost}/${config.dbname}`;
  
  // create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

module.exports = {

    userExists:function(user_id){
        return MongoClient.connect(url,
        {useNewUrlParser: true, useUnifiedTopology: true})
        .then(client => {
        
            let db = client.db();

            var query  = {fb_user_id: user_id };
            
            return dbo.collection("customers").find(query).toArray(function(err, result) {
                console.log(result);
                client.close();
              });
        }).
        then(result => {
            return false;
        })
        .catch(err => {
        console.error(err);
        }); 
    }
}