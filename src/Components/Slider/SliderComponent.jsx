import React from "react";
import "./Slider.scss";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { sliderDate } from "../../Data/Dummy";
import { useEffect } from "react";

const SliderComponent = () => {
  useEffect(() => {
    getMenuStyle();
  }, []);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  const getMenuStyle = () => {
    if (document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 1;
    }
    if (!document.documentElement.clientWidth <= 800) {
      // console.log(!menuOpened);
      return 4;
    }
  };

  return (
    <section className="slider_wrapper" id="screenshot">
      <div className="slider_container">
        <div className="slider_header">
          <span className="slider_header_text">
            <span style={{color:'black',textShadow:'none'}}>Our</span> <span>Department</span>
            <span></span>
          </span>
          <span className="slider_header_des" style={{opacity:0.6,fontSize:'15px',fontWeight:'500',marginBottom:'10px'}}>
          Empowering innovation through technology, driving seamless connectivity, and enhancing productivity (WEBIT-23)
          </span>
        </div>
        <div className="slider_main_content">
          <Slider {...settings} slidesToShow={getMenuStyle()}>
            {sliderDate.map((item, i) => (
              <img key={i} src={item.img} alt="" className="slider_img" />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
