const axios = require('axios');

module.exports = {

    logout:function(req, res) {
        req.session = null;
        req.logout();
        res.redirect('/');
    },

    strava:function(req, res) {

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
            //console.log(req.session.auth_token_s);

            res.redirect("/feed/show");
        })
        .catch(function(error) {
            console.error(error);
        });
    }
}