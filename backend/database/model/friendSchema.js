const mongoose = require("mongoose")
const friendSchema= new mongoose.Schema({
userId:{ type: mongoose.Schema.Types.ObjectId, ref: "usermodel" },
friendId:{ type: mongoose.Schema.Types.ObjectId, ref: "usermodel" }
})
module.exports = mongoose.model("friendmodel",friendSchema)