import React from "react";
import "./PriceCard.scss";
import { FaRegDotCircle } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";

const PriceCard = ({ plan, amout, style, id, data1, data2, data3 }) => {
  return (
    <div
      className={id ? "priceCard_container" : "priceCard_container customCard"}
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="500"
    >
      <span className="priceCard_text1">{plan}</span>
    
     

      <div className="priceCard_amout_container">
        <span><span><FaRupeeSign style={{color:'black',marginTop:"0.5rem"}}/></span><span>{amout}</span></span>
        <span style={{fontSize:'15px', fontWeight:'500'}}>/Per Head</span>
        {/* <span style={{fontSize:'15px', fontWeight:'500'}}>Note : <span style={{fontSize:'14px', fontWeight:'400'}}>For Paper Presentation Per head 150rs</span></span> */}
      </div>

      
      <span>
        {" "}
        
        <span>
          <FaRegDotCircle />
        </span>
        <span>OnSpot Registration Available</span>
      </span>
      <span>
        <span>
          <FaRegDotCircle />
        </span>{" "}
        <span>Food (Veg / Non-Veg)</span>
      </span>
      <span>
        <span>
          <FaRegDotCircle />{" "}
        </span>
        <span>Certificate</span>
      </span>
      <span>
        {" "}
        <span>
          <FaRegDotCircle />
        </span>
        <span> Tag</span>
      </span>
      <span>
        {" "}
        <span>
          <FaRegDotCircle />
        </span>
        <span>Participants can participate all events</span>
      </span>
      {/* <div className="register_span">
        <span className="note_text">Note: <span>For Paper Presentaion 150 rupees for per head</span></span>
      </div> */}
      
      <a
      href="https://forms.gle/KxE6p4czFsL6G6wV9"
      style={{textDecoration:'none',marginTop:'20px'}}
        className={id ? "priceCard_button" : "priceCard_button customButton"}
      >
        Register Now
      </a>
      
    </div>
  );
};

export default PriceCard;
