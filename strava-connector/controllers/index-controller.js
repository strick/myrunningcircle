module.exports=
{
    index:function(req, res) {
        
        let runs = [
            { title:"Strava: daily run", distance: "5" },
            { title:"Strava: weekly run", distance: "10" },
            { title:"Strava: monthly run", distance: "23" }
          ];
          res.setHeader('Content-Type', 'application/json');
          res.send(JSON.stringify(runs));
          

    }   
}