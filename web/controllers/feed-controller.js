const api_helper = require("../utils/api_helper");

const FEED_HOST = process.env.FEED_HOST || 'localhost';
const FEED_PORT = parseInt(process.env.FEED_PORT) || 3000;

module.exports=
{
    stravaFeed:function(req, res) {

        if(req.session.auth_token_s == undefined){
            
            const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;
            const STRAVA_TOKEN_URL = process.env.STRAVA_TOKEN_URL;
    
            res.redirect("https://www.strava.com/oauth/authorize?client_id=" + STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=" + STRAVA_TOKEN_URL);
        }

        api_helper.make_API_call("http://" + FEED_HOST + ":" + FEED_PORT + "/get/" + req.session.auth_token_s).then(response => {
            res.render("feed", response);
        })
        .catch(error => {
            res.send(error);
        });
        
    }
}
