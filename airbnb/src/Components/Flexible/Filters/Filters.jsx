import "./Filters.css"
import { FaWarehouse } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.css';

export const Filters = ()=>{
    const filters = ["Farms","Amazing Pools","Beachfront","Offset","Cabins","More"];
    const items = ["Tiny Homes","Tree Houses","A Frames","Containers","Castles","Cycladic Homes","Domes"];
    return (
        <div className="filters">
            <div className="filter_types">
                {filters.map((e,i)=>(
                    
                    <div className={e} key={i}>
                        {(e=="Farms")?<FaWarehouse size={20}></FaWarehouse>:""}
                        <span>{e}</span>
                        {(e == "More")?
                        <NavDropdown 
                        id="nav-dropdown">
                            {items.map((e,i)=>(
                                <NavDropdown.Item key={i}>{e}</NavDropdown.Item>
                            ))}
                      </NavDropdown>:""}
                    </div>
                ))}
            </div>
            <div className="filter_buttons">
                    <button className="filter_button">
                        Anytime
                        <FaAngleDown></FaAngleDown>
                    </button>
                    <button className="filter_button">
                        Guests
                        <FaAngleDown></FaAngleDown>
                    </button>
                    <button className="filter_button">
                        Filters
                        <FaThList size={17}></FaThList>
                    </button>
            </div>

        </div>
    )   
}