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
            res.json(response);
        })
        .catch(error => {
            res.send(error);
        });
        
    }

/*
        // Forward the request to the feed-reader to get the content
        const forwardRequest = http.request (
            {
                host: FEED_HOST,
                port: FEED_PORT,
                path:'/get',
                method:'GET',
                headers: req.headers
            },
            forwardResponse => {
                res.writeHeader(forwardResponse.statusCode, forwardResponse.headers);
                forwardResponse.pipe(res);
            }
        );

        let x = req.pipe(forwardRequest);
       // console.log(x);
        
        //res.render("feed");
*/
 
}
