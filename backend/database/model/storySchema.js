const mongoose = require("mongoose")
const storySchema= new mongoose.Schema({
story :{ type:String  },
img :{type:String}
})
module.exports = mongoose.model("storymodel", storySchema)