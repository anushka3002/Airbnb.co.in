import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import {Navbar} from "./Components/Navbar/Navbar"
import { LandingPage } from './Components/LandingPage/LandingPage'
import {Footer} from "./Components/Footer/Footer"
import { MyFD } from './Components/FlexibleDetails/FlexibleDetails'
// import { Display } from './Components/Flexible/Display/Display'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <LandingPage/> */}
      <MyFD/>
      <Footer/>
    </div>
  )
}

export default App
