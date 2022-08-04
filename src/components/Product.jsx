import React from 'react'
import Cards from './Cards'
import Products from './Products'
import { motion } from 'framer-motion';
import { useState } from 'react';
    function Product() {
        const [search, setsearch] = useState('');
        return (
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                exit={{ x: window.innerWidth, transition: { furation: 0.1 } }}
                className='flex flex-col w-full h-screen items-center p-6'>


                <label className="relative block md:w-7/12">

                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <ion-icon name="search-outline"></ion-icon>
                    </span>
                    <input onChange={(e)=>setsearch(e.target.value)} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="...ابحث عن شيء" type="text" name="search" />
                </label>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4 h-screen md:w-7/12 '>
                        {
                            Products.filter(product=>product.title.toLowerCase().includes(search)).map(product=>(
                                <Cards key={product.id} title={product.title} p={product.P} price={product.price} img={product.img}></Cards>
                            ))
                        }
                   


                </div>


            </motion.div>
        )
    }

export default Product