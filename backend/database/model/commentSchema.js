const mongoose = require("mongoose")
const commentSchema= new mongoose.Schema({
comment:{ type:String , required :true},
postId:{ type: mongoose.Schema.Types.ObjectId, ref: "postmodel" },
userId:{ type: mongoose.Schema.Types.ObjectId, ref: "usermodel" },
})
module.exports = mongoose.model("commentmodel", commentSchema)