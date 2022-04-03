import { CardComponent } from "../Card/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Register } from "../Register/Register"
// import Link from "react-router-dom"

// import "./display.css"
import styles from "./Display.module.css"
import { Footer } from "../../Footer/Footer";
export const Display = ({value})=>{
    const [data,setData] = useState([]);
    
    useEffect(()=>{ 
        axios.get("https://mysivaji.herokuapp.com/houses").then((res)=>{
            setData(res.data)
        })
    },[])

    return (
        <>  
            <div className={styles.yHome__section}>
                {   data.filter((e)=>{
                    return e['type'] == value
                })
                .map((e,i)=>(
                    <CardComponent key={i} object={e}></CardComponent>
                ))}
            </div>
            <Footer/>                
        </>
    )
}