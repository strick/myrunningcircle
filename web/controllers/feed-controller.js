const api_helper = require("../utils/api_helper");

const FEED_HOST = process.env.FEED_HOST || 'localhost';
const FEED_PORT = parseInt(process.env.FEED_PORT) || 3000;


const config = require('../config');

var url = `${config.dbhost}/${config.dbname}`;
  
  // create a client to mongodb
var MongoClient = require('mongodb').MongoClient;

module.exports=
{
    sync:function(req, res) {
        
        if(req.session.auth_token_s == undefined){
            
            const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
            const STRAVA_TOKEN_URL = process.env.STRAVA_TOKEN_URL;
    
            res.redirect("https://www.strava.com/oauth/authorize?client_id=" + STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" + STRAVA_TOKEN_URL);
        }
        else {

            api_helper.make_API_call("http://" + FEED_HOST + ":" + FEED_PORT + "/get/" + req.session.auth_token_s).then(response => {
                return response;
            })
            .then(response => {

                return MongoClient.connect(url,
                    {useNewUrlParser: true, useUnifiedTopology: true})
                    .then(client => {
                      
                      let db = client.db();
                      console.log(response.runs);
                
                        //return db.collection("strava-feed").insertMany(response.runs);
                        // The idea is to get the entire feed list back from a vendor, update recoreds that exist and insert hte ones that dont.
                        return Promise.all((response.runs).map(function(run) {

                            // Attach the user name to the record.
                            run.fb_user_id = req.user.id;
                            run.fb_user_name = req.user.displayName;
                            return db.collection("strava-feed").updateOne({external_id:run.external_id}, {$set:run}, {upsert:true})
                        }));
                    })
                    .then(() =>{
                        console.log("added  is created!");
                        client.close();
      
                    });

            })
            .catch(error => {
                res.send(error);
            });

            res.redirect("/feed/show");
        }


    },

    show:function(req, res) {

        if(req.session.auth_token_s == undefined){
            
            const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
            const STRAVA_TOKEN_URL = process.env.STRAVA_TOKEN_URL;
    
            res.redirect("https://www.strava.com/oauth/authorize?client_id=" + STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" + STRAVA_TOKEN_URL);
        }
        else {

            api_helper.make_API_call("http://" + FEED_HOST + ":" + FEED_PORT + "/get/" + req.session.auth_token_s).then(response => {
                return response;
            })
            .then(response => {
                res.render("feed", response);
            })
            .catch(error => {
                res.send(error);
            });
        }
        
    }
}
