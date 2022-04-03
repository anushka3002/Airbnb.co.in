import Styles from "./Hamburger.module.css"
import { Register } from "../Flexible/Register/Register";
import { useState } from "react";

export const Hamburger=()=>{

    const [regState,setRegister] = useState(false);
    const handleRegister = ()=>{
        setRegister(!regState)
    }
    return(
        <>
        <div className={Styles.a_hamburger} onClick={handleRegister}>
            <div>
                <img style={{paddingTop:"10px",marginLeft:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2qzjGHx362VfxQWKWwi2GCEoyqUnsRIm9jEF2oIlWx6Z76KjowacdQTq8s4UfonUSnA&usqp=CAU" width="20px"></img>
            </div>
            <div>
                <img style={{borderRadius:"50%"}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" width="39px" height="36px"></img>
            </div>
        </div>
        </>
        
    )
}