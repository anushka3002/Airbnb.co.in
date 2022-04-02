import {Routes,Route} from "react-router-dom"
import { Host } from '../Become_a_host/Host'
// import { Display } from "../Flexible/Display/Display"
import { LandingPage } from "../LandingPage/LandingPage"
// import {Navbar} from "../Flexible/Navbar/Navbar"

export const Routers=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        <Route path="/become_a_host" element={<Host/>}/>
        {/* <Route path="/flexible" element={<Navbar/>}/> */}
        </Routes>
        </>
    )
}