import jwt from 'jsonwebtoken';

const userAuth=async (req,res,next)=>{
    let {token}=req.headers;
    if(!token){
       return res.json({
            success:false,
            message:'Not Authorized login Again'
        })
    }

    try {
       const tokenDecode= jwt.verify(token,process.env.JWT_SECRET) ;
       if(tokenDecode.id){
        // req.body.userId=tokenDecode.id;
          req.userId = tokenDecode.id; 
       }else{
            return res.json({
            success:false,
            message:'Not Authorized login Again'
        })
       }

       next();
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export {userAuth};