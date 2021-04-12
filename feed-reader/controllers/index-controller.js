module.exports=
{
    index:function(req, res) {
        res.render('index');

    },
    
    get:function(req, res) {
        //res.render("Hello");
        console.log("Get function");

        let runs = [
            { title:"My daily run", distance: "5" },
            { title:"My weekly run", distance: "10" },
            { title:"My monthly run", distance: "23" }
          ];
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(runs));
    }
} 