const { restart } = require('nodemon');

module.exports=
{
    index:function(req, res) {
        res.render("index");
    },

    profile:function(req, res) {
        res.render("profile", {
            username: req.user.displayName
        });
    }
}