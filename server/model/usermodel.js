const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    username:{ type:String, required:true },
    useremail :{ type:String, required:true },
    usertopic:{ type:String, required:true },
    userPhone:{ type:Number, required:true}
})

const userModel=mongoose.model("Employee",userSchema);

module.exports=userModel;