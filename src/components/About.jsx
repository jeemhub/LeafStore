import React from 'react'
import Aboutimg from '../assets/Aboutimg.jpg'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
function About() {
  return (
    <motion.div 
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{furation:0.1}}}
    className='flex flex-col md:flex-row-reverse items-center md:justify-center w-full h-screen md:-mt-20 '>
   
        <img src={Aboutimg} className='md:w-3/6 w-full md:h-3/6 md:rounded-xl md:drop-shadow-2xl' alt="" />
    
    	<div className='flex flex-col md:mr-20 items-center md:items-end'>
            <h1 className='md:text-6xl text-4xl mb-6 font-bold md:my-6 my-3'>حول</h1>
            <p className='md:text-xl text-md mb-1 md:mt-3 md:mb-3'>شركة مختصة بكل ما يتعلق بالقهوة العراقية <span className='font-bold'>Leaf Store</span> </p>
            <p className='md:text-xl text-md mb-1  md:mb-6'>  تأسست سنة 1998 وتم اختيار العاصمة بغداد مقرا لنا</p>
            <div className='flex md:flex-row-reverse flex-col justify-center items-center'>
            <button className=' mt-4 text-xl md:ml-3 bg-orange-500 hover:drop-shadow-md font-bold text-white p-5 rounded-3xl hover:border-2 transition-all ease-in duration-100 hover:border-solid hover:border-orange-500 hover:bg-white hover:text-orange-500'><Link to="/Contact">تواصل معنا</Link> </button>
                <div className='mt-3 md:mt-0'><Link to="/Product" className='font-bold text-orange-500 '>اطلب قهوتك الان</Link></div>
            </div>
      
        </div>

    </motion.div>
  )
}

export default About