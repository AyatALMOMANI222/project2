const mongoose = require("mongoose")
const userSchema= new mongoose.Schema({
FirstName :{ type:String , required :true},
LastName :{ type:String , required :true},
Age :{ type:Number },
Country :{ type:String},
Email :{ type:String , required :true},
Password :{ type:String , required :true},
sex :{ type:String},
role :{type :String},
education :{type:String}
})
module.exports = mongoose.model("usermodel", userSchema)