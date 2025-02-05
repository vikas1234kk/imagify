import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"

const Navbar = () => {

    const {user, setShowLogin, credits, logOut} = useContext(AppContext)
   

    const navigate = useNavigate()
    return (
        <motion.div  className='flex items-center justify-between py-4' initial={{ opacity: 0.2, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to={'/'}>
                <img src={assets.logo } alt="" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {
                    user ?
                    <div className='flex items-center gap-2 sm:gap-3 '>
                        <button onClick={()=>navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-all duratio-700'>
                            <img className='w-4' src={assets.credit_star} alt="" />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>Credits left: {credits}</p>
                        </button>
                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi, {user.name}</p>

                        <div className='relative group'>
                            <img  src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                            <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12  '>
                                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                    <li onClick={logOut} className='px-2 py-1 cursor-pointer pr-10'>LogOut</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-6'>
                        <p onClick={()=>navigate('/buy')} className='cursor-pointer'>Pricing</p>
                        <button className='bg-zinc-800 text-white py-2 px-7 sm:px-10 text-sm rounded-full' onClick={()=>setShowLogin(true)}>Log In</button>
                    </div>

                }
                
               
            </div>
        </motion.div>
    )
}

export default Navbar
