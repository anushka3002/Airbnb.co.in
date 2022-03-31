import styles from "./Dropdown.module.css";
import { useState } from "react";
export const Dropdown = ()=>{
    const [state,setState] = useState(false)
    return (
        <>
            <div>
                <div className={styles.dropdown}>
                    <div className="dropdown-btn" onClick={(e)=>(
                        setState(!state)
                    )}>
                        Choose One
                    </div>
                    {
                        state && (
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    React
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}