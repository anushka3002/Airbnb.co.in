import styles from "./Travel_card.module.css"
// // import {Navbar} from "../Flexible/Navbar/Navbar"

// export const Card=()=>{
//     return(
//         <>
//         {/* <Navbar/> */}
//         <div className={Styles.space}></div>
//         <div className={Styles.travel_cont}>
//             <div>
//                 <p>300+ stays in Mussoorie</p>
//                 <div className={Styles.a_stays}>
//                 <img src="https://www.pinclipart.com/picdir/big/102-1027350_champion-icon-png-achievement-trophy-png-clipart.png" width="20px" height="20px"></img>
//                 <p>More than 3,100 guests have stayed in Mussoorie. On average they rated their stays 4.7 out of 5 stars.</p>
//                 </div>
//                 {/* home images start here */}
//                 <div>
//                     <div></div>
//                 </div>
//             </div>
//             <div></div>
//         </div>
//         </>
//     )
// }


// import styles from "./Card.module.css";
import { Carousel } from "react-bootstrap";

export const CardComponent = ({object})=>{
    return (
        <div className={styles.yCard}>
            <Carousel interval={null} indicators={false}>
                {object['images'].map((e,i)=>(
                    <Carousel.Item key={i}>
                        <img className={styles.yDisplay_img} src={e} alt="" />
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={styles.yCard_info}>
                <div>
                    <span className={styles.yTitle}>{object['title']}</span>
                    <span className={styles.yPrice}>{"₹"+object['price']+" / night"}</span>    
                </div>

                <div>
                    <span className={styles.yDistance}>{object['distance']}</span>
                    <span className={styles.yDate}>{object['date']}</span>    
                </div>
            </div>
        </div>
    )
}