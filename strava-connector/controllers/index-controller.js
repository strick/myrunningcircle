module.exports=
{
    index:function(req, res) {

        const code = req.query.code;
        console.log(process.env.STRAVA_TOKEN);
        
        const strava = require('strava-v3')

        strava.athlete.listActivities({
            "access_token"  : req.params.access_token,
            "per_page" : 100
        
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