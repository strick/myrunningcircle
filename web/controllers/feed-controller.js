const http = require("http");

const FEED_HOST = process.env.FEED_HOST || 'localhost';
const FEED_PORT = parseInt(process.env.FEED_PORT) || 3000;

module.exports=
{

    
   
    feed:function(req, res) {
        console.log("In Feed");
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
}
