import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import {Navbar} from "./Components/Navbar/Navbar"
import { Navbar } from "./Components/Flexible/Navbar/Navbar"
import { LandingPage } from './Components/LandingPage/LandingPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      {/* <LandingPage/> */}
    </div>
  )
}

export default App
