import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import ReqCard from './ReqCard'
import { useState,useEffect } from 'react'
import {motion} from 'framer-motion'
function Req() {
    const product = useSelector((state) => state.product.productSlice)
    const total=(product)=>{
        var t=0;
        for(let i=0;i<product.length;i++){
           t=t+ +product[i].price
        }
        return t;
    }
    return (
        <div className='flex flex-col w-full h-screen items-center p-6'>
            <motion.div 
            initial={{x:300 ,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{type:'spring',duration:1}}
            className='bg-gray-800 text-white text-base flex justify-around p-2 m-1 rounded-md h-auto w-full md:w-7/12'>
                <div>المجموع</div>
                <div>{total(product)}$</div>
            </motion.div>
            <motion.button 
             initial={{x:-300 ,opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{type:'spring',duration:0.5}}
            className='bg-green-700 p-2 text-xl font-sans font-bold text-white rounded-md w-full cursor-pointer md:w-7/12'><Link to="/Send"> طلب</Link></motion.button>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-4 h-screen md:w-7/12 '>
            {product.map((el,i)=>{
                    return(
                        <ReqCard key={i} title={el.title} p={el.p} price={el.price} img={el.img}></ReqCard>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Req