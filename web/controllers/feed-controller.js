const api_helper = require("../utils/api_helper");

const FEED_HOST = process.env.FEED_HOST || 'localhost';
const FEED_PORT = parseInt(process.env.FEED_PORT) || 3000;

module.exports=
{
   
    feed:function(req, res) {

        api_helper.make_API_call("http://" + FEED_HOST + ":" + FEED_PORT + "/get/" + req.session.auth_token_s).then(response => {
            res.render("feed", response);
        })
        .catch(error => {
            res.send(error);
        });
        
    }
}
