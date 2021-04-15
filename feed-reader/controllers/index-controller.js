const config = require('../config');
var url = `${config.dbhost}/${config.dbname}`;
  
  // create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

module.exports=
{
    index:function(req, res) {
        res.render('index');

    },
    
    get:function(req, res) {
     
       var runs = [];
        return MongoClient.connect(url,
            {useNewUrlParser: true, useUnifiedTopology: true})
            .then(client => {
                console.log("THIS IS IT");
                let db = client.db();  
                return db.collection("strava-feed").find().each(function(err, run) {

                    // Attach the user name to the record.
                if(run == null) {
                        client.close();
                        res.json({runs: runs});                                       
                }
                runs.push(run);

                })
            })
            .catch(error => {
                console.error("ERR");
                res.send(error);
        });
    
    }
} 