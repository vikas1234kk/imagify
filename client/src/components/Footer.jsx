import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>

        <img src={assets.logo} alt="" width={160} />

        <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-600 max-sm:hidden'>Copyright @vikas.dev | All right reserved</p>

        <div className='flex gap-3 '>
            <img src={assets.facebook_icon} alt="" width={34} />
            <img src={assets.instagram_icon} alt="" width={34} />
            <img src={assets.twitter_icon} alt="" width={34} />
        </div>
      
    </div>
  )
}

export default Footer
