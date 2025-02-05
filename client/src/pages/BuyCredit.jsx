import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import{AppContext} from '../context/AppContext'
import { motion } from "motion/react"

const BuyCredit = () => {
  const{user} = useContext(AppContext)
  return (
    <motion.div initial={{ opacity: 0.2, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once: true}} className='min-h-[80vh] pt-14 flex flex-col  items-center mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full items-center mb-10'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose The Plan</h1>


      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {
          plans.map((item, index)=>(
            <div className='bg-white drop-shadow-sm rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500' key={index}>
              <img src={assets.logo_icon} alt="" width={40} />
              <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-6'><span className='text-3xl font-medium'>${item.price} </span>/ {item.credits} Credits</p>
              <button className='sm:text-lg text-white px-12 py-2 rounded-lg bg-gray-800 text-center flex items-center gap-2 mt-6'>{user ? 'PurChase' : 'Get Started'}</button>

            </div>
          ))
        }
      </div>
    
    </motion.div>
  )
}

export default BuyCredit
