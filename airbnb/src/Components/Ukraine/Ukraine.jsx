import Styles from "./Ukraine.module.css"


export const Ukraine=()=>{
    return(
        <>
        <div className={Styles.a_top}>
        </div>

        <div className={Styles.support}>
            <h1>Your support makes a difference</h1>
            <p>Airbnb.org is funding short term housing for up to 100,000 people fleeing Ukraine. We support our refugee guests regardless of nationality, race, ethnicity, or how they identify.</p>
            <p>You can help by offering temporary stays for free or at a discount through Airbnb.org, or donating to fund stays.</p>
        </div>

{/* support makes a difference*/}

        <div className={Styles.offer_a_place}>
            <div className={Styles.a_lady_support}>
                <img src="https://a0.muscache.com/im/pictures/96f256c9-4a07-48cc-a7ec-d733de53f785.jpg?im_w=720" width="100%" height="100%"></img>
                <p style={{color:"#93717c",fontSize:"18px",lineHeight:"25px"}}>Linda, a Host in Dallas, has welcomed refugees through Airbnb.org.</p>
            </div>
            <div className={Styles.a_lady_words}>
                <h1>Offers a place to stay</h1>
                <p>Start hosting guests for a free or at a discount</p>
                <h3>How hosting works</h3>
                <div style={{display:"flex"}}>
                <img style={{marginTop:"15px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkTUF1KGb4hQNCXblCEZbxJobOm0GH-L-Wwf9zrqog_bhXTRI33dt7Ak7KBkh_IzgMbU&usqp=CAU" width="35px" height="35px"></img>
               <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px",marginLeft:"12px"}}>You’ll provide a comfortable bed and basic amenities for anywhere from a few days to a few weeks. Learn more about hosting refugee guests.</p>
                </div>
                <div style={{display:"flex"}}>
                <img style={{marginTop:"15px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkTUF1KGb4hQNCXblCEZbxJobOm0GH-L-Wwf9zrqog_bhXTRI33dt7Ak7KBkh_IzgMbU&usqp=CAU" width="35px" height="35px"></img>
               <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px",marginLeft:"12px"}}>Airbnb.org partners with nonprofits that check refugee guests for eligibility and assist them before, during, and after their stays.</p>
                </div>
                <div style={{display:"flex"}}>
                <img style={{marginTop:"15px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkTUF1KGb4hQNCXblCEZbxJobOm0GH-L-Wwf9zrqog_bhXTRI33dt7Ak7KBkh_IzgMbU&usqp=CAU" width="35px" height="35px"></img>
               <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px",marginLeft:"12px"}}>Airbnb provides Hosts with AirCover, which includes $1 million in liability insurance, $1 million in damage protection, and more.</p>
                </div>
                <button id={Styles.host_a_refugee}>Host a refugee</button>
            </div>
        </div>

    {/* make a donation*/}

        <div className={Styles.offer_a_place2}>
            <div className={Styles.a_man_donation_words}>
                <h1>Make a donation</h1>
                <p>Every donation helps fill a critical need for emergency stays for those fleeing Ukraine and others in crisis.</p>
                <div className={Styles.donation_box}>
                    <img className={Styles.donation_image} src="https://www.boydcorp.com/images/icon/Cost-Effective-2-300x300.jpg"></img>
                    <p>Donations to Airbnb.org will be matched by Airbnb’s founders and their families, up to $10 million USD in total, until 31 March 2022.</p>
                </div>
                <h3>How donating works</h3>
                <div style={{display:"flex"}}>
                <img style={{marginTop:"15px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkTUF1KGb4hQNCXblCEZbxJobOm0GH-L-Wwf9zrqog_bhXTRI33dt7Ak7KBkh_IzgMbU&usqp=CAU" width="35px" height="35px"></img>
               <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px",marginLeft:"12px"}}>100% of your donation will go toward connecting people with short term housing.</p>
                </div>
                <div style={{display:"flex"}}>
                <img style={{marginTop:"15px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkTUF1KGb4hQNCXblCEZbxJobOm0GH-L-Wwf9zrqog_bhXTRI33dt7Ak7KBkh_IzgMbU&usqp=CAU" width="35px" height="35px"></img>
               <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px",marginLeft:"12px"}}>Stays are completely free for guests of our program.</p>
                </div>
                <div style={{display:"flex"}}>
                <img style={{marginTop:"15px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkTUF1KGb4hQNCXblCEZbxJobOm0GH-L-Wwf9zrqog_bhXTRI33dt7Ak7KBkh_IzgMbU&usqp=CAU" width="35px" height="35px"></img>
               <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px",marginLeft:"12px"}}>Donations are tax deductible to the extent allowed under your local tax laws.</p>
                </div>
                <button id={Styles.host_a_refugee}>Donate now</button>
            </div>
            <div className={Styles.a_man_donation}>
                <img src="https://a0.muscache.com/im/pictures/d381c980-5419-4ef9-9269-a0e8ff9777d5.jpg?im_w=720" width="100%" height="100%"></img>
                <p style={{color:"#93717c",fontSize:"18px",lineHeight:"25px"}}>Fode is a refugee guest who stayed with a Host in Italy through Airbnb.org.</p>
            </div>
        </div>

        {/* need assistance */}

        <div style={{marginTop:"15%"}} className={Styles.offer_a_place}>
            <div className={Styles.a_lady_support}>
                <img src="https://a0.muscache.com/im/pictures/b955b92a-e911-4c6e-8d8d-16a4638da352.jpg?im_w=720" width="100%" height="100%"></img>
                <p style={{color:"#93717c",fontSize:"18px",lineHeight:"25px"}}>Josue hosts through Airbnb.org to welcome people fleeing many kinds of disasters.</p>
            </div>
            <div className={Styles.a_lady_words}>
                <h1>Need assistance?</h1>
                <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px"}}>We don’t offer housing directly to individuals at this time. Airbnb.org works with other nonprofit partners who book and coordinate stays for refugee guests.</p>
                <h3>What our nonprofit partners do</h3>
                <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px"}}>Our partners are nonprofits that help welcome refugees. These organizations support their clients in finding housing and more. Nonprofit proposals are accepted by invitation only.</p>
                <h3>What Airbnb.org does</h3>
                <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px"}}>Airbnb.org provides grants and technology to our nonprofit partners, who coordinate temporary housing for their clients.</p>
                <button id={Styles.host_a_refugee}>Learn more</button>
                <p style={{marginLeft:"60%",color:"grey"}}>Our partners</p>
                <div style={{marginLeft:"50%"}}>
                <img style={{borderRight:"1px solid grey",paddingRight:"8px"}} src="https://a0.muscache.com/im/pictures/7471a7cc-0148-4d65-a727-3823734e7bc9.jpg?im_w=240&im_q=highq" width="30%"></img>
                <img style={{paddingLeft:"10px"}} src="https://a0.muscache.com/im/pictures/784119b6-2c94-4d63-95ba-b5774e2db058.jpg?im_w=240&im_q=highq" width="30%"></img>
                </div>
            </div>
        </div>

        {/* how airbnb contributes */}

        <div className={Styles.a_contribution}>
            <div>
                <h1>How Airbnb contributes</h1>
            </div>
            <div>
                <h3>Supporting Hosts</h3>
                <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px"}}>Airbnb provides Hosts with AirCover, which includes $1 million in liability insurance, $1 million in damage protection, and more.</p>
                <h3>Funding stays</h3>
                <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px"}}>Airbnb and donors are contributing funds for temporary stays for up to 100,000 refugees fleeing Ukraine.</p>
                <h3>Waiving fees</h3>
                <p style={{fontSize:"16px",letterSpacing:"0.1px",wordSpacing:"2px",lineHeight:"25px"}}>Airbnb is waiving Host and guest fees on all Airbnb.org stays for refugees.</p>
            </div>
        </div>

        {/* footer */}

        <div className={Styles.ukraine_footer}>
            <div>
                <h3>Our story</h3>
                <h3>Our board</h3>
                <h3>Our work</h3>
            </div>
            <div>
            <h3>Host a stay</h3>
                <h3>Donate to stays</h3>
                <h3>Host people fleeing Ukraine</h3>
            </div>
            <div>
            <h3>Hosting support</h3>
                <h3>Donations support</h3>
                <h3>Host Afgan refugees</h3>
            </div>
            <div>
                <button>English</button>
            </div>
        </div>
        <div className={Styles.bottom_footer}>
            <img src="https://cdn-images-1.medium.com/max/178/1*5wg57UPTn3EZIWQSgf9mMA@2x.png" width="5%" height="80%"></img>
            <h3 style={{color:"white"}}>airbnb</h3>
            <h3 style={{color:"#61e212"}}>.org</h3>
            <p style={{marginLeft:"57%",marginTop:"3%",color:"white",fontSize:"14px"}}>© 2022 Airbnb.org. All rights reserved. Privacy Policy.</p>
        </div>



        </>
    )
}