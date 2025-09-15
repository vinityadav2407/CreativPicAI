import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {

  let [image , setImage]=useState(assets.sample_img_1);
  let [isImageLoaded,setIsImageLoaded]=useState(false);
  let [loading , setLoading]=useState(false)
  let [input,setInput]=useState('')

  let onSubmitHandler = async (event)=>{

  }

  return (
    

    <form onSubmit={onSubmitHandler} action="" className=' flex flex-col min-h-[90vh] justify-center items-center'>
    <div className='relative'>
      <img src={image} alt="" className='max-w-sm rounded'/>
      <span className={`absolute botton-0 left-0  h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]':'w-0'} `}/>

      <p className={!loading ?'hidden':''}>Loading....</p>
    </div>

{ !isImageLoaded && 
    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
      <input onChange={(event)=>(setInput(event.target.value))} value={input} type="text" placeholder='Describe what you wants to generate'className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' />
      <button type='submit' className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full '>Generate</button>
      
    </div>
   }

   { isImageLoaded && 
        <div className='flex gap-4 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
          <p onClick={()=>(setIsImageLoaded(false))}
           className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
          <a href={image}  download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'> Download</a>
        </div>
     }
    </form>
  )
}

export default Result