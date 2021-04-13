module.exports=
{
    index:function(req, res) {
  
        //https://www.strava.com/api/v3/activities/{id}?include_all_efforts=" "Authorization: Bearer [[token]

        const code = req.query.code;
        console.log(process.env.STRAVA_TOKEN);
        

        const strava = require('strava-v3')
        
        var f = function (args, done) {
            var endpoint = 'activities'
            console.log("CODE is: " + code);
            return strava.activities._listHelper(endpoint, args, done)
          }


        //f({
        strava.athlete.listActivities({
            "access_token"  : "77fd9cd813e01bcff56fe90feae7732a5c5e52f3",
            "client_id"     : process.env.STRAVA_CLIENT_ID,
            "client_secret" : process.env.STRAVA_CLIENT_SECRET,
            "code" : code
        
          },function(err,payload,limits) {
            if(!err) {
                console.log(payload);
            }
            else {
                console.log(err);
            }
        });



        let runs = [
            { title:"Strava: daily run", distance: "5" },
            { title:"Strava: weekly run", distance: "10" },
            { title:"Strava: monthly run", distance: "23" }
          ];
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(runs));
          

    }   
}