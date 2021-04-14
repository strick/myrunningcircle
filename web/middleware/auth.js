const isLoggedIn = (req, res, next) => {if (req.user) {
    next();
  } else {
      res.status(401).send('Not Logged In: <a href="/auth/facebook">Login</a>');
    }
  }
  module.exports = isLoggedIn