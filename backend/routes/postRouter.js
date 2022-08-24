const express = require ("express")
const postRouter = express.Router()
const{ createPost , deletePost ,getAllPost, updatePostById} =require("../controller/post")

postRouter.post("/" , createPost)
postRouter.delete("/",deletePost)
postRouter.get("/",getAllPost)
postRouter.put("/",updatePostById)
module.exports=postRouter
