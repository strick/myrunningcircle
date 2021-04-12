
module.exports=
{
    index:function(req, res) {
        res.render('index');

    },
    
    get:function(req, res) {
        
        res.render("Hello");
        //res.render('get');
    }
} 