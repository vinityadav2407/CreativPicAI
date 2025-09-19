import { createContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext=createContext();

const AppContextProvider=(props)=>{

     let [user ,setUser]=useState(null);
     let[showLogin,setShowLogin]=useState(false);
      
     let [token ,setToken]=useState(localStorage.getItem('token'));
     let [credit,setCredit]=useState(false);
      
     let backendUrl=https://creativpicai.onrender.com; 
     let nevigate=useNavigate();

     const loadCreditsData= async ()=>{
      try {
          let {data}=await axios.get(backendUrl + '/api/user/credits' ,{headers:{token}});
          
           console.log(data)
          if(data.success){
            setCredit(data.credits);
            setUser(data.user);
          }
      } catch (error) {
         console.log(error);
         toast.error(error.message);
      }

     }

     const generateImage = async (prompt)=>{
            try {
             let {data} = await axios.post(backendUrl + '/api/image/generate-image',{prompt},{headers:{token}});

             if(data.success){
               loadCreditsData();
               return data.resultImage;
             }else{
                toast.error(data.message);
                loadCreditsData();
                if(data.creditBalance==0){
                  nevigate('/buy');
                }
             }

            } catch (error) {
               toast.error(error.message);
            }
     }

    useEffect(()=>{
      if(token){
      loadCreditsData()
      }
     },[token])

     const logout= async()=>{
          localStorage.removeItem('token');
          setToken('');
          setUser(null)
     }

   

     let value={
        user,setUser,showLogin,setShowLogin,backendUrl,token ,setToken,credit,setCredit,loadCreditsData,logout,generateImage
     }
     return(
        
        <AppContext.Provider value={value}>
              {props.children}
        </AppContext.Provider>
     );
}
export default AppContextProvider;
