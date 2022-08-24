const express =require ("express");
const { get } = require("mongoose");
const userRouter = express.Router()
const {createUser ,getUserById , updateUserById, deleteUserById ,getAllUser }= require("../controller/user");

userRouter.post("/" , createUser);
userRouter.put("/",updateUserById);
userRouter.delete("/",deleteUserById)
userRouter.get("/us",getUserById )
userRouter.get("/",getAllUser)
module.exports=userRouter;