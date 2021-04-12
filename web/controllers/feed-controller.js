const http = require("http");
const { resolve } = require("path");
const asyncMiddleware = require("../utils/asyncMiddleware");
const api_helper = require("../utils/api_helper");

const FEED_HOST = process.env.FEED_HOST || 'localhost';
const FEED_PORT = parseInt(process.env.FEED_PORT) || 3000;

module.exports=
{
   
    feed:function(req, res) {
        
        //console.log(FEED_HOST + ":" + FEED_PORT + "/get");
        api_helper.make_API_call("http://" + FEED_HOST + ":" + FEED_PORT + "/get").then(response => {
            //res.json(response);
            res.render("feed", {
                name: "Brian",
                runs: response
            })
        })
        .catch(error => {
            res.send(error);
        });
        
    }
}
