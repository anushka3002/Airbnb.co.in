import { useState } from "react";
import styles from "./Counter.module.css"

export const Counter = ()=>{
    const [counter,setCounter] = useState(0);

    const handleChange = (value)=>{
        setCounter(counter+value)
    }

    return(
        <>  
            <div className={styles.yCounter}>
                <button className={styles.btn} onClick={()=>{
                    if(counter>=1){
                        handleChange(-1)
                    }
                }}>
                    -
                </button>

                <span className={styles.counterValue}>
                    {counter}
                </span>

                <button className={styles.btn} onClick={()=>{
                    handleChange(1)
                }}>
                    +
                </button>
            </div>
        </>
    )
}