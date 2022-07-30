import React from 'react'
import a1 from '../assets/Productimg/Cafe-Worthy-Mugs.jpg'
import a2 from '../assets/Productimg/Carafe.jpg'
import a3 from '../assets/Productimg/Chemex.jpg'
import a4 from '../assets/Productimg/Cuisinart-Automatic-Burr-Mil.jpg'
import a5 from '../assets/Productimg/Drip-Coffee-Maker.jpg'
import a6 from '../assets/Productimg/Espresso-Maker.jpg'
import a7 from '../assets/Productimg/homephoto.jpg'
import a8 from '../assets/Productimg/Reusable-K-Cups.jpg'
import a9 from '../assets/Productimg/Simpli-Press-French-Press.jpg'
import Cards from './Cards'
import {motion} from 'framer-motion'
function Product() {
    return (
        <motion.div 
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x:window.innerWidth,transition:{furation:0.1}}}
        className='flex flex-col w-full h-screen items-center p-6'>


            <label className="relative block md:w-7/12">

                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <ion-icon name="search-outline"></ion-icon>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="...ابحث عن شيء" type="text" name="search" />
            </label>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-4 h-screen md:w-7/12 '>
          
                <Cards title={'Cafe-Worthy Mugs'} p={'What you’re drinking out of matters almost as much as what you’re drinking.'} price={'59$'} img={a1}></Cards>
                <Cards title={'Carafe'} p={'Fancy coffee carafes aren’t just for hotels and restaurants'} price={'59$'} img={a2}></Cards>
                <Cards title={'Chemex'} p={'Serious aficionados swear that using a Chemex is the purest method '} price={'59$'} img={a3}></Cards>
                <Cards title={'Burr Grinder'} p={'Baristas attest that one of the keys to a great cup of coffee is the grinder'} price={'59$'} img={a4}></Cards>
                <Cards title={'Drip Coffee Maker'} p={'aThis Mr. Coffee coffee maker is the best value drip machine'} price={'59$'} img={a5}></Cards>
                <Cards title={'Espresso Maker'} p={'Perfect for coffee experts and for espresso-loving newbies, this Breville Bambino '} price={'59$'} img={a6}></Cards>
                <Cards title={'Whole Bean Coffee'} p={'For coffee as rich and flavorful as what you’d get in your local cafe'} price={'59$'} img={a7}></Cards>
                <Cards title={'Reusable K-Cups'} p={'Reusable K-Cups are your answer to enjoying the easy convenience of Keurig single '} price={'59$'} img={a8}></Cards>
                <Cards title={'French Press'} p={'A French press is one of the easiest ways to make a rich cup of coffee at home. '} price={'59$'} img={a9}></Cards>
            </div>


        </motion.div>
    )
}

export default Product