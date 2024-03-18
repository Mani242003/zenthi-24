import "./Footer.scss";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-scroll";
import { FiMail } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { BiWorld } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import logoFooter from "../../Images/2024/kingsLogo.png";
import { FaInstagram } from "react-icons/fa";


// import Logo from "../../Images/";

const Footer = () => {
  return (
    <section className="footer-wrapper" id="footer">
      <div className="footer-container">
        <div className="footer-middel-container">
          <div className="footer-middel-col1-container">
            <div className="footer-top-container">
              <img src={logoFooter} alt="" width={200} />
            </div>

            <div className="footer-col1-row">
              <IoLocationOutline size={55} />
              <span className="footer-col1-address-text footer-common-text-style">
                Kings Engineering College Opposite to Hyundai Motors,
                Chennai-Banglore Highway Irungattukottai Sriperumbudur 602117
              </span>
            </div>
            <div className="footer-col1-row">
              <LuPhoneCall className="footer-col1-icon" />

              <a
                href="tel:044-7122 4402"
                style={{ color: "white", textDecoration: "none" }}
              >
                <span className="footer-col1-call-text footer-common-text-style">
                044-7122 4402
                </span>
              </a>
            </div>
            <div className="footer-col1-row">
              <FiMail className="footer-col1-icon" />

              <a
                href="mailto:info@kingsedu.ac.in"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
              >
                <span className="footer-col1-mail-text footer-common-text-style">
                  Email: info@kingsedu.ac.in
                </span>
              </a>
            </div>
            <div className="footer-col1-row">
              <TbWorld />

              <a
                href="https://kingsedu.ac.in/"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
                
              >
                <span className="footer-col1-web-text footer-common-text-style">
                  www.kingsedu.ac.in
                </span>
              </a>
            </div>
          </div>
          <div className="footer-middel-col2-container">
            <div className="footer-middel-col2lleft">
              <Link to="home" spy={true} offset={-60} duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Home
                </span>
              </Link>
              <Link to="events" spy={true} offset={-70} duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Events
                </span>
              </Link>

              <Link to="price" spy={true} offset={-60} duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Registration
                </span>
              </Link>

     
            </div>
            <div className="footer-middel-col2-right">
              <Link to="guest" spy={true} offset={-60} duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Our Guests
                </span>
              </Link>
              <Link to="screenshot" spy={true} offset={-60} duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Our Campus
                </span>
              </Link>

              <Link to="contact" spy={true} offset={-60} duration={600}>
                <span className="footer-col1-web-text footer-common-text-style">
                  Contact us
                </span>
              </Link>
            </div>
          </div>
          <div className="footer-middel-col3-container">
            <span className="footer-col1-titel-text1">Follow us</span>
            <div className="footer-social-links">
              <div className="footermiddel-col3-link">
                <a style={{color:'black'}} href="https://kingsedu.ac.in/" target="_blank">
                  <BiWorld size={24} />
                </a>
              </div>
              <div className="footermiddel-col3-link">
                <a style={{color:'black'}} target="_blank" href="https://www.instagram.com/zenith24kec?igsh=ODlrY3N3NHU3ajI1">
                  <FaInstagram size={24} />
                </a>
              </div>
              <div className="footermiddel-col3-link">
                <a style={{color:'black'}} target="_blank" href="https://www.facebook.com/profile.php?id=100063674840778">
                  <FaFacebookF size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-container">
          <span className="footer-bottom-text">
            Copyright © 2024 ZENITh24" . All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;

// <div className="f-left-side">
//           <img src={Logo} alt="" width={100} />
//           <span className="f-left-des secondaryText">
//             Our vision is to give a best solution
//             <br />  for all people.
//           </span>
//         </div>
//         <div className="f-right-side">
//           <span className="f-right-side-title primaryText ">
//             Information
//             <br />
//           </span>

//           <span className="f-right-side-des secondaryText" >
//           <FaLocationDot /> STIGMATA TECHNO SOLUTIONS <br/> No 23, 2nd Floor, Vembuli Amman Koil
//             Street,<br/> Pazhavanthangal Chennai 600 114.<br/> (Near Chennai Airport)
//           </span>
//           <div className="f-menu">

//             <span>
//              <a href="https://stigmatatech.com/services/">Services</a>
//             </span>
//             <span>
//               <a href="https://stigmatatech.com/services/">Product</a>
//             </span>
//             <span>
//               <a href="https://stigmatatech.com/about/">About us</a>
//             </span>
//           </div>
//         </div>
