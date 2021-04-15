const api_helper = require("../utils/api_helper");


const STRAVA_CONNECTOR_HOST = process.env.STRAVA_CONNECTOR_HOST;
const STRAVA_CONNECTOR_PORT = parseInt(process.env.STRAVA_CONNECTOR_PORT);

module.exports=
{
    index:function(req, res) {
        res.render('index');

    },
    
    get:function(req, res) {
        console.log("GET");
       api_helper.make_API_call("http://" + STRAVA_CONNECTOR_HOST + ":" + STRAVA_CONNECTOR_PORT + "/" + req.params.access_token).then(response => {
            res.json({runs: response});
        })
        .catch(error => {
            res.send(error);
        });
    }
} 