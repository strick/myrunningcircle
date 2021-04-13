module.exports=
{
    index:function(req, res) {
  
        //https://www.strava.com/api/v3/activities/{id}?include_all_efforts=" "Authorization: Bearer [[token]

        const code = req.query.code;
        console.log(process.env.STRAVA_TOKEN);
        

        const strava = require('strava-v3')

        strava.athlete.listActivities({
            "access_token"  : req.params.access_token
        
          },function(err,payload,limits) {
            if(!err) {
                console.log(payload);

                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(payload));
          
            }
            else {
                console.log(err);
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(err));
          
            }
        });

        

    }   
}