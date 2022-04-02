import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import {Navbar} from "./Components/Navbar/Navbar"
import { LandingPage } from './Components/LandingPage/LandingPage'
import {Footer} from "./Components/Footer/Footer"
<<<<<<< HEAD
import { MyFD } from './Components/FlexibleDetails/FlexibleDetails'
=======
import { Singup } from './Components/LoginSignup/Signup'
import { Host } from './Components/Become_a_host/Host'
>>>>>>> 15d833d77b67849b0ed332ac943145ea7a6c5300
// import { Display } from './Components/Flexible/Display/Display'
import { Navbar } from "./Components/Flexible/Navbar/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <LandingPage/> */}
<<<<<<< HEAD
      <MyFD/>
      <Footer/>
=======
      {/* <Singup/> */}
      <Host/>
      {/* <Footer/> */}
>>>>>>> 15d833d77b67849b0ed332ac943145ea7a6c5300
    </div>
  )
}

export default App
