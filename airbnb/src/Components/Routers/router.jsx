import {Routes,Route} from "react-router-dom"
import { Host } from '../Become_a_host/Host'
import { LandingPage } from "../LandingPage/LandingPage"
import { NavbarComponent } from "../Flexible/Navbar/NavbarComponent"
import { MyFD } from "../FlexibleDetails/FlexibleDetails";

export const Routers=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        <Route path="/become_a_host" element={<Host/>}/>
        <Route path="/flexible" element={<NavbarComponent/>}/>
        <Route path="/details/:id" element={<MyFD/>}></Route>
        <Route path="/payment"></Route>
        </Routes>
        </>
    )
}