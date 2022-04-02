import {Routes,Route} from "react-router-dom"
import { Host } from '../Become_a_host/Host'
import { LandingPage } from "../LandingPage/LandingPage"
<<<<<<< HEAD
// import {Navbar} from "../Flexible/Navbar/Navbar"
import { Superhost } from "../Superhost/Superhost"
=======
import { NavbarComponent } from "../Flexible/Navbar/NavbarComponent"
import { MyFD } from "../FlexibleDetails/FlexibleDetails";
import { Ukraine } from "../Ukraine/Ukraine";
>>>>>>> 8019e7af934f9db7a86ae4dc9dc8421961bb1c3a

export const Routers=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        <Route path="/become_a_host" element={<Host/>}/>
<<<<<<< HEAD
        {/* <Route path="/flexible" element={<Navbar/>}/> */}
        <Route path="/superhost" element={<Superhost/>}/>
=======
        <Route path="/flexible" element={<NavbarComponent/>}/>
        <Route path="/details/:id" element={<MyFD></MyFD>}></Route>
        <Route path="/Support_Ukraine/" element={<Ukraine/>}/>
>>>>>>> 8019e7af934f9db7a86ae4dc9dc8421961bb1c3a
        </Routes>
        </>
    )
}