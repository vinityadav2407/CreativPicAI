import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div 
      initial={{opacity:.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}

    className='flex flex-col items-center justify-center  my-20 py-12'>
         <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonials</h1>
        <p className='text-lg text-gray-500 mb-16'>What Our Users Are Saying</p>
        
        <div className='flex flex-wrap gap-6'>
            
            {testimonialsData.map((item,index)=>(
                <div key={index} className='bg-white/20 p-12 w-80 m-auto rounded-md border shadow-md cursor-pointer hover:scale-[1.02] transition-all duration-300'>
                    <div className='flex flex-col items-center'>
                             <img src={item.image} alt="" className='rounded-full w-14'/>
                             <h2 className='text-xl font-semibold mt-4'>{item.name}</h2>
                             <p className='text-gray-500 mb-4'>{item.role}</p>

                             <div className='flex mb-4'>
                                {Array(item.stars).fill().map((items,index)=>(
                                     <img src={assets.rating_star} alt="" className='' key={index}/> 
                                ))}
                             </div>

                             <p className='text-center text-gray-500 text-sm'>{item.text}</p>
                    </div>
                </div>
                
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials