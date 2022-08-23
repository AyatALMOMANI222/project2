const mongoose = require("mongoose")
const postSchema= new mongoose.Schema({
post :{ type:String , required :true},
img :{type:String},
userId :{ type: mongoose.Schema.Types.ObjectId, ref: "usermodel" }

})
module.exports = mongoose.model("postmodel", postSchema)