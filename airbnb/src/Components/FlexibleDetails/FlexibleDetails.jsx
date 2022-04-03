import Styles from "./FlexibleDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faAngleRight,
  faShieldAlt,
  faUser,
  faClock,
  faDoorClosed,
  faSmoking,
  faSprayCan,
  faExclamationCircle,
  faLocationDot,
  faBookmark,
  faBedPulse,
  faWifi,
  faSnowflake,
  faBellSlash,
  faTv,
  faBowlFood,
  faCalendar,
  faBanSmoking,
  faArrowUpFromBracket,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import WebFont from "webfontloader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const MyFD = () => {
  let { id } = useParams();
  id = id.replace(":", "");
  const [details, setDetails] = useState({});
  const [img, setImg] = useState([]);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "sans-serif"],
      },
    });
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:8080/houses/${id}`)
      .then((res) => {
        setDetails(res.data);
        setImg(res.data.images);
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  console.log("working", details.price);
  const x = details.price;
  let price;
  if(x === undefined){
    price = 0;
  }
  else{
    price = x.replace(",", "")
  }
  const num = Number(price);
  const total = num * 7;
  const sum = num + total;
  const navigate = useNavigate();

  return (
    <div className={Styles.d_alpaBody}>
      <div className={Styles.d_reactBody}>
        <div className={Styles.d_reactTitle}>
          <div className={Styles.d_reactTitle1}>
            <h2>{details.title2}</h2>
          </div>
          <div className={Styles.d_reactTitle2}>
            <div className={Styles.d_titleSpacing}>
              <FontAwesomeIcon
                icon={faStar}
                size="xs"
                className={Styles.d_reactTitle2_icon}
              />
              <p>4.67.</p>
              <p className={Styles.d_titleSpacing2}>52 reviews</p>
            </div>
            <div className={Styles.d_titleSpacing}>
              <button className={Styles.d_reactSharebtn}>
                <FontAwesomeIcon icon={faArrowUpFromBracket} size="xs" /> Share
              </button>
              <button className={Styles.d_reactSharebtn}>
                <FontAwesomeIcon icon={faHeart} size="xs" /> Save
              </button>
            </div>
          </div>
        </div>
        <div className={Styles.d_mainImg}>
          <div className={Styles.d_class_name1}>
            <img src={img[0]} />
          </div>
          <div className={Styles.d_class_name2}>
            <div><img src={img[1]} alt="" /></div>
            <div className={Styles.d_class_name21}><img src={img[2]} alt="" /></div>
            <div><img src={img[3]} alt="" /></div>
            <div className={Styles.d_class_name22}><img src={img[4]} alt="" /></div>
          </div>
        </div>
        <div className={Styles.d_reactDes}>
          <div className={Styles.d_leftDes}>
            <div className={Styles.d_desbelow}>
              <div className={Styles.d_desbelowDetails}>
                <h3 className={Styles.d_desbelowDetails1}>{details.host}</h3>
                <p className={Styles.d_desbelowDetails2}>
                  2 guests1 bedroom1 bed1 bathroom
                </p>
              </div>
              <div className={Styles.d_desImg1}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5fAD2aRobPXcbIrmlQgmiCY3rb7RwzDgzA&usqp=CAU"
                  alt="Host"
                />
              </div>
            </div>
            <div className={Styles.d_leftInfo}>
              <div className={Styles.d_leftLoc}>
                <div className={Styles.d_leftIcon}>
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className={Styles.d_leftName}>
                  <span>Great location</span>
                  <p className={Styles.d_leftp}>
                    93% of recent guests gave the location a 5-star rating.
                  </p>
                </div>
              </div>
              <div className={Styles.d_leftLoc}>
                <div className={Styles.d_leftIcon}>
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div className={Styles.d_leftName}>
                  <span>Wifi</span>
                  <p className={Styles.d_leftp}>
                    Guests often search for this popular amenity
                  </p>
                </div>
              </div>
            </div>
            <div className={Styles.d_hotelInfo}>
              <p>{details.description}</p>
              <p className={Styles.d_showMoreIcon}>
                Show More <FontAwesomeIcon icon={faAngleRight} />{" "}
              </p>
            </div>
            <div className={Styles.d_bedRoom}>
              <h2>Where you'll sleep</h2>
              <div className={Styles.d_bedRoomIcon}>
                <FontAwesomeIcon icon={faBedPulse} />
                <h4>Bedroom</h4>
                <p>1 double bed</p>
              </div>
            </div>
            <div className={Styles.d_reactPlace}>
              <h2>What this place offers</h2>
              <div className={Styles.d_moreDetails}>
                <div>
                  <p>
                    <FontAwesomeIcon
                      icon={faWifi}
                      className={Styles.d_moreDetailsIcons}
                    />
                    Wifi
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faSnowflake}
                      className={Styles.d_moreDetailsIcons}
                    />
                    Air conditioning
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faSmoking}
                      className={Styles.d_moreDetailsIcons}
                    />
                    Smoking allowed
                  </p>
                  <p className={Styles.d_moreDetails1}>
                    <FontAwesomeIcon
                      icon={faBellSlash}
                      className={Styles.d_moreDetailsIcons1}
                    />
                    Carbon monoxide alarm
                  </p>
                </div>
                <div>
                  <p>
                    <FontAwesomeIcon
                      icon={faTv}
                      className={Styles.d_moreDetailsIcons}
                    />
                    TV
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faBowlFood}
                      className={Styles.d_moreDetailsIcons}
                    />
                    Breakfast
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className={Styles.d_moreDetailsIcons}
                    />
                    Long-term stays allowed
                  </p>
                  <p className={Styles.d_moreDetails1}>
                    <FontAwesomeIcon
                      icon={faBanSmoking}
                      className={Styles.d_moreDetailsIcons1}
                    />
                    Smoke alarm
                  </p>
                </div>
              </div>
              <button className={Styles.d_moreDetails_btn}>
                Show more amenities
              </button>
            </div>
          </div>
          <div className={Styles.d_rightDes}>
            <div className={Styles.d_rightDesTitle}>
              <div className={Styles.d_rightDesTitle1}>
                <h3>{"₹ " + details.price + " "}</h3>
              </div>
              <p className={Styles.d_rightDesTitle2}>{" " + " / night"}</p>
              <div className={Styles.d_iconRightDes}>
                <p>
                  {" "}
                  <FontAwesomeIcon
                    icon={faStar}
                    size="xs"
                    className={Styles.d_reactTitle2_icon}
                  />
                  4.67.
                </p>
              </div>
              <div className={Styles.d_revRightDes}>
                <p>52 reviews</p>
              </div>
            </div>
            <div className={Styles.d_rightDate}>
              <div className={Styles.d_rightDate1}>
                <h5 className={Styles.d_rightDate1_style}>CHECK-IN</h5>
                <p className={Styles.d_rightDate1_p}>11/4/2022</p>
              </div>
              <div className={Styles.d_rightDate2}>
                <h5 className={Styles.d_rightDate1_style}>CHECKOUT</h5>
                <p className={Styles.d_rightDate1_p}>11/11/2022</p>
              </div>
              <div className={Styles.d_rightDate3}>
                <h5 className={Styles.d_rightDate1_style}>GUESTS</h5>
                <p className={Styles.d_rightDate1_p}>1 guest</p>
              </div>
            </div>
            <div className={Styles.d_right_btn}>
              <button
                className={Styles.d_rightReservebtn}
                onClick={() => {
                  navigate("/payment");
                }}
              >
                Reserve
              </button>
              <div className={Styles.d_rightBill}>
                <p className={Styles.d_rightBill_p}>You won't be charged yet</p>
              </div>

              <div className={Styles.d_rightmoney}>
                <p>{"₹ " + details.price + " X 7 nights"}</p>
                <p>{total}</p>
              </div>
              <div className={Styles.d_rightmoney}>
                <p>Service Fee</p>
                <p>₹ 5,381</p>
              </div>

              <div className={Styles.d_righttotal1}>
                <p>Total Before Tax</p>
                <p>{"₹" + sum}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.d_body}>
        {/* this is the rating part */}
        <div className={Styles.d_rating}>
          <p className={Styles.d_rating_info}>
            {" "}
            <FontAwesomeIcon icon={faStar} className={Styles.icon} />
            <p>4.95 · 277 reviews</p>
          </p>
        </div>
        {/* this is the rating bars */}
        <div className={Styles.d_roomInfo}>
          <div className={Styles.d_rating_info1}>
            <div className={Styles.d_myInfo}>
              <p>Cleanliness</p>
              <p>Communication</p>
              <p>Check-in</p>
            </div>
            <div className={Styles.d_myBar}>
              <div className={Styles.forbars}>
                <div className={Styles.bars1}>
                  <div className={Styles.div1}></div>
                </div>
                <span className={Styles.d_omg1}>4.9</span>
              </div>

              <div className={Styles.forbars}>
                <div className={Styles.bars2}>
                  <div className={Styles.div2}></div>
                </div>
                <span className={Styles.d_omg2}>5.0</span>
              </div>

              <div className={Styles.forbars}>
                <div className={Styles.bars3}>
                  <div className={Styles.div3}></div>
                </div>
                <span className={Styles.d_omg}>5.0</span>
              </div>
            </div>
          </div>
          <div className={Styles.d_rating_info2}>
            <div className={Styles.d_myInfo}>
              <p>Accuracy</p>
              <p>Location</p>
              <p>Value</p>
            </div>
            <div className={Styles.d_myBar}>
              <div className={Styles.forbars}>
                <div className={Styles.bars1}>
                  <div className={Styles.div1}></div>
                </div>
                <span className={Styles.d_omg1}>4.9</span>
              </div>

              <div className={Styles.forbars}>
                <div className={Styles.bars2}>
                  <div className={Styles.div2_2}></div>
                </div>
                <span className={Styles.d_omg2}>4.6</span>
              </div>

              <div className={Styles.forbars}>
                <div className={Styles.bars3}>
                  <div className={Styles.div3}></div>
                </div>
                <span className={Styles.d_omg}>5.0</span>
              </div>
            </div>
          </div>
        </div>
        {/* this is the comments part */}
        <div className={Styles.d_comments}>
          <div className={Styles.d_nameComments}>
            <div className={Styles.d_nameBox}>
              <div className={Styles.d_imgName}>
                <div className={Styles.d_img}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqwAapnZ1EZ5P1X8Dfyu6AdFXY5EayRplC0g&usqp=CAU" alt="" />
                </div>
                <div className={Styles.d_myName}>
                  <h4>Aman</h4>
                  <span>January 2020</span>
                </div>
              </div>
              <div className={Styles.d_dis}>
                Romantic and very quite place. Love the surrounding atmosphere.
                Breakfast was just awesome try it and you would simple love it
                as it is it would be complimentary.
              </div>
              <p>
                Show More <FontAwesomeIcon icon={faAngleRight} />{" "}
              </p>
            </div>

            <div className={Styles.d_nameBox}>
              <div className={Styles.d_imgName}>
                <div className={Styles.d_img2}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTevMaIfS8yFOE5PDE10dyBTQaWnfqH-zuYg&usqp=CAU" alt="" />
                </div>
                <div className={Styles.d_myName}>
                  <h4>Sejalba</h4>
                  <span>June 2019</span>
                </div>
              </div>
              <div className={Styles.d_dis}>
                Nice Place to Stay with full Privacy very Carrying Staff..
              </div>
              {/* <p>Show More <FontAwesomeIcon icon={faAngleRight} /> </p> */}
            </div>

            <div className={Styles.d_nameBox}>
              <div className={Styles.d_imgName}>
                <div className={Styles.d_img}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7BTv8lLtBs1-CgYwME-esLxYTfvpOXM_Wrg&usqp=CAU" alt="" />
                </div>
                <div className={Styles.d_myName}>
                  <h4>Vishal & Khyati</h4>
                  <span>October 2019</span>
                </div>
              </div>
              <div className={Styles.d_dis}>
                Romantic and very quite place. Love the surrounding atmosphere.
                Breakfast was just awesome try it and you would simple love it
                as it is it would be complimentary.
              </div>
              <p>
                Show More <FontAwesomeIcon icon={faAngleRight} />{" "}
              </p>
            </div>

            <div className={Styles.d_nameBox}>
              <div className={Styles.d_imgName}>
                <div className={Styles.d_img}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMDb342yA-0G8IN6YAaw5RhzHuczCqA2yzCw&usqp=CAU" alt="" />
                </div>
                <div className={Styles.d_myName}>
                  <h4>Anuj</h4>
                  <span>March 2019</span>
                </div>
              </div>
              <div className={Styles.d_dis}>
                Modern & chic place with a beautiful pool setting. Had a good
                stay. Just the pool water was highly chlorinated..The on-site
                staff was hospitable and responsive. Definitely worth a stay!
              </div>
              <p>
                {/* Show More <FontAwesomeIcon icon={faAngleRight} />{" "} */}
              </p>
            </div>

            <div className={Styles.d_nameBox}>
              <div className={Styles.d_imgName}>
                <div className={Styles.d_img}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3t_d8a_YJg6o5wtcY6RY_FgXgKA39CmKiQ&usqp=CAU" alt="" />
                </div>
                <div className={Styles.d_myName}>
                  <h4>Nayeli</h4>
                  <span>March 2022</span>
                </div>
              </div>
              <div className={Styles.d_dis}>
                Very beautiful view with rice fields. Food was great and staff
                was responsive and offered delicious breakfast and menu so we
                didn’t have to go out and find food. They even offer to go...
              </div>
              <p>
                Show More <FontAwesomeIcon icon={faAngleRight} />{" "}
              </p>
            </div>

            <div className={Styles.d_nameBox}>
              <div className={Styles.d_imgName}>
                <div className={Styles.d_img}>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyOlpiyZibX3HWFsyoAPJpd-cB2JhKP8v5Xg&usqp=CAU" alt="" />
                </div>
                <div className={Styles.d_myName}>
                  <h4>Azhar</h4>
                  <span>March 2022</span>
                </div>
              </div>
              <div className={Styles.d_dis}>
                Quiet and peaceful getaway. Room was spacious and super clean.
                Amazing staff on-hand to assist with any needs. Very
                professional and so polite. Food was so fresh and great value...
              </div>
              <p>
                Show More <FontAwesomeIcon icon={faAngleRight} />{" "}
              </p>
            </div>
          </div>
          <button className={Styles.d_btn}>Show all 277 reviews</button>
        </div>
        {/* This is for the maps area */}
        <div></div>

        {/* This is the Hosted by area */}
        <div className={Styles.d_host}>
          <div className={Styles.d_hostImg}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOals90yoPpPBlA1-nOB7bLu_NAGuImdYdA&usqp=CAU" alt="" />
            <div className={Styles.d_hostName}>
              <h2>Hosted by Mega</h2>
              <span>Joined in August 2015</span>
            </div>
          </div>
          <div className={Styles.d_hostInfo}>
            <div className={Styles.d_hostInfo1}>
              <div className={Styles.d_hostIcons}>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faStar} className={Styles.d_star} />
                  </span>
                  <span>2,493 Reviews</span>
                </div>
                <div>
                  <span>
                    <FontAwesomeIcon
                      icon={faShieldAlt}
                      className={Styles.d_star2}
                    />
                  </span>
                  <span>Identity verified</span>
                </div>
                <div>
                  <span>
                    <FontAwesomeIcon icon={faUser} className={Styles.d_star2} />
                  </span>
                  <span>Superhost</span>
                </div>
              </div>
              <div className={Styles.d_hostDis}>
                <p>
                  I have been working for over 12 years in hospitality industry
                  and now i have decided to open a small Eco friendly lodge in
                  the central of Ubud where i can welcoming my guest and...
                </p>
                <a href="/" className={Styles.d_a}>
                  read more
                </a>
                <h5>Mega is a Superhost</h5>
                <p>
                  Superhosts are experienced, highly rated hosts who are
                  committed to providing great stays for guests.
                </p>
              </div>
            </div>
            <div className={Styles.d_hostInfo2}>
              <div className={Styles.d_hostRate}>
                <p>Response rate: 100%</p>
                <p>Response time: Within an hour</p>
              </div>
              <button className={Styles.d_ratebtn}>Contact Host</button>
              <div className={Styles.d_hostRatingInfo}>
                <span>
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className={Styles.d_hostIcons2}
                  />
                </span>
                <span className={Styles.d_hostIconsDis}>
                  To protect your payment, never transfer money or communicate
                  outside of the Airbnb website or app.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* This is things to know part */}
        <div className={Styles.d_toKnow}>
          <div className={Styles.d_toKnowTitle}>
            <h2>Things to know</h2>
          </div>
          <div className={Styles.d_toKnowInfo}>
            <div className={Styles.d_toKnowInfo_Sub1}>
              <h4>House Rules</h4>
              <ul className={Styles.d_toKnowInfo_bull}>
                <li>
                  <FontAwesomeIcon icon={faClock} /> Check-in: After 2:00 pm
                </li>
                <li>
                  <FontAwesomeIcon icon={faClock} /> Check out: 12:00 pm
                </li>
                <li>
                  <FontAwesomeIcon icon={faDoorClosed} /> Self check-in with
                  building staff
                </li>
                <li>
                  <FontAwesomeIcon icon={faSmoking} /> Smoking is allowed
                </li>
              </ul>
              <p>
                Show More <FontAwesomeIcon icon={faAngleRight} />{" "}
              </p>
            </div>
            <div className={Styles.d_toKnowInfo_Sub2}>
              <h4>Health & safety</h4>
              <ul className={Styles.d_toKnowInfo_bull}>
                <li>
                  <FontAwesomeIcon icon={faStar} />
                  Committed to Airbnb's enhanced cleaning process
                </li>
                <li>
                  <FontAwesomeIcon icon={faSprayCan} /> Airbnb's social
                  distancing and other COVID-19-related guidelines apply
                </li>
                <li>
                  <FontAwesomeIcon icon={faExclamationCircle} /> No carbon
                  monoxide alarm
                </li>
                <li>
                  <FontAwesomeIcon icon={faExclamationCircle} /> No smoke alarm
                </li>
              </ul>
              <p>
                Show More <FontAwesomeIcon icon={faAngleRight} />{" "}
              </p>
            </div>
            <div className={Styles.d_toKnowInfo_Sub2}>
              <h4>Cancellation policy</h4>
              <ul className={Styles.d_toKnowInfo_bull}>
                <li>Free cancellation for 48 hours</li>
              </ul>
              <p>
                Show More <FontAwesomeIcon icon={faAngleRight} />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* This is my footer */}
      <div className={Styles.d_footer}>
        <h2 className={Styles.d_footer_header}>
          Explore other options in and around Ubud
        </h2>
        <div className={Styles.d_footer_body}>
          <div>
            <p>Canggu Beach</p>
            <p>Sanur</p>
            <p>Nusa Dua Beach</p>
          </div>
          <div>
            <p>Seminyak Beach</p>
            <p>Penida Island</p>
            <p>Nusa Lembongan</p>
          </div>
          <div>
            <p>Lombok</p>
            <p>Gili Trawangan</p>
            <p>Gili Islands</p>
          </div>
          <div>
            <p>Denpasar</p>
            <p>Bingin Beach</p>
            <p>Ubud</p>
          </div>
        </div>
        <span className={Styles.d_footerFinal}>
          Airbnb <FontAwesomeIcon icon={faAngleRight} /> Indonesia{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Bali{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Gianyar Regency{" "}
          <FontAwesomeIcon icon={faAngleRight} /> Gianyar Regency
        </span>
      </div>
      <Footer/>
    </div>
  );
};
