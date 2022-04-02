// import "./Navbar.css"

// import { useState } from "react";
// import { FaBars } from "react-icons/fa"
// import { FaUserCircle } from "react-icons/fa";
// import LanguageIcon from "@material-ui/icons/Language";



// import { Filters } from "../Filters/Filters";
// import { Display } from "../Display/Display";

// import 'bootstrap/dist/css/bootstrap.css';
// export const Navbar = ()=>{
//     const [filter,setValue] = useState("Farms");
//     const setFilter = (value)=>{
//         setValue(value)
//     }

//     return (
//         <>
//             <div className='header'>
//                 <img
//                         className="header__icon"
//                         src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
//                         alt=""
//                 />
//                 <div className='header__right'>
//                     <span>Become a host</span>
//                     <LanguageIcon></LanguageIcon>
//                     <div className="inner_right">
//                     <FaBars></FaBars>
//                     <FaUserCircle size={25}></FaUserCircle>
//                     </div>
//                 </div>
//             </div>

//         <Filters fn={setFilter}></Filters>
//         <Display value={filter}></Display>
//         </>
        
//     )
// }