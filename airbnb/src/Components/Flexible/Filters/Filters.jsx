import "./Filters.css"
import { useState } from "react";

import { FaWarehouse } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";

import { NavDropdown } from "react-bootstrap";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import Switch from '@mui/material/Switch';

import { DatePicker } from "../DatePicker/DatePicker"
import { Guests } from "../Guests/Guests";
import { CustomizedSlider } from "../AirbnbSlider/Slider"
import { Counter } from "../Counter/Counter";
import { Checkbox } from "../Checkbox/Checkbox";

export const Filters = ({fn})=>{

    const check_list = [
        {
            "Accessibility features":[
                "Step-free guest entrance",
                "Guest entrance wider than 32 inches (81 centimetres)",
                "Accessible parking spot",
                "Step-free path to the guest entrance"
                ]
        }
        ,
        {   
            "Amenities":[
                "Kitchen",
                "Heating",
                "Air Conditioning",
                "Washing Machine"
            ]
        }
        ,
        {
            "Facilities":[
                "Free Parking",
                "Gym",
                "Hot tub",
                "Pool"
            ]
        }
        ,
        {
            "House Rules":[
                "Smoking Allowed"
            ]
        }
        ,
        {
            "Host Language":[
                "English",
                "French",
                "German",
                "Japanese"
            ]
        }
    ]

    const type_places = {
        "Type of place":["Entire Place","Private Room","Hotel Room","Shared room"]
    }




    function getMonthNames(date = new Date()) {
        let d = new Date(+date);
        d.setDate(1);
        let result = [];
        for (let i=0; i<12; i++) {
            result.push(d.toLocaleString('default',{month:'long'}));
            d.setMonth(d.getMonth() + 1);
        }
        return result;
    }
      
    const months = getMonthNames();

    // Toggle Functionality.
    const [toggle,setToggle] = useState("details");
    

    // Pop Up Functionality
    const [show,setShow] = useState(false);
    const handleClose = ()=>{
        setShow(false)
    }
    const handleShow = ()=>{
        setShow(true)
    }


    // Guests PopUp.
    const [guestState,setGuest] = useState(false);
    const handleGuests = ()=>{
        setGuest(!guestState)
    }

    // Filters PopUp.
    const [filtersPopup,setFilters] = useState(false);
    const handleFilters = ()=>{
        setFilters(!filtersPopup)
    }

    const closeFilters = ()=>{
        setFilters(false)
    }
    
    const filters = ["Farms","Amazing Pools","Beachfront","Offset","Cabins","More"];
    const more_items = ["Tiny Homes","Tree Houses","A Frames","Containers","Castles","Cycladic Homes","Domes"];


    const handleChange = (e)=>{
        setActive(e.target.id)
        fn(e.target.id)
    }

    const handleChange1 = (e)=>{
        setMore(e.target.id)
        fn(e.target.id)
    }

    const [activeItem,setActive] = useState("");
    const [more,setMore] = useState("More");

    const [toggleSelect,setSelected] = useState("I'm Flexible");
    return (
        <>  
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <div className="yFilters">
            <div className="yFilter_types">
                {filters.map((e,i)=>(
                    
                    <div className={e} key={i}>
                        {(e=="Farms")?<FaWarehouse size={20}></FaWarehouse>:""}
                        <span id={e} 
                        className={activeItem == e?"selected":""}
                        onClick={handleChange}>{(e == "More"?more:e)}</span>
                        {(e == "More")?
                        <NavDropdown 
                        id="nav-dropdown">
                            {more_items.map((e1,i)=>(
                                <NavDropdown.Item key={i}>
                                    <span id={e1} onClick={handleChange1}>{e1}</span>
                                </NavDropdown.Item>
                            ))}
                      </NavDropdown>:""}
                    </div>
                ))}
            </div>
            <div className="yFilter_buttons">
                    <button className="yFilter_button" onClick={handleShow}>
                        Anytime
                        <FaAngleDown></FaAngleDown>
                    </button>
                    <button className="yFilter_button" onClick={handleGuests}>
                        Guests
                        <FaAngleDown></FaAngleDown>
                    </button>
                    <button className="yFilter_button" onClick={setFilters}>
                        Filters
                        {/* <FaThList size={17}></FaThList> */}
                        <FaSlidersH size={17}></FaSlidersH>
                    </button>
            </div>
            <Modal show={show} onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName='custom-dialog'
            centered>
                    <div className="yToggle">
                            <span className={toggleSelect == "Calendar"?"toggle_selected":""} onClick={()=>{
                                setToggle("calendar")
                                setSelected("Calendar")
                            }}>Calendar</span>
                            <span className={toggleSelect == "I'm Flexible"?"toggle_selected":""} onClick={()=>{
                                setToggle("details")
                                setSelected("I'm Flexible")
                            }}>I'm flexible</span>
                    </div> 
                    {
                        toggle == "calendar" && (
                            <div className="yPick_date">
                                <DatePicker></DatePicker>
                            </div>
                        )
                    } 

                    {
                        toggle == "details" && (
                            <>
                                <div className="yDates">
                        How long would you like to stay?    
                        <div className="yDate_buttons">
                            <button className="yFilter_button" onClick={handleShow}>
                                Weekend
                            </button>
                            <button className="yFilter_button">
                                Week
                            </button>
                            <button className="yFilter_button">
                                Month
                            </button>
                        </div>
                    </div> 

                    <div className="yCalendar_div">
                        <span>Where do you want to go?</span>
                        <div className="yCalendars">
                                {months.map((e,i)=>(
                                    <div className="yCalendar">
                                        <CalendarTodayIcon fontSize="large"></CalendarTodayIcon>
                                        <p>{e}</p>
                                        <p>2022</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                            </>
                        )
                    }
                                    
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Save
                    </Button>
                    </Modal.Footer>
            </Modal>
                
            <Modal show={filtersPopup} onHide={closeFilters}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            contentClassName="my-modal"
            dialogClassName="my-modal_1"
            >
                    <Modal.Header closeButton>
                        <div className="yFilter_header">
                            <span>
                                <b>More Filters</b>
                            </span>    
                        </div> 
                    </Modal.Header>     

                    <Modal.Body>
                        <Checkbox object={type_places}></Checkbox>
                        <hr />
                    </Modal.Body>

                    <Modal.Body>
                    <div className="yFilter_body">
                        <span className="yPrice_range">Price Range</span>
                        <div className="ySlider">
                            <CustomizedSlider></CustomizedSlider>
                        </div>
                    </div>     
                    <hr />
                    </Modal.Body>  

                    <Modal.Body>
                    <div className="yFilter_body">
                        <div className="yBody_content">
                            <div>
                                <p>Instant Book</p>
                                <p>Listings you can book without waiting for host approval</p>
                            </div>
                            <Switch
                            inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </div>     
                    <hr />
                    </Modal.Body>  

                    <Modal.Body>
                    <div className="yFilter_body">
                        <span className="yPrice_range">Price Range</span>
                        <div className="ySlider">
                            <CustomizedSlider></CustomizedSlider>
                        </div>
                    </div>     
                    <hr />
                    </Modal.Body>  

                    <Modal.Body>
                        <b>Rooms and beds</b>
                        <div className="yRooms">
                            <div className="yRoom">
                                Beds
                                <Counter></Counter>
                            </div>
                            <div className="yRoom">
                                Bedrooms
                                <Counter></Counter>
                            </div>
                            <div className="yRoom">
                                Bathrooms
                                <Counter></Counter>
                            </div>
                            
                        </div>
                        <hr />
                    </Modal.Body>

                    <Modal.Body>
                    <b>More Options</b>
                    <div className="yFilter_body">
                        <div className="yBody_content">
                            <div>
                                <p>Super Host</p>
                                <p>Stay with recognized hosts</p>
                                <a href="" className="yLinks">Learn More</a>
                            </div>
                            <Switch
                            inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </div>
                    </div>     
                    <hr />
                    </Modal.Body> 
                    
                 {check_list.map((e,i)=>(
                        <Modal.Body>
                        <Checkbox object={e}></Checkbox>
                        <a className="yLinks" href="*">{`Show all ${Object.keys(e)}`}</a>
                        <hr />
                        </Modal.Body>
                    ))} 

                    <Modal.Footer>
                    <Button variant="secondary" onClick={closeFilters}>
                        Save
                    </Button>
                    </Modal.Footer>
            </Modal>

        </div>
        
        {guestState && (
            <div className="box">
                <Guests></Guests>
            </div>
        )}
        </>
    )   
}