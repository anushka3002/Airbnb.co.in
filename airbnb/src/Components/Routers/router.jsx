import {Routes,Route} from "react-router-dom"
import { Host } from '../Become_a_host/Host'
import { LandingPage } from "../LandingPage/LandingPage"
import {NavbarComponent} from "../Flexible/Navbar/NavbarComponent"
import { Superhost } from "../Superhost/Superhost";
import {Ukraine} from "../Ukraine/Ukraine";
import {MyFD} from "../FlexibleDetails/FlexibleDetails"

import {Payment} from "../Payment/Payment"
import { Checkout } from "../Payment/Checkout"
import { Card } from "../Payment/Card"
import { Thank } from "../Payment/Thank"


export const Routers=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        <Route path="/become_a_host" element={<Host/>}/>
        <Route path="/flexible" element={<NavbarComponent/>}/>
        <Route path="/superhost" element={<Superhost/>}/>
        <Route path="/Support_Ukraine" element={<Ukraine/>}/>
        <Route path="/details/:id" element={<MyFD/>}/>
        </Routes>
        </>
    )
}