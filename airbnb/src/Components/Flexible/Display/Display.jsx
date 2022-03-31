import { CardComponent } from "../Card/Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// import "./display.css"
import styles from "./Display.module.css"
export const Display = ({value})=>{
    const [data,setData] = useState([]);
    
    useEffect(()=>{ 
        axios.get("http://localhost:8080/houses").then((res)=>{
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
        </>
    )
}