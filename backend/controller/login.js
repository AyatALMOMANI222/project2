const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = require("../database/model/userSchema");

const login = (req, res) => {
  const { email, password } = req.body;
  userSchema
    .find({ email: email })
    .then((result) => {
      if (result.length == 0) {
        res.json({ success: false, 
          message: "the email doesnt exist" });
      }
      // res.json(result)
      if (result.length>0) {
        const hasspass = result[0].password;
      bcrypt.compare(password, hasspass, (err, result2) => {
        // bcrypt.compare( result[0].password,password,(result2, err) => {
        //   if (err) {
        //     res.json({ err , yy:"as"});
        //   }

          if (result2 == true) {
            const payload = {
              id: result[0]._id,
           
            };
            const secret = "ameer";
            const token = jwt.sign(payload, secret);
            res.json({
              success: true,
              token,
              message: "login successfully",
            });
          }
          else{
            res.status(404).json({
              success: false,
              message: "the password you have entered is incorrected",
              result,
            });
            console.log({result2});
          }
        });
      }
    })

    .catch((err) => {
      res.json(err);
    });
};
module.exports = { login };
