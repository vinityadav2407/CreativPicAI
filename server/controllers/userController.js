import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const registerUser=async (req,res)=>{
try{
    let {name,email,password}=req.body;

    if(!name || !email || !password){
       return res.json({
              sucess:false,
              message:"Missing Details"
        })
    }
    const salt= await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);

    const userData={
        name,email,password:hashPassword
    }
   const newUser=new userModel(userData);
    const user=await newUser.save();

    const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
    res.json({
        sucess:true,token,user:{name:user.name}
    })
}
catch (error){
       console.log(error);
       res.json({sucess:false,message:error.message});
       
}

}


// login user
const loginUser=async(req,res)=>{
    try {
        let {email,password}=req.body;
        let user=await userModel.findOne({email});
        if(!user){
            return res.json({sucess:false,message:'User dose not exist'});
        }

    const isMatch= await bcrypt.compare(password,user.password);
       if(isMatch){
           const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
           res.json({
           sucess:true,token,user:{name:user.name}
          })

       }else{
        return res.json({sucess:false,message:'Invalid Credentials'})
       }
    } catch (error) {
         console.log(error);
         res.json({sucess:false,message:error.message});
    }
}

// add the credits in db of the current login user
const userCredit=async(req,res)=>{
    try {
         
     let {userId}=req.body;
     let user=await userModel.findById(userId);
     res.json({sucess:true,credits:user.creditBalance,user:{name:user.name}})

    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.message});
    
    }
    

}
export{registerUser,loginUser,userCredit};
