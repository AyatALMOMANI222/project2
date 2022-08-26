const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema= new mongoose.Schema({
firstName :{ type:String , required :true},
lastName :{ type:String , required :true},
age :{ type:Number },
Country :{ type:String},
email :{ type:String , required :true , unique:true},
password :{ type:String , required :true},
sex :{ type:String},
role :{type :String},
education :{type:String}

})

// نهشيرةةة
userSchema.pre("save", async function () {
    const hasspass = await bcrypt.hash(this.password, 10);
    this.password = hasspass;
  });
module.exports = mongoose.model("usermodel", userSchema)