import styles from "./Card.module.css";
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