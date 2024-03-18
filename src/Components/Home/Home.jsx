import React, { useRef, useEffect } from "react";
import "./Home.scss";
import ITLOGO from "../../Images/2024/hdLogo.png";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import { Link } from "react-scroll";
import { ScrollContainer } from "react-scroll-motion";
import CountDown from "./CountDown/CountDown";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home = () => {

  return (
    <section className="home_wrapper">
      <ScrollContainer>
        <div className="home_container" >

          
          <div className="homeContent" data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500" >
          <CountDown />


            <span className="span1" >
            
              Welcomes You To...
            </span>
            {/* <img
              src={ITLOGO}
              alt=""
              className="home_phone_logo"
              width={200}
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            /> */}
            <LazyLoadImage
            src={ITLOGO}
            
            width={200}
            effect="blur"
            className="home_phone_logo"
            
            />
          
            <span className="span2" style={{marginTop:'5px',textAlign:'center'}}>
             
            Department <br/>of
           </span>
            <span className="span3" >Information Technology</span>
            {/* <span className="span4">Technology</span> */}
            <Link to="events" spy={true} offset={-70} duration={600}>
              <button className="btn">Explore Events !</button>
            </Link>
          </div>
        </div>
      </ScrollContainer>
    </section>
  );
};

export default Home;
