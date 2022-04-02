import {Routes,Route} from "react-router-dom"
import { Host } from '../Become_a_host/Host'
import { LandingPage } from "../LandingPage/LandingPage"
import { NavbarComponent } from "../Flexible/Navbar/NavbarComponent"
import { MyFD } from "../FlexibleDetails/FlexibleDetails";
import { Ukraine } from "../Ukraine/Ukraine";

export const Routers=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        <Route path="/become_a_host" element={<Host/>}/>
        <Route path="/flexible" element={<NavbarComponent/>}/>
        <Route path="/details/:id" element={<MyFD></MyFD>}></Route>
        <Route path="/Support_Ukraine/" element={<Ukraine/>}/>
        </Routes>
        </>
    )
}