import Styles from "./Hamburger.module.css"


export const Hamburger=()=>{
    return(
        <div className={Styles.a_hamburger}>
            <div>
                <img style={{paddingTop:"10px",marginLeft:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2qzjGHx362VfxQWKWwi2GCEoyqUnsRIm9jEF2oIlWx6Z76KjowacdQTq8s4UfonUSnA&usqp=CAU" width="20px"></img>
            </div>
            <div>
                <img style={{borderRadius:"50%"}} src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg" width="39px" height="36px"></img>
            </div>
            {/* <div className="dropdown">
                <ul>
                    <li>Sign up</li>
                    <li>Login</li>
                    <li>Experiences</li>
                    <li>Places</li>
                    <li>Online Experiences</li>
                </ul>
            </div> */}
        </div>
    )
}