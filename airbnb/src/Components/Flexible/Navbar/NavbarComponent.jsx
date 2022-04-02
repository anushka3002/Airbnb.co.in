import "./NavbarComponent.css"

import { useState } from "react";
import { FaBars } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa";
import LanguageIcon from "@material-ui/icons/Language";



import { Filters } from "../Filters/Filters";
import { Display } from "../Display/Display";
import { Register } from "../Register/Register";

// import 'bootstrap/dist/css/bootstrap.css';
export const NavbarComponent = ()=>{
    const [filter,setValue] = useState("Farms");
    const [regState,setRegister] = useState(false);

    const handleRegister = ()=>{
        setRegister(!regState)
    }
    const setFilter = (value)=>{
        setValue(value)
    }

    return (
        <>  
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
            integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
            crossorigin="anonymous"></link>
            <div className='yHeader'>
                <img
                        className="yHeader__icon"
                        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                        alt=""
                />
                <div className='yHeader__right'>
                    <span>Become a host</span>
                    <LanguageIcon></LanguageIcon>
                    <div className="yInner_right" onClick={handleRegister}>
                        <FaBars></FaBars>
                        <FaUserCircle size={25}></FaUserCircle>
                    </div>
                </div>
            </div>
            {regState && (
                <Register></Register>
            )}

        <Filters fn={setFilter}></Filters>
        <Display value={filter}></Display>
        </>
        
    )
}