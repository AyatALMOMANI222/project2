const userSchema = require("../database/model/userSchema");
const createUser = (req, res) => {
  const {
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    sex,
    role,
    education,
  } = req.body;
  const createUser = new userSchema({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
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

const updateUserById = (req, res) => {
  const id = req.body.id;
  userSchema
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "the user: ${id} is not found",
        });
      }
      res.status(202).json({
        success: true,
        messege: "user updated",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        messege: "server error",
        err: err.message,
      });
    });
};

const deleteUserById = (req, res) => {
  const id = req.body.id;
  userSchema
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "the user: ${id} is not found",
        });
      }
      res.status(200).json({
        success: true,
        messege: "user deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        messege: "server error",
        err: err.message,
      });
    });
};
const getUserById = (req, res) => {
  const id = req.body.id;
  userSchema
    .find({ id })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: "the user: ${id} is not found",
        });
      }
      res.status(200).json({
        success: true,
        messege: "user",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        messege: "server error",
        err: err.message,
      });
    });
};

const getAllUser = (req, res) => {
  userSchema
    .find({})

    .then((result) => {
      res.status(200).json({
        success: true,
        result,
        message: "all the users",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "error",
        error: err,
      });
    });
};

module.exports = {
  createUser,
  updateUserById,
  deleteUserById,
  getUserById,
  getAllUser,
};
