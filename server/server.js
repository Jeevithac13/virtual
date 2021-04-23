const express = require("express");
const bodyParser= require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");
const User=require("./model/userModel");

const app = express();

const mongoose_url="mongodb+srv://jeevitha:jeevitha123@cluster0.ggumo.mongodb.net/userform?retryWrites=true&w=majority" ;

mongoose.connect(mongoose_url,{useNewUrlParser: true, useUnifiedTopology: true});


app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 7000;

app.get('/',(req,res)=> {
    res.send('Hello from Server');
})

app.post("/enroll",async (req,res) => { 
    try{
        let user=new User();
        user.username=req.body.name;
        user.useremail=req.body.email; 
        user.usertopic=req.body.topic;
        user.userPhone=req.body.phone;
        await  user.save();
        res.json({message:"Success", user});
    }catch(err){
        res.status(400).json({errMsg:err.message});
    }
})

app.listen(port, () => {
    console.log("Server is running on port " + port);
})