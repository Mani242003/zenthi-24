import React from "react";
import "./Technical.scss";
import bug from "../../../Images/2024/budfix.jpg";
import quiz from "../../../Images/2024/qiz.jpg";
import PPT from "../../../Images/2024/presentation.jpeg";
import web from "../../../Images/2024/webDev.jpg";
import battel from "../../../Images/2024/battel.jpg";

import N_T_C from "../NonTechnical/NTC/N_T_C";

const Technical = () => {
  return (
    <section className="tech_wrapper" id="tech">
      <div className="tech_container"  >
        <span className="title">Technical Events</span>
       <div className="tect_content1">
       <N_T_C name="1.BUGZEN" sub_name=" (Bug Fixing)" img={bug} time1="10:00" time2="3:00"  />
        <N_T_C name="2.QUIZEN" sub_name="(Technical Quiz)" img={quiz} time1="10:00" time2="3:00"  />
        <N_T_C name="3.THESISZEN" sub_name="(Paper Presentation)" img={PPT} time1="10:00" time2="3:00"  />
       </div>
        <div className="tectcontent2">
        <N_T_C name="4.WEBZEN" sub_name="(Web Designing)" img={web} time1="10:00" time2="3:00"  />
        <N_T_C name="5.CODEZEN" sub_name="(Battel of Code)" img={battel} time1="10:00" time2="3:00"  />
        </div>
        
     

        
      </div>
    </section>
  );
};

export default Technical;
