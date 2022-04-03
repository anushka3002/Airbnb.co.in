import styles from "./Checkout.module.css"
import { useNavigate } from "react-router-dom"
import airbnb from "./images/airbnb.png"
import wallets from "./images/wallets.jpg"
import upi from "./images/upi.png"
import paytm from "./images/paytm.png"
import hdfc from "./images/hdfc.png"

export const Checkout =() =>{
    const navigate=useNavigate()
    return (
        <div>
            <div id= {styles.smiddle}>
            <div id={styles.sone}>
                <div id={styles.simagebox}>
                   <div><p><span id={styles.sarrow} onClick={()=>{
               navigate(-1)}}>
                   &larr;</span> Back</p></div> 
                   <div id={styles.sbnbimage}><img src={airbnb} alt="Logo" /></div>
                    
                    
                    </div>
                <div id={styles.schoose}><p>Choose a payment option</p></div>
                {/* <div id={styles.samount}><p><b>Total Payable Amount &nbsp;  ₹61,015.74</b></p></div> */}
            </div>
            <div id={styles.stwo}>

                <div id={styles.stwoone}>
                 <div id={styles.sflex}  onClick={()=>{
               navigate("/card") }}>
                        
                <div id={styles.swallet}><img src={wallets} alt="Logo" /></div>
                <div id={styles.stext}>Wallet <small>amazonpay,phonepe</small></div>
                <div id={styles.sgreat}>&gt;</div>
                </div>
                <div id={styles.sflex} onClick={()=>{
               navigate("/card") }}>
                        
                <div id={styles.swallet}><img src={upi} alt="Logo" /></div>
                <div id={styles.stext}>Upi payment <small>gpaypay,phonepe</small></div>
                <div id={styles.sgreat}>&gt;</div>
                </div>

                <div id={styles.sflex} onClick={()=>{
               navigate("/card") }}>
                        
                <div id={styles.swallet}><img src={paytm} alt="Logo" /></div>
                <div id={styles.stext}>Paytm Bank & wallet</div>
                <div id={styles.sgreat}>&gt;</div>
                 </div>

                 <div id={styles.sflex} onClick={()=>{
               navigate("/card") }}>
                        
                        <div id={styles.swallet}><img src={hdfc} alt="Logo" /></div>
                        <div id={styles.stext}> Hdfc bank - payZapp <small></small></div>
                        <div id={styles.sgreat}>&gt;</div>
                         </div>

                </div>
               
            </div>
            </div>
        </div>
    )
}