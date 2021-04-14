module.exports = {

    logout:function(req, res) {
        req.session = null;
        req.logout();
        res.redirect('/');
    }
}