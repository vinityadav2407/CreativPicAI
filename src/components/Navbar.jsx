import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {
 
  let nevigate=useNavigate();
   let {user}=useContext(AppContext);

  return (

    <div className='flex item-center justify-between py-4'>
        <Link to='/'>
        <img src={assets.logo_icon_4} alt="" className='w-38 sm:w-42 lg:w-50'/>
        </Link>

       <div>
         {
         user ?
          <div className='flex items-center gap-2 sm:gap-4'>
             <button onClick={()=>nevigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-2 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
              <img src={assets.credit_star_darkblue} alt="crdit star" className='w-5'/>
              <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left:10</p>
             </button>
             <p className='text-gray-600 pl-4 max-sm:hidden'>Hii, Users!</p>

             <div className='relative group'>
              <img src={assets.profile_icon} alt="" className='w-10'/>
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12 '>
                 
                 <ul className='list-none m-0 p-2 bg-white border rounded-md text-sm'>
                  <li className='px-2 py-1 pr-10 cursor-pointer'>Logout</li>
                 </ul>

              </div>
             </div>

          </div>
            :
          <div className='flex items-center gap-2 sm:gap-6'>
           <p onClick={()=>nevigate('/buy')} className='cursor-pointer'>Pricing</p>
           <button className='bg-zinc-800 text-white  text-sm py-2 px-7 sm:px-10 rounded-full'>Login</button>
          </div>
        }

       </div>

    </div>
  )
}

export default Navbar