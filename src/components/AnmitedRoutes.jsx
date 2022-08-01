import React from 'react'
import { useLocation } from 'react-router-dom'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home'
import About from './About'
import Product from './Product'
import Contact from './Contact'
import Req from './Req';
import Send from './Send';
import {AnimatePresence} from 'framer-motion'
function AnmitedRoutes() {
  const location =useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Product' element={<Product/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/Req' element={<Req/>}/>
              <Route path='/Send' element={<Send/>}/>
           </Routes>
     </AnimatePresence>
  )
}

export default AnmitedRoutes