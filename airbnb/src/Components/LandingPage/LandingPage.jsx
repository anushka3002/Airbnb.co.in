import Styles from "./LandingPage.module.css";

export const LandingPage =()=>{
    return (
        <div className={Styles.abody}>
            <div className={Styles.ablack}>
                <div className={Styles.ared}>
                    <p className={Styles.ahelp}>Help house 100,000 refugees fleeing Ukraine</p>
                    <button className={Styles.alearnmore}>Learn more</button>
                </div>

            <div className={Styles.ahome}>
                <p className={Styles.ahelp}>Let your curiosity do the booking</p>
                <button className={Styles.aflexible}><h4 className={Styles.aflextext}>I'm flexible</h4></button>
            </div></div>

        <div className={Styles.places_card_container}>
            <p className={Styles.ainspiration}>Inspiration for your next trip</p>
            <div className={Styles.aplaces_cards}>
                <div className={Styles.place_individual_card}>
                    <img className={Styles.a_scenery_image} src="https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#bc1a6e"}} className={Styles.a_card_color}>
                        <p className={Styles.a_places_title}>Mussoorie</p>
                        <p className={Styles.a_place_distance}>223 kilometers away</p>
                    </div>
                </div>
                <div className={Styles.place_individual_card}>
                <img className={Styles.a_scenery_image} src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#cc2d4a"}} className={Styles.a_card_color}>
                        <p className={Styles.a_places_title}>Manali</p>
                        <p className={Styles.a_place_distance}>405 kilometers away</p>
                    </div>
                </div>
                <div className={Styles.place_individual_card}>
                <img className={Styles.a_scenery_image} src="https://a0.muscache.com/im/pictures/57d3fdbd-9dde-4b6f-98af-64d38d6ffd02.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#d93b30"}} className={Styles.a_card_color}>
                        <p className={Styles.a_places_title}>Kasauli</p>
                        <p className={Styles.a_place_distance}>257 kilometers away</p>
                    </div>
                </div>
                <div className={Styles.place_individual_card}>
                <img className={Styles.a_scenery_image} src="https://a0.muscache.com/im/pictures/cccdc2e6-e6dc-4706-b9d4-ee2a80115703.jpg?im_w=480" width="100%"></img>
                    <div style={{backgroundColor:"#de3151"}} className={Styles.a_card_color}>
                        <p className={Styles.a_places_title}>Haldwani</p>
                        <p className={Styles.a_place_distance}>235 kilometers away</p>
                    </div>
                </div>

            </div>
        </div>

        <div>
            <p className={Styles.adiscover}>Discover Airbnb Experiences</p>
            <div className={Styles.a_discover_images}>
                <div className={Styles.a_image_left}>
                    <p className={Styles.a_discover_title}>Things to do on your trip</p>
                    <button className={Styles.a_discover_button}>Experiences</button>
                </div>
                <div className={Styles.a_image_right}>
                    <p className={Styles.a_discover_title}>Things to do from home</p>
                    <button className={Styles.a_discover_button}>Online Experiences</button>
                </div>
            </div>
        </div>

        <div className={Styles.a_last_woman_image}>
            <div className={Styles.a_hosting_image}>
                <p className={Styles.a_questions_hosting}>Questions about hosting?</p>
                <button className={Styles.a_superhost_button}>Ask a Superhost</button>
            </div>
        </div>

       
        </div>
    )
}