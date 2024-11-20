import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js"
export const register = async (req,res)=>{
    const {username,email,password}=(req.body);
    try{
    const hashedPassword =await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const newUser=await prisma.user.create({
        data:{
            username,
            email,
            password: hashedPassword,
        },
    });
    console.log(newUser);
    res.status(201).json({message: "User created Successfully"});
}
catch(err){console.log(err);
    res.status(201).json({message: "Failed create user"});

}
}
export const login =(req,res)=>{
    //eval 
    console.log("login end point");
}
export const logout =(req,res)=>{
    //eval 
    console.log("logout end point");
}