import { useState } from 'react'
import MyNavbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-100 text-center fs-1'> 
      <MyNavbar />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
