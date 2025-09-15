import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col text-center items-center justify-center my-20'>
        <div className='text-stone-500 inline-flex items-center text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500'>
            <p>Best text to image generator</p>
            <img src={assets.star_icon} alt="" />
        </div>
           <h1 className='text-4xl sm:text-7xl max-w-[380px] sm:max-w-[600px] mx-auto mt-10 text-center'>Turn text to <span className='text-blue-700'>image,</span> in seconds.</h1>
          
           <p className='max-w-xl text-center mx-auto mt-10'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>

           <button className='flex px-12 py-2.5 mt-8 sm:text-lg items-center justify-center w-auto text-center bg-black text-white gap-2 rounded-full '>
            Generate Images 
            <img  className='h-6' src={assets.star_group} alt="" />
           </button>
 
           <div className='flex  flex-wrap mt-16 gap-3 justify-center'>
            {Array(6).fill('').map((item,index) =>(
            
            <img  className='hover:scale-105 rounded transition-all duration-500 cursor-pointer max-sm:w-10' src={index%2==0 ?assets.sample_img_1:assets.sample_img_2} alt="" width={70} key={index}/>

            ))}
           </div>
           <p className='mt-2 text-neutral-600'>Generated images from the CreativPicAI.</p>
    </div>
  )
}

export default Header