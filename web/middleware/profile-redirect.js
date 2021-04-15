const shouldRedirctToProfile = (req, res, next) => {

      // If they are on the index page, take them to profile
    //console.log(req.originalUrl);
    if(req.originalUrl == "/" && req.user){
      res.redirect("/profile");
    }
}

module.exports = shouldRedirctToProfile