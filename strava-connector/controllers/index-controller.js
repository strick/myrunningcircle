module.exports=
{
    index:function(req, res) {
        
        //https://www.strava.com/api/v3/activities/{id}?include_all_efforts=" "Authorization: Bearer [[token]

        console.log(process.env.STRAVA_TOKEN);

        var StravaApiV3 = require('strava_api_v3');
        var defaultClient = StravaApiV3.ApiClient.instance;

        // Configure OAuth2 access token for authorization: strava_oauth
        var strava_oauth = defaultClient.authentications['strava_oauth'];
        strava_oauth.accessToken = process.env.STRAVA_TOKEN;

        var api = new StravaApiV3.ActivitiesApi()

        var opts = { 
        'before': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place before a certain time.
        'after': 56, // {Integer} An epoch timestamp to use for filtering activities that have taken place after a certain time.
        'page': 56, // {Integer} Page number. Defaults to 1.
        'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
        };

        var callback = function(error, data, response) {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + data);
        }
        };
        api.getLoggedInAthleteActivities(opts, callback);

        let runs = [
            { title:"Strava: daily run", distance: "5" },
            { title:"Strava: weekly run", distance: "10" },
            { title:"Strava: monthly run", distance: "23" }
          ];
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(runs));
          

    }   
}