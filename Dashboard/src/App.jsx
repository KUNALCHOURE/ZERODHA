import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Home from './components/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Home/>
    </>
  )
}

export default App
