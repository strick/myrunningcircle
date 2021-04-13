//const request = require('request');
const https = require('https');

module.exports=
{
    index:function(req, res) {

        const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;

        res.redirect("https://www.strava.com/oauth/authorize?client_id=" + STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=http://localhost:4000/auth/strava&approval_prompt=force&scope=activity:read_all");

    },

    auth:function(req, res) {
        console.log("HELL");

      /*  res.send({
            client_id: process.env.STRAVA_CLIENT_ID,
            client_secret: process.env.STRAVA_CLIENT_SECRET,
            code: req.query.code,
        });
    
        const options = {
            hostname: 'www.strava.com',
            port: 443,
            path: '/oauth/token?',
            method: 'POST'
        
        
        }

        // dd tHE POST DATA!!
       const dd = https.get(options, res => {
            console.log(`statusCode: ${res.statusCode}`)

            res.on('data', d => {
                process.stdout.write(d);
                ;
            });
        });

        dd.on('error', error => {
            console.error(error)
     });
*/
    }

}