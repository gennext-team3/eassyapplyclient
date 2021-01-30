const express = require('express');
const router = express.Router();
const Student = require('../modal/students');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const Profile = require('../modal/studentProfile');

router.post('/registration',async(req,res)=>{
    try{
        let errors = [];
        if(!validator.isEmail(req.body.email)){
            errors.push({message:"Email is not valid"});
        }
        if(validator.isEmpty(req.body.password) || !validator.isLength(req.body.password,{min:5})){
            errors.push({message:"Password is not valid"});
        }
        if(errors.length>0){
            const error = new Error("Invalid input.");
            error.data = errors;
            error.code = 422;
            throw error
        }
    const user = await User.find({email:req.body.email});
    console.log(user);
    if(user.length>0){
        return res.status(403).json({error:"User Already Exists !!!"})
    }
    const profile = new Profile({
        phone:'',
        addressLine1:'',
        addressLine2:'',
        city:'',
        state:'',
        pincode:'',
        firstName:'',
        lastName:'',
        education:[],
        experience:[],
        hobbies:[],
        interests:[],
        language:[],
        lastFilledApplication:{}
    })
    const profileMade = await profile.save();
    const hashPassword = await bcrypt.hash(req.body.password,12);
    const newUser = new Student({
        method:'local',
        email:req.body.email,
        local:{
            password:hashPassword
        },
        profileId:profileMade.id,
    })
    const result = await newUser.save();
    const token = jwt.sign({userId:result._id,email:result.email},"somesupersecretkey")
    res.status(200).json({token,user:result,message:'success'});
    }catch(err){
        res.sendStatus(404).json({message:'fail'});
    }
})

router.post('/login',async(req,res)=>{
    try{
        const user  = await User.findOne({email:req.body.email});
        console.log(user);
        if(!user){
            return res.json({error:'Wrong Credentials!!!'});
        }
        const isEqual = await bcrypt.compare(req.body.password,user.local.password);
        if(!isEqual){
            return res.status(403).json({error:'Wrong Credentials!!!'});
        }
        const token = jwt.sign({userId:user.id,email:user.email},"somesupersecretkey")
        res.status(200).json({token,user,message:'success'});
    }catch(e){
        res.sendStatus(404).json({message:'fail'});
    }
})

router.post('/',async(req,res)=>{
        const user = await User.findOne({_id:req.body.userId});
        if(user){
            res.json({user});
        }else{
            res.json({message:"fail"})
        }
         
    
})

router.post("/checkAuth",async(req,res)=>{
    try{
        const user = await User.findById(req.body.userId);
        if(user){
            const token = await jwt.sign({userId:user._id,email:user.email},"somesupersecretkey");
            return res.status(200).json({token,userId:user._id,email:user.email,message:'success'});     
        }
        return res.status(200).json({error:"No Data Found !!!"});
    }catch(err){
        res.json({message:'fail'});
    }
})

module.exports = router;