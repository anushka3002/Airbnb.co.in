import "./Filters.css"
import { useState } from "react";

import { FaWarehouse } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';

import { DatePicker } from "../DatePicker/DatePicker"
import { Guests } from "../Guests/Guests";

export const Filters = ({fn})=>{

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

    const filters = ["Farms","Amazing Pools","Beachfront","Offset","Cabins","More"];
    const more_items = ["Tiny Homes","Tree Houses","A Frames","Containers","Castles","Cycladic Homes","Domes"];


    const handleChange = (e)=>{
        fn(e.target.id)
    }

    return (
        <>
            <div className="filters">
            <div className="filter_types">
                {filters.map((e,i)=>(
                    
                    <div className={e} key={i}>
                        {(e=="Farms")?<FaWarehouse size={20}></FaWarehouse>:""}
                        <span id={e} onClick={handleChange}>{e}</span>
                        {(e == "More")?
                        <NavDropdown 
                        id="nav-dropdown">
                            {more_items.map((e,i)=>(
                                <NavDropdown.Item key={i}>
                                    <span id={e} onClick={handleChange}>{e}</span>
                                </NavDropdown.Item>
                            ))}
                      </NavDropdown>:""}
                    </div>
                ))}
            </div>


            <div className="filter_buttons">
                    <button className="filter_button" onClick={handleShow}>
                        Anytime
                        <FaAngleDown></FaAngleDown>
                    </button>
                    <button className="filter_button" onClick={handleGuests}>
                        Guests
                        <FaAngleDown></FaAngleDown>
                    </button>
                    <button className="filter_button">
                        Filters
                        <FaThList size={17}></FaThList>
                    </button>
            </div>
            <Modal show={show} onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            dialogClassName='custom-dialog'
            centered>
                    <div className="yToggle">
                            <span className="yCalendar_toggle" onClick={()=>{
                                setToggle("calendar")
                            }}>Calendar</span>
                            <span className="yCalendar_flexi" onClick={()=>{
                                setToggle("details")
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
                            <button className="filter_button" onClick={handleShow}>
                                Weekend
                            </button>
                            <button className="filter_button">
                                Week
                            </button>
                            <button className="filter_button">
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
        </div>
        
        {guestState && (
            <div className="box">
                <Guests></Guests>
            </div>
        )}
        </>
    )   
}