import React from 'react'
import { assets } from '../assets/assets'
import {  motion } from "motion/react"


const Description = () => {
  return (
    <motion.div initial={{opacity: 0.2, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 , y: 0 }} viewport={{ once: true }} className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Image</h1>
      <p className='text-gray-600 mb-8'>Turn Your Imagination And Visulation</p>


      <div className='flex flex-col gap-6 md:gap-14 md:flex-row items-center '>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />

        <div>
            <h2 className='text-3xl font-medium max-w-lg mb-6'>Introduction AI- Powered Image Generator </h2>
            <p className='text-gray-600 mb-2'>Easily Bring your ideas in you life with Ai-image genrator. whether you need stunning visulas and imaginary our tool transform text-to image and eye catching images within few seconds with just few clicks </p>
            <p className='text-gray-600 mb-2'>Simply type in a text prompt and cutting-edge Ai will generate high quality images few seconds. from product visulas and character design our potentials Powerd by inhance Ai image generator Technology </p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
