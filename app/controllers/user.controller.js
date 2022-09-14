const Users = require("../models/user.model");


exports.CreateUser = async(req, res) => {
  try{  
    console.log(req.body)
  let user = new Users(req.body.email,req.body.password,req.body.name,req.body.username);
  user = await user.save();
    console.log(user)
    res.send({ message: "user created successfully!" });
  }catch(e){
    console.log(e);
    res.status(500).json({
        message:"something went wrong!"
      });
  }
  };
