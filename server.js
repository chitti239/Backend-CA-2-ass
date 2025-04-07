const express = require("express");

const app = express();

app.use(express.json());


app.post("signup",(req,res)=>{
    const {userName,email,password,dateOfBirth} = req.body;
    if(!userName){
        return res.status(400).send({msg:"Username is empty,if not provide."});
    }
    if(!email){
        return res.status(400).send({msg:"email cannot be empty,if not provide."});
    }
    if(password.length<8 || password.length>=16){
        return res.status(400).send({msg:"Password length should be greater than 8 or less than or equal t0 16 "})
    }
    const data = {
        userName,email,password,dateOfBirth
    }
    res.status(200).send({msg:"successfully signed up..!"});
});

app.get("getsignup",(req,res)=>{
    try {
        const data = {
            userName,email,password,dateOfBirth
        } 
        res.status(200).send({msg:"This are user details",data});
    } catch (error) {
        res.status(500).send({msg:"something went wrong while fetching data..!"});
    }
});

app.listen(3000,()=>{
    try {
        console.log("Server connected successfully!");
    } catch (error) {
        console.log("Something went wrong while connecting to server..!");
    }
});