const axios = require('axios');

module.exports=
{
    index:function(req, res) {

        const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;

        res.redirect("https://www.strava.com/oauth/authorize?client_id=" + STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=http://localhost:4000/auth/strava&approval_prompt=force&scope=activity:read_all");

    },

    auth:function(req, res) {
      
      //  console.log("RF");
     //   console.log(req);
        const strava_params = {
            client_id: process.env.STRAVA_CLIENT_ID,
            client_secret: process.env.STRAVA_CLIENT_SECRET,
            code: req.query.code,
            grant_type: "authorization_code"
        };

        axios.post("https://www.strava.com/oauth/token?",
            strava_params,
        )
        .then(function(response){
            let auth_token = response.data.access_token;
            req.session.auth_token_s = auth_token;
            console.log(req.session.auth_token_s);
        })
        .catch(function(error) {
            console.error(error);
        });
    }

}