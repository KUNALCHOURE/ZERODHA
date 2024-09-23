
import { useState } from 'react'
import Homepage from './landing_page/home/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
    </>
  )
}

export default App
