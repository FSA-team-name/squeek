const checkAuth = (req, res, next) => {
    if(req.user){
      next();
    }
    else{
      res.status(401).send({message: "User unauthorized"});
    }
  }
  
  module.exports = {
    checkAuth
  }
