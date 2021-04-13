module.exports=
{
    index:function(req, res) {
  
        //https://www.strava.com/api/v3/activities/{id}?include_all_efforts=" "Authorization: Bearer [[token]

        const code = req.query.code;
        console.log(process.env.STRAVA_TOKEN);
        

        const strava = require('strava-v3')

        strava.athlete.listActivities({
            "access_token"  : req.query.access_token
        
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