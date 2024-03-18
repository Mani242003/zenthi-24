import React, { Suspense } from "react";
import "./Challenges.scss";
import banner from "../../Images/2024/ZENIThf.png";

const Challenges = () => {
  return (
    <section className="challenges_wrapper" >
      <div className="challenges_container"  data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
      
      >
        <span className="title" > About ZENITh24"</span>
        {/* <LazyLoadImage src={banner} width={200}/> */}
        <div className="about_innerContainer " style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
          <img src={banner} alt="" width={315} />

          <span className="des">
            Welcome to{" "}
            <span style={{ color: "#EE5312", fontWeight: "bolder" }}>
              ZENITh24"
            </span>{" "}
            Symposium, where innovation meets inspiration! Join us for a fusion
            of technical prowess and non-technical excitement, presented by the
            Department of Information Technology (IT).
          </span>
        </div>

        {/* <div className="challenges_left">
          <div className="challenges_left_title">
            <span className="challenges_left_title_text">
              About <span>WEBIT</span> 2k'24...
            </span>
          </div>
          <div className="challenges_left_content-1" data-aos="fade-down "
     data-aos-anchor-placement="center-bottom" data-aos-duration="2500">
            <div className="challenges_left_content_left">
              <img src={banner} alt="" />
            </div>
            <div className="challenges_left_content_right">
              <span className="challenges_left_content_right_title">
                UNORGANISED KITCHENS
              </span>
              <span className="challenges_left_content_right_des">
                Kitchens find it difficult to differentiate fresh / running
                orders. Also no system is in place to prompt the avg.
                preparation time for each food
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Challenges;
