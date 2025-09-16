import jwt from 'jsonwebtoken';

const userAuth=async (req,res,next)=>{
    let {token}=req.headers;
    if(!token){
       return res.json({
            sucess:false,
            message:'Not Authorized login Again'
        })
    }

    try {
       const tokenDecode= jwt.verify(token,process.env.JWT_SECRET) ;
       if(tokenDecode.id){
        req.body.userId=tokenDecode.id;
       }else{
            return res.json({
            sucess:false,
            message:'Not Authorized login Again'
        })
       }

       next();
    } catch (error) {
        res.json({sucess:false,message:error.message});
    }
}

export {userAuth};