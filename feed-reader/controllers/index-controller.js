const api_helper = require("../utils/api_helper");


const STRAVA_CONNECTOR_HOST = process.env.STRAVA_CONNECTOR_HOST;
const STRAVA_CONNECTOR_PORT = parseInt(process.env.STRAVA_CONNECTOR_PORT);

module.exports=
{
    index:function(req, res) {
        res.render('index');

    },
 
    }
} 
//