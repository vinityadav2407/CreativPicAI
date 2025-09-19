import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import razorpay from 'razorpay'
import transactionModel from "../models/transactionModel.js";

const registerUser=async (req,res)=>{
try{
    let {name,email,password}=req.body;

    if(!name || !email || !password){
       return res.json({
              success:false,
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
        success:true,token,user:{name:user.name}
    })
}
catch (error){
       console.log(error);
       res.json({success:false,message:error.message});
       
}

}


// login user
const loginUser=async(req,res)=>{
    try {
        let {email,password}=req.body;
        let user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:'User dose not exist'});
        }

    const isMatch= await bcrypt.compare(password,user.password);
       if(isMatch){
           const token=jwt.sign({id:user._id},process.env.JWT_SECRET);
           res.json({
           success:true,token,user:{name:user.name}
          })

       }else{
        return res.json({success:false,message:'Invalid Credentials'})
       }
    } catch (error) {
         console.log(error);
         res.json({success:false,message:error.message});
    }
}

// add the credits in db of the current login user
const userCredit=async(req,res)=>{
    try {
         
    //  let {userId}=req.body;
     let userId = req.userId; 
     let user=await userModel.findById(userId);
     res.json({success:true,credits:user.creditBalance,user:{name:user.name}})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    
    }
    

}


const razorpayInstance= new razorpay({
    key_id:process.env.RAZORPAY_KEY_ID,
    key_secret:process.env.RAZORPAY_KEY_SECRET
});

const paymentRazorpay=async(req,res)=>{
    try {
    let userId=req.userId; 
    let{planId}=req.body;
    let userData=await userModel.findById(userId);

    if(!userId || !planId){
      res.json({success:false,message:"Missing Details"});
    }
        
  let credits,plan,amount,date;
  switch(planId){
    case 'Basic':
        plan='Basic'
        credits=100
        amount=10
        break;

    case 'Advanced':
        plan='Advanced'
        credits=500
        amount=50
        break;

    case 'Business':
        plan='Business'
        credits=5000
        amount=250
        break;
        
        default :
        return res.json({success:false,message:'plan not found'});
  }
   date=Date.now();
  const transactionData={
    userId,plan,credits,amount,date
  }

   
const newTransaction = await transactionModel.create(transactionData);

const options = {
   amount: amount * 100,
   currency: process.env.CURRENCY,
   receipt: newTransaction._id.toString(),
};

//   await razorpayInstance.orders(options,(error,order)=>{
//     if(error){
//         console.log(error);
//         return res.json({success:false,message:error.message});
//     }
//     res.json({success:true,order});

//   })
  console.log("Razorpay Key:", process.env.RAZORPAY_KEY_ID);
  console.log("Razorpay Secret:", process.env.RAZORPAY_KEY_SECRET);

    const order = await razorpayInstance.orders.create(options);
     res.json({ success: true, order });

    
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

const verifyRazorpay=async (req,res)=>{
    try {
         const {razorpay_order_id}=req.body;
         const orderInfo= await razorpayInstance.orders.fetch(razorpay_order_id);
         if(orderInfo.status==='paid'){
            const transactionData=await transactionModel.findById(orderInfo.receipt);
             if(transactionData.payment){
            return res.json({success:false,message:'Payments Failed'});
         }

         const userData=await userModel.findById(transactionData.userId);
         const creditBalance=userData.creditBalance+transactionData.credits ;
         await userModel.findByIdAndUpdate(userData._id,{creditBalance});
         await transactionModel.findByIdAndUpdate(transactionData._id,{payment:true});
         res.json({success:true,message:'credits added'});
         }else{
            res.json({success:false,message:'Payments Failed'});
         }

        
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export{registerUser,loginUser,userCredit,paymentRazorpay,verifyRazorpay};
