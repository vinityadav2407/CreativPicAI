import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex mt-20 items-center justify-between gap-4 py-3'>
          
          <img src={assets.logo_icon_4} alt=""  width={180}/>
          <p className='flex-1 border-l-2 border-gray-400 pl-8 text-sm text-gray-500 max-sm:hidden'> Copyright 2025 @CreativPicAI | All rights reserved.</p>

          <div className='flex gap-2.5'>
            <img src={assets.facebook_icon} alt="" width={35}/>
            <img src={assets.instagram_icon} alt="" width={35} />
            <img src={assets.twitter_icon} alt="" width={35} />
          </div>
    </div>
  )
}

export default Footer