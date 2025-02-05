import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext';

const Result = () => {
  const[image, setImage] = useState(assets.sample_img_1);
  const[isImageLoaded, setIsImageLoaded] = useState(false);
  const[loading, setLoading] = useState(false);
  const[input, setInput] = useState('');
  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) => {

    e.preventDefault()
    setLoading(true)

    if (input) {
      const image  = await generateImage(input)
      if (image) {
        setIsImageLoaded(true)
        setImage(image)
        
      }
      
    }
    setLoading(false)

  }
  return (
    <motion.form initial={{ opacity: 0.2, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once: true}} onSubmit={onSubmitHandler} className='flex flex-col justify-center items-center min-h-[90vh]'>
    <div>
     <div className='relative'>
      <img src={image} alt="" className='rounded max-w-sm ' />

      <span className={`absolute bottom-0 left-0 h-1 bg-blue-600 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0' }`}/>

     </div>
     <p  className={!loading ? 'hidden' : ''}>Loading.....</p>
    </div>
    {
    !isImageLoaded && 
    <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full'>
    <input onChange={e => setInput(e.target.value)} value={input} className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color' type="text" placeholder='Describe What You Want You Generate' />
    <button className='bg-zinc-900 px-10 py-3 sm:px-16 rounded-full' type='submit'>Generate</button>
  </div>
  }
    

{isImageLoaded &&

    <div className='flex flex-wrap gap-2 justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={()=>{setIsImageLoaded(false)}} className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
      <a download className='bg-zinc-900 cursor-pointer rounded-full px-10 py-3 ' href={image}>Download</a>
    </div>
}
    </motion.form>

  )
}

export default Result
