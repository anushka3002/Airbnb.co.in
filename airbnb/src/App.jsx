import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
// import { LandingPage } from './Components/LandingPage/LandingPage'
// import {Footer} from "./Components/Footer/footer"
// import {Payment} from "./Components/Payment/Payment"


// import { MyFD } from './Components/FlexibleDetails/FlexibleDetails'

// import { Singup } from './Components/LoginSignup/Signup'
// import { Host } from './Components/Become_a_host/Host'

// import { CardComponent } from './Components/Places_card/Travel_card'
import { Routers } from './Components/Routers/router'
// import { Ukraine } from './Components/Ukraine/Ukraine'
// import {Google_auth} from "./Components/LoginSignup/Google_auth"

// <<<<<<< HEAD
// import { Display } from './Components/Flexible/Display/Display'
// import { Navbar } from "./Components/Flexible/Navbar/Navbar"
// import { Superhost } from "./Components/Superhost/Superhost"
// =======
// >>>>>>> 8019e7af934f9db7a86ae4dc9dc8421961bb1c3a

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routers/>
      {/* <Singup/> */}
      {/* <Payment/> */}

    </div>
  )
}

export default App
