const Users = require("../models/user.model");
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.CreateUser = async (req, res) => {
  try {
    let user = new Users(req.body.email, req.body.password, req.body.name, req.body.username);
    user = await user.save();
    res.send({ message: "user created successfully!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "something went wrong!"
    });
  }
};


exports.signin = async (req, res) => {
  const [email, _] = await Users.searchIfEmailExits(req.body.email);
  if (email.length == 0) {
    return res.status(404).send({ message: "User Not found." });
  } else {
    let user = email[0];
    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      name: user.name,
      accessToken: token
    });
  }
};