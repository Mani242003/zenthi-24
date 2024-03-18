import React from "react";
import "./Guest.scss";
import GuestCard from "./GuestCard/GuestCard";
import guest1 from "../../Images/2024/g1.jpeg";
import guest2 from "../../Images/2024/g2.jpeg";
import guest3 from "../../Images/2024/g3.png";
import guest4 from "../../Images/2024/g4f.jpeg";


const Guest = () => {
  return (
    <div className="guest_container" id="guest">
      <span className="guestTitel">Guest OF Honour</span>
     <div className="guest_main_content">
     <div className="guest_container1">
        <GuestCard
          img={guest1}
          name="CHAIRPERSON"
          des="Dr.S. Nalini Selvaraj, M.Com., M.Phil., Ph.D"
        />
        <GuestCard
          img={guest2}
          name="DIRECTORS"
          des="Mrs. Merilyn Jemmimah Amirtharaj, BE., MBA"
          customName= "Mr.S. Amirtharaj, B.Tech., MBA(UK)."
         
        />
      </div>
      <div className="guest_container2">
        <GuestCard
          img={guest3}
          name="DEAN ACADEMICS"
          des="Mr. Praveen Mani, B.E., MBA.,"
        />
        <GuestCard
          img={guest4}
          name="HOD"
          des="Dr.Ramesh Babu Durai, M.E..Ph.D"
          customName= "Department of Information Technology"
        />
      </div>
     </div>
    </div>
  );
};

export default Guest;
