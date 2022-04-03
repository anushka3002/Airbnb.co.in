// import { useStore } from "react-redux";
import Styles from "./LandingPage.module.css";
import { Hamburger } from "../Hamburger/Hamburger";
import { Register } from "../Flexible/Register/Register";


import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Landing.css"
import { Footer } from "../Footer/Footer";
export const LandingPage =()=>{

    const styles = {
        C1: "a_right_nav",
        C2: "active",        
      }

const [navbar,setNavbar]=useState(false)
const [host_new,setHostNew]=useState(false)
const [air_logo,setLogo]=useState(false)
const [globe,setGlobe]=useState(false)
const [become_host,setBecomeHost]=useState(false)
const [lower_head,setLowerHead]=useState(false)
const [navmiddle,setNavmiddle]=useState(false)
const [scroll_search,setScrollSearch]=useState(false)

const [regState,setRegister] = useState(false);

const handleRegister = ()=>{
    console.log("clicked")
    setRegister(!regState)
}

const changeNavbar=()=>{
    if(window.scrollY>=145){
        setNavbar(true)
        setLogo(true)
        setGlobe(true)
        setBecomeHost(true)
        setLowerHead(true)
        setNavmiddle(true)
        setScrollSearch(true)
        setHostNew(true)
    }
    else{
        setNavbar(false)
        setLogo(false)
        setGlobe(false)
        setBecomeHost(false)
        setLowerHead(false)
        setNavmiddle(false)
        setScrollSearch(false)
        setHostNew(false)
    }
    // console.log(window.scrollY)
}

window.addEventListener("scroll",changeNavbar)

const Navigate=useNavigate();
    return (
        <div className={Styles.abody}>
<Link className={Styles.abody} to={"/"}></Link>
<div className={navbar?"navbar active":"navbar"}>
                <div className={Styles.a_upper_header}>
                    <div style={{marginLeft:"-1%",marginTop:"1%"}}>
                        <div className={air_logo?"logo active":"logo"}></div>
                    </div>
                    <div className={navmiddle?"a_navmiddle active":"a_navmiddle"}>
                        <p>Places to stay</p>
                        <p>Experiences</p>
                        <p>Online Experiences</p>
                    </div>

                    <div className={scroll_search?"after_scroll_search active":"after_scroll_search"}>
                        <p>Start your search</p>
                        <span className="a_search_nav_scroll">
                    <img className="a_search_icon_scroll" src="https://hamariweb.com/names/img/search_light.png" width="15px" height="15px"></img>
                </span>
                    </div>
                    
                    {/* <div className={become_host?"a_right_nav active":"a_right_nav"}> */}
                    <div className={become_host?`${styles.C2} ${styles.C1}`:`${styles.C1}`}>
                    <Link style={{textDecoration:"none"}} to={'/become_a_host'}><p className={lower_head?"host_decoration active":"host_decoration"}>Become a host</p></Link>
                    <div className={globe?"globe_logo active":"globe_logo"}></div>
                    <Hamburger/>
                    </div>
            </div>

            <div className={lower_head?"a_lower_header active":"a_lower_header"}>
                <div id="a_location_nav">
                    <p>Location</p>
                    <p>Where are you going?</p>
                </div>
                <div>
                    <p>Check in</p>
                    <p>Add dates</p>
                </div>
                <div>
                <p>Check out</p>
                    <p>Add dates</p>
                </div>
                <div>
                <p>Guests</p>
                    <p>Add guests</p>
                </div>
                <span className="a_search_nav">
                    <img className="a_search_icon" src="https://hamariweb.com/names/img/search_light.png" width="20px" height="20px"></img>
                </span>
            </div>
            </div>

            <div className={Styles.ablack}>
                <div className={Styles.ared}>
                    <div className={Styles.ared_text}>
                    <p className={Styles.ahelp}>Help house 100,000 refugees fleeing Ukraine</p>
                    <Link to={"/Support_Ukraine"}><button className={Styles.alearnmore}>Learn more</button></Link>
                </div></div>

            <div className={Styles.ahome}>
                <div className={Styles.a_home_text_container}>
                <p className={Styles.a_home_text}>Let your curiosity do the booking</p>
                </div>
                <Link style={{textDecoration:"none"}} to={"./flexible"}><div className={Styles.aflexible}><h4 id={Styles.aflextext}>I'm flexible</h4></div></Link>
            </div></div>

        <div className={Styles.places_card_container}>
            <p className={Styles.ainspiration}>Inspiration for your next trip</p>
            <div className={Styles.aplaces_cards}>
                <div className={Styles.place_individual_card}>
                    <img className={Styles.a_scenery_image} src="https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#bc1a6e"}} className={Styles.a_card_color}>
                        <p className={Styles.a_places_title}>Mussoorie</p>
                        <p className={Styles.a_place_distance}>223 kilometers away</p>
                    </div>
                </div>
                <div className={Styles.place_individual_card}>
                <img className={Styles.a_scenery_image} src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#cc2d4a"}} className={Styles.a_card_color}>
                        <p className={Styles.a_places_title}>Manali</p>
                        <p className={Styles.a_place_distance}>405 kilometers away</p>
                    </div>
                </div>
                <div className={Styles.place_individual_card}>
                <img className={Styles.a_scenery_image} src="https://a0.muscache.com/im/pictures/57d3fdbd-9dde-4b6f-98af-64d38d6ffd02.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#d93b30"}} className={Styles.a_card_color}>
                        <p className={Styles.a_places_title}>Kasauli</p>
                        <p className={Styles.a_place_distance}>257 kilometers away</p>
                    </div>
                </div>
                <div className={Styles.place_individual_card}>
                <img className={Styles.a_scenery_image} src="https://a0.muscache.com/im/pictures/cccdc2e6-e6dc-4706-b9d4-ee2a80115703.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#de3151"}} className={Styles.a_card_color}>
                        <p className={Styles.a_places_title}>Haldwani</p>
                        <p className={Styles.a_place_distance}>235 kilometers away</p>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <p className={Styles.adiscover}>Discover Airbnb Experiences</p>
            <div className={Styles.a_discover_images}>
                <div className={Styles.a_image_left}>
                    <p className={Styles.a_discover_title}>Things to do on your trip</p>
                    <button className={Styles.a_discover_button}>Experiences</button>
                </div>
                <div className={Styles.a_image_right}>
                    <p className={Styles.a_discover_title}>Things to do from home</p>
                    <button className={Styles.a_discover_button}>Online Experiences</button>
                </div>
            </div>
        </div>

        <div className={Styles.a_last_woman_image}>
            <div className={Styles.a_hosting_image}>
                <p className={Styles.a_questions_hosting}>Questions about hosting?</p>
                <button className={Styles.a_superhost_button}  onClick= {
                    ()=>{
                        Navigate("/superhost")
                    }
                }>Ask a Superhost</button>
            </div>
        </div>

<Footer/>
        </div>
    )
}