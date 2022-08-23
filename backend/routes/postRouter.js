const express = require ("express")
const postRouter = express.Router()
const{ createPost , deletePost} =require("../controller/post")

postRouter.post("/" , createPost)
postRouter.delete("/",deletePost)

module.exports=postRouter
