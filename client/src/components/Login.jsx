import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const[state, setState] = useState('Login')
    const {setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')


    
    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            
            if (state === 'Login') {

                const{ data } = await axios.post(backendUrl + '/api/user/login', {email, password})
                if (data.success) {

                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)

                    
                } else{
                    toast.error(data.message)
                }
                
            } else {
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})
                if (data.success) {

                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)

                   

            } else{
                toast.error(data.message)

            }
        }


        } catch (error) {
            toast.error(data.message)
            
        }

    }




    useEffect(()=> {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';

        }

    },[])
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>

            <motion.form onSubmit={onSubmitHandler} initial={{ opacity: 0.2, y: 60 }} transition={{ duration: 0.3 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once: true}} className='relative bg-white p-10 rounded-xl text-slate-500 items-center'>
                <h1 className='text-center text-2xl text-neutral-700 font-medium '>{state}</h1>
                <p className='text-sm'>Welcome back! please sign in to continue</p>

                {
                    state !== 'Login' && <div className='border px-6 py-2 mt-6 flex items-center gap-2 rounded-full'>
                    <img className='' src={assets.profile_icon} alt="" width={30}/>
                    <input onChange={e => setName(e.target.value)} value={name} className='outline-none text-sm' type="text" placeholder='full name' required/>
                </div>
                }
                <div className='border px-6 py-2 mt-6 flex items-center gap-2 rounded-full'>
                    <img src={assets.email_icon} alt=""/>
                    <input onChange={e => setEmail(e.target.value)} value={email} className=' outline-none text-sm p-1' type="email" placeholder='Email' required/>
                </div>
                <div className='border px-6 py-2 mt-6 flex items-center gap-2 rounded-full'>
                    <img src={assets.lock_icon} alt="" />
                    <input onChange={e => setPassword(e.target.value)} value={password} className='outline-none text-sm p-1 ' type="password" placeholder='Password' required/>
                </div>

                <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>

                <button className='bg-zinc-800 text-white py-2 px-7 sm:px-10 text-sm rounded-full w-full  '>{state === 'Login' ? 'login' : 'Create Account'}</button>

                {
                    state === 'Login' ? <p className='mt-5 text-center'>Don't Have An Account ? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Sign Up')}>Sign Up</span></p>
                    :
                    <p className='mt-5 text-center'>Allready Have An Account ? <span className='text-blue-600 cursor-pointer' onClick={()=>setState('Login')}>Login</span></p>
                }
                <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} className='absolute top-5 right-5 cursor-pointer' alt="" />
            </motion.form>

        </div>
    )
}

export default Login
