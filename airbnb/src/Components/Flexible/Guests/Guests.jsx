import { Counter } from "../Counter/Counter";
import styles from "./Guests.module.css";

export const Guests = ()=>{
    const details = [
        {
            "tag":"Adults",
            "Detail":"Ages 13 or above"
        }
        ,
        {   
            "tag":"Children",
            "Detail":"Ages 2-12"
        }
        ,
        {
            "tag":"Infants",
            "Detail":"Under 2"
        }
        ,
        {
            "tag":"Pets",
            "Detail":"Bringing a service animal?"
        }
    ]

    return(
        <>  
            <div className={styles.yGuests}>
                {details.map((e,i)=>(
                    <>
                        <div className={styles.yGuest}>
                            <div className={styles.yGuest_data}>
                                <p className={styles.yTag}>{e['tag']}</p>
                                <span className={styles.yDetail}>{e['Detail']}</span>
                            </div>
                            <Counter></Counter>
                        </div>
                    <hr />
                    </>
                ))}
                <p>
                If you're lucky enough to have more than 2 pets 
                with you, be sure to let your host know.
                </p>
                
                <div className={styles.yFooter}>
                    <span className={styles.yClear}>
                        Clear
                    </span>
                    <button className={styles.yGuest_button}>
                        Save
                    </button>
                </div>
            </div>
        </>
    )
}