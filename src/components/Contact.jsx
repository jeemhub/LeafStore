import React from 'react'
import Contactimg from '../assets/contactimg.jpg'
import {motion} from 'framer-motion'
function Contact() {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{furation:0.1}}}
    className='flex justify-center items-center w-full h-screen'>
        <div className='md:flex shadow-md w-5/6 h-4/5 -mt-16 shadow-orange-400 rounded-2xl'>
            <img src={Contactimg} alt="" className='hidden md:block w-3/6 rounded-l-2xl'/>
            <div className='flex flex-col w-full items-center md:items-end justify-start md:p-20 py-5'>
            
                <input className='md:m-5 m-2 md:w-4/5 w-10/12   border-2 border-solid border-orange-200 rounded-lg p-4' type={'text'} placeholder=' الاسم...'></input>
                <input className='md:m-5 m-2 md:w-4/5 w-10/12  border-2 border-solid border-orange-200 rounded-lg p-4' type={'email'} placeholder=' الايميل ...'></input>
                <input className='md:m-5 m-2 md:w-4/5 w-10/12  border-2 border-solid border-orange-200 rounded-lg p-4' type={'text'} placeholder='الرسالة...'></input>
                <button className='text-xl w-4/5 m-4 bg-orange-300 hover:drop-shadow-md font-bold text-white p-5 rounded-3xl hover:border-2 transition-all ease-in duration-100 hover:border-solid hover:border-orange-200 hover:bg-white hover:text-orange-500'>ارسل</button>
            </div>
        </div>
    </motion.div>
  )
}

export default Contact