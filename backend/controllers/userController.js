const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User=require("../models/userModel");

//Register a user
exports.registerUser=catchAsyncErrors(async (req,res,next)=>{
    const {name,email,password}=req.body;

    const user=await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl",
        },
        });
        const token =user.getJWTToken();

        res.status(201).json({
            success:true,
            token,
    });
});

//login user
exports.loginUser=catchAsyncErrors(async(req,res,next)=>{
    const{email,password}=req.body;

    //checking if user has given password and email both

    if(email || password)
    {
        return next(new ErrorHander("Please Enter Email & Password",400));
    }

    const user =User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Invalid email or password",401))
    }

    //check passwrod of user (matched or not)
    const isPasswordMatched=user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid email or password",401));
    }
    const token =user.getJWTToken();
    res.status(200).json({
        success:true,
        token,
});
    
});
