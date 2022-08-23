const userSchema = require("../database/model/userSchema");
const createUser = (req, res) => {
  const {
    FirstName,
    LastName,
    Age,
    Country,
    Email,
    Password,
    sex,
    role,
    education,
  } = req.body;
  const createUser = new userSchema({
    FirstName,
    LastName,
    Age,
    Country,
    Email,
    Password,
    sex,
    role,
    education,
  });
  createUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const updateUser = (req, res) => {


    res.json("hiii")
};
module.exports = { createUser, updateUser };
