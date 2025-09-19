import React, { useContext, useEffect, useState } from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

 let [state,setState]=useState('login')
 
 let{setShowLogin,backendUrl,setToken,setUser}=useContext(AppContext);

 let [name,setName]=useState('');
 let [email,setEmail]=useState('');
 let [password,setPassword]=useState('');

const onSubmitHandler = async (e)=>{
  e.preventDefault();
  try {

   if(state ==='login'){

   const {data}= await axios.post(backendUrl+'/api/user/login',{email,password});
   if(data.success){
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('token',data.token);
    setShowLogin(false);
   }else{
    toast.error(data.message);
   }
  }

  else{

    const {data}= await axios.post(backendUrl+'/api/user/register',{name,email,password});
       if(data.success){
       setToken(data.token);
       setUser(data.user);
       localStorage.setItem('token',data.token);
       setShowLogin(false);
       }else{
        toast.error(data.message);
      }
  }
  } catch (error) {
     toast.error(error.message);
  }
}

 useEffect(()=>{
         document.body.style.overflow='hidden'
         return ()=>{
          document.body.style.overflow='unset'
         }
        },[])

  return (


    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/30 flex justify-center items-center  backdrop-blur-sm z-10'>
      <form onSubmit={onSubmitHandler} className= 'relative bg-white text-slate-500 rounded-xl p-10'>
           <h1 className='text-center text-2xl font-medium text-neutral-700'>{state}</h1>
           <p className='text-sm'>Welcome back! Please sign in to continue</p>
           
           {state !=='login' &&
           <div className='flex rounded-full border px-6 py-2 mt-5 items-center gap-2'>
            <img width={20} src={assets.user_icon} alt="" />
            <input onChange={(e)=>setName(e.target.value)}  value={name} type="text" placeholder='Full Name' required className='outline-none text-sm'/>
           </div>
          }

            <div className='flex rounded-full border px-6 py-2 mt-4 items-center gap-2'>
            <img width={20} src={assets.email_icon} alt="" />
            <input onChange={(e)=>setEmail(e.target.value)}  value={email} type="email" placeholder='Email-Id' required className='outline-none text-sm'/>
           </div>

            <div className='flex rounded-full border px-6 py-2 mt-4 items-center gap-2'>
            <img width={20} src={assets.lock_icon} alt="" />
            <input onChange={(e)=>setPassword(e.target.value)}  value={password} type="password" placeholder='Password' required className='outline-none text-sm'/>
           </div>
             
             <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot password?</p>
             <button className='bg-blue-600 py-2 text-white w-full rounded-full'>{ state=='login'?'login':'create account'}</button>
             
             {state ==='login'?
             <p className='mt-5 text-center'>Don't have an account?<span className='text-blue-600 cursor-pointer' onClick={()=>(setState('signup'))}> Sign up</span></p>
            :
             <p className='mt-5 text-center'>Already have an account?<span className='text-blue-600 cursor-pointer'onClick={()=>(setState('login'))}> Login</span></p>
             }

             <img onClick={()=>(setShowLogin(false))} src={assets.cross_icon} alt=""  className='absolute top-5 right-5 cursor-pointer'/>
        </form>
    </div>
  )
}

export default Login