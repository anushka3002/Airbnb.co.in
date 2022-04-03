import styles from "./Thanks.module.css"

import { useNavigate } from "react-router-dom";

export const Thank = ()=>{
    const navigate= useNavigate()
    return (
        <div>
           

            <div id={styles.sthanks} onClick = {
                ()=>{
                    navigate("/")
                }
            }>
            <div id ={styles.sbooking}>
               <div id ={styles.sconfir}><p >your booking is confirmed</p>
               <p>Thanks for choosing us !!!!!</p>
               </div> 
            </div>
            </div>
        </div>
    )
}