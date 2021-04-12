module.exports=
{
    index:function(req, res) {
        res.render('index');

    },
    
    get:function(req, res) {
        //res.render("Hello");
        console.log("Get function");

       
      /*  res.writeHead(200, {
            "Content-Length": 500,
            "Content-Type": "html/text",
        });*/
        //res.send("TET");
        //res.send();
        //res.write(JSON.stringify(runs));
        res.render('get');
    }
} 