import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { useState } from 'react'
import Homepage from './landing_page/home/homepage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import Notfound from './landing_page/notfount'
import Aboutus from './landing_page/about/aboutpage'
import Product from './landing_page/products/product'
import Pricing from './landing_page/pricing/pricing'
import Signup from './landing_page/sign_up/signup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Homepage/>}></Route> 
          <Route path='/Aboutus' element={<Aboutus/>}></Route>
          <Route path='/product' element={<Product/>} ></Route>
          <Route path='/pricing' element={<Pricing/>} ></Route>
          <Route path='/signup' element={<Signup/>} ></Route>
          <Route path='*'element={<Notfound/>}></Route>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
