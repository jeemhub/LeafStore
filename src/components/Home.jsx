import React from 'react'
import homecoffe from '../assets/homephoto.jpg'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';


//homecoffe
function Home() {
  
    

  
    
    return (
        <motion.div 
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x:window.innerWidth,transition:{furation:0.1}}}
        className='w-full h-screen flex flex-col md:flex-row md:justify-between items-center md:px-10 py-10 md:-mt-20'>
            <div className='md:w-3/12 w-8/12 mb-8 md:mb-0  md:ml-20 z-10 drop-shadow-2xl'>
                <img src={homecoffe} alt="" className='rounded-xl z-30'/> 
            </div>
            <div className='flex flex-col md:mr-20 items-center md:items-end'>
                <h1 className='md:text-6xl text-4xl font-bold md:my-6 my-3'>ابدأ يومك بكوب قهوة</h1>
                <p className='md:text-xl text-lg mb-5 md:mt-3 md:mb-6'>داكنة اللون صنعت لتمنح الصباح دلاله</p>
                <button className='text-xl bg-orange-500 hover:drop-shadow-md font-bold text-white p-5 rounded-3xl hover:border-2 transition-all ease-in duration-100 hover:border-solid hover:border-orange-500 hover:bg-white hover:text-orange-500'><Link to="/Product">اطلب قهوتك الان</Link></button>
         

            </div>
            
        
        </motion.div>
    )
}

export default Home