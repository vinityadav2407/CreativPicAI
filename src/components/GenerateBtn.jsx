import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='pb-16 text-center'>

        <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-neutral-800 mt-2 py-6 md:py-16 '>See the magic.Try now</h1>

        <button className='inline-flex px-12 py-2.5 mt-8 sm:text-lg items-center justify-center m-auto text-center bg-black text-white gap-2 rounded-full hover:scale-105 transition-all duration-500'>
            Generate Images
            <img src={assets.star_group} alt="" className='h-6'/>
        </button>
    </div>
  )
}

export default GenerateBtn