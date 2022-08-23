const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = require("../database/model/userSchema");

const login = (req, res) => {
  const { email, password } = req.body;
  userSchema
    .find({ email: email })
    .then((result) => {
      if (result.length == 0) {
        res.json({ success: false, message: "the email doesnt exist" });
      }
      if (result.length > 0) {
        bcrypt.compare(result[0].password, password, (result2, err) => {
          if (err) {
            res.json({ err });
          }
          if (result2 == true) {
            const payload = {
              id: result[0]._id,
              country: result[0].country,
              role: result[0].role,
            };
            const secret = process.env.secret;
            const token = jwt.sign(payload, secret);
            res.json({
              success: true,
              token,
              message: "login successfully",
            });
          } else {
            res.status(403).json({
              success: false,
              message: "the password you have entered is incorrected",
            });
          }
        });
      }
    })

    .catch((err) => {
      res.json(err);
    });
};
module.exports = { login };
