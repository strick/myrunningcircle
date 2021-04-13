module.exports=
{
    index:function(req, res) {

        const STRAVA_CLIENT_ID = process.env.STRAVA_CLIENT_ID;

        res.redirect("https://www.strava.com/oauth/authorize?client_id=" + STRAVA_CLIENT_ID + "&response_type=code&redirect_uri=http://localhost:4000/feed&approval_prompt=force&scope=activity:read_all");

    }   
}