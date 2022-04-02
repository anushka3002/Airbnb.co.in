import {Routes,Route} from "react-router-dom"
import { Host } from '../Become_a_host/Host'
import { LandingPage } from "../LandingPage/LandingPage"

export const Routers=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
        <Route path="/become_a_host" element={<Host/>}/>
        </Routes>
        </>
    )
}