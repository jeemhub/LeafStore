import React from 'react'
import { Link } from "react-router-dom";
import { useState ,useEffect} from 'react';
import { useSelector, } from 'react-redux'

function Nav() {
    const count=useSelector((state)=>state.product.count)
    const [open, setopen] = useState(false);
  //  const [after,setafter]=useState(0);
   
    return (
        <div className={`shadow-md w-full sticky z-10 top-0 left-0 ${open ? 'h-30px' : ''} flex flex-col items-start md:flex-row md:justify-between bg-white py-4 `}>
                <div className='font-bold  text-2xl cursor-pointer flex items-center  font-[poppind] px-3'>
                    <div  className='bg-red-600 rounded-full text-white p-1 text-sm mb-5 translate-x-2 h-6'>{count}</div>
                    <span className={`text-3xl pr-2  after:text-sm`}><Link to="/Req"> <ion-icon name="basket-outline"></ion-icon></Link></span>
                    Leaf Store
                </div>
                <ul className={`md:flex px-3 md:items-center top-20  ml-10 md:static transition-all  duration-500 ease-in opacity-0 md:opacity-100 
                ${open ? `opacity-100` : `opacity-0 hidden`}`}>
                    <li onClick={() => { setopen(!open) }} className='py-2 md:px-2'><Link to="/">الصفحة الرئيسية</Link></li>
                    <li onClick={() => { setopen(!open) }} className='py-2 md:px-2'><Link to="/About">حول</Link></li>
                    <li onClick={() => { setopen(!open) }} className='py-2 md:px-2'><Link to="/Product">المنتجات</Link></li>
                    <li onClick={() => { setopen(!open) }} className='py-2 md:px-2'><Link to="/Contact">تواصل</Link></li>
                </ul>

            <button className='md:hidden text-3xl  right-8 top-4 cursor-pointer absolute  '
                onClick={() => { setopen(!open) }}>
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
            </button>





        </div>
    )
}

export default Nav