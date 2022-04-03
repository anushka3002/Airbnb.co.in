import "./NavbarComponent.css"

import { useEffect, useState } from "react";
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

    const [profilePic,setPic] = useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg")


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
                    {/* <LanguageIcon></LanguageIcon> */}
                    <img src="https://cdn1.iconfinder.com/data/icons/ui-next-2020-shopping-and-e-commerce-1/12/75_globe-512.png" width="15px"></img>
                    <div className="yInner_right" onClick={handleRegister}>
                    <div className="a_hamburger">
                        <div>
                            <img style={{paddingTop:"10px",marginLeft:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2qzjGHx362VfxQWKWwi2GCEoyqUnsRIm9jEF2oIlWx6Z76KjowacdQTq8s4UfonUSnA&usqp=CAU" width="20px"></img>
                        </div>
                        <div>
                            <img style={{borderRadius:"50%"}} src={profilePic} width="39px" height="36px"></img>
                        </div>
                    </div>
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