import React from 'react'
import { assets, plans } from '../assets/assets'
import {AppContext} from '../context/AppContext';
import { useContext } from 'react';

const BuyCredit = () => {

let {user}=useContext(AppContext)

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className=' border border-gray-400 px-10 py-2 rounded-full mb-6 '>Our Plans</button>
      <h1 className='text-3xl text-center font-medium mb-6 sm:mb-10 '>Choose the plan</h1>
       
       <div className='flex flex-wrap justify-center gap-6 text-left'>
       
        { plans.map((item,index)=>(
           <div key={index} className='bg-white drop-shadow-sm border rounded-lg px-8 py-12
            text-gray-600 hover:scale-105 transition-all duration-500'>
            <img width={40}  src={assets.logo_icon_0} alt="" />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'><span className='text-3xl font-medium'>${item.price}</span>/ {item.credits} credits</p>
            <button className='w-full bg-gray-800 py-2.5 text-white mt-8 rounded-md text-sm min-w-52'>{}{user?'Purchase':'Get Started'}</button>
          </div>
        ))}

       </div>

    </div>
  )
}

export default BuyCredit