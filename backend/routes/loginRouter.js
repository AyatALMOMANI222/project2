const express =require ("express")
const loginRouter = express.Router()
const {login}= require("../controller/login")
loginRouter.post("/" , login)


module.exports=loginRouter
