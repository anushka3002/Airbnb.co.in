import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import {Navbar} from "./Components/Navbar/Navbar"
import { LandingPage } from './Components/LandingPage/LandingPage'
import {Footer} from "./Components/Footer/Footer"

// import { MyFD } from './Components/FlexibleDetails/FlexibleDetails'

import { Singup } from './Components/LoginSignup/Signup'
import { Host } from './Components/Become_a_host/Host'

import { CardComponent } from './Components/Places_card/Travel_card'
import { Routers } from './Components/Routers/router'

// import { Display } from './Components/Flexible/Display/Display'
// import { Navbar } from "./Components/Flexible/Navbar/Navbar"
import { Superhost } from "./Components/Superhost/Superhost"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <Card/> */}
      {/* <CardComponent/> */}
      {/* <LandingPage/> */}

      <Routers/>
      {/* <Singup/> */}
      {/* <Host/> */}
      {/* <Footer/> */}

      {/* <MyFD/> */}
      <Footer/>
      

    </div>
  )
}

export default App
