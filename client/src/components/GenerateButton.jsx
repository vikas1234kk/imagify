import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import {  motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateButton = () => {

  const{user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onHandler =  () => {
    if(user){
      navigate('/result')

    } else{
      setShowLogin(true)
    }
  }

  return (
    <motion.div initial={{opacity: 0.2, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 , y: 0 }} viewport={{ once: true }}  className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>See The Magic.  Try Now</h1>

        <motion.button initial={{opacity: 0}}  animate={{opacity: 1}} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95}} transition={{ default: { duration: 0.5 }, opacity: {delay: 0.8, duration: 1 }}} onClick={onHandler} className='mt-14 sm:text-lg text-white px-10 py-2 rounded-full bg-black text-center flex items-center gap-2 mt-6 text-sm' >Generate Image
                <img className='h-6' src={assets.star_group} alt="" />
        </motion.button>
      
    </motion.div>
  )
  
}

export default GenerateButton
