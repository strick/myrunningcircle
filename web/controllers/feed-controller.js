const http = require("http");

const FEED_HOST = process.env.FEED_HOST || 'localhost';
const FEED_PORT = parseInt(process.env.FEED_PORT) || 3000;

module.exports=
{
   
    feed:function(req, res) {
        console.log("In Feed");

        //res.render('feed');

        // Forward the request to the feed-reader to get the content
        const forwardRequest = http.request (
            {
                host: FEED_HOST,
                port: FEED_PORT,
                path:'/feed/get',
                method:'GET',
                headers: req.headers
            },
            forwardResponse => {
                res.writeHeader(forwardResponse.statusCode, forwardResponse.headers);
                res.forwardResponse.pipe(res);
            }
        );

        
        req.pipe(forwardRequest);

    }   
}