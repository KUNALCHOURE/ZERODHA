import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { useState } from 'react'
import Homepage from './landing_page/home/homepage'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import Notfound from './landing_page/notfount'
import Aboutus from './landing_page/about/aboutpage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Homepage/>}></Route> 
          <Route path='/signup' element={<signup/>}></Route>
          <Route path='/Aboutus' element={<Aboutus/>}></Route>
          <Route path='/product'></Route>
          <Route path='*'element={<Notfound/>}></Route>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
