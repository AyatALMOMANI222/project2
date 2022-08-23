const express =require ("express")
const userRouter = express.Router()
const {createUser, updateUser}= require("../controller/user")
userRouter.post("/" , createUser)
userRouter.put("/",updateUser)
module.exports=userRouter