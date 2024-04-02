import React from 'react'
import "./NonTechnical.scss"
// import Cards1 from '../Technical/Cards1/Cards1'
import eGames from "../../../Images/2024/eGames.jpg";
import treasureHunt from "../../../Images/2024/TH.jpg";
import foodFun from "../../../Images/2024/ff.jpeg";
import mm from "../../../Images/2024/MM.jpg";
import connection from "../../../Images/2024/connection.jpg";
import N_T_C from './NTC/N_T_C';



const NonTechnical = () => {
  return (
    <section className="tech_wrapper" id="non-tech">
    <div className="non_tech_container"
    >
      <span className="title">Non-<span>Technical Events</span> </span>


      <div className="N_T_C_1" >
        <N_T_C name="1.E-Games" sub_name="(PUBG,FREE FIRE)" img={eGames} time1="10:00" time2="3:00" />
        <N_T_C id={true} name="2.Treasure Hunt"  img={treasureHunt} time1="10:00" time2="3:00" />
        <N_T_C name="3.Food Fun" img={foodFun} time1="10:00" time2="3:00" />
         
      </div>
      <div className="N_T_C_2">
      <N_T_C id={true} name="4.Murder Mystery"  img={mm} time1="10:00" time2="3:00" />
      <N_T_C  name="5.Connection"  img={connection} time1="10:00" time2="3:00" />

      </div>

      {/* <Cards1 name="1.E-Games (PUBG,FREE FIRE)" img={eGames} id={true} />
      <Cards1 name="2.Treasure Hunt" img={treasureHunt} id={true}  />
      <Cards1 name="" img={foodFun} />
      <Cards1 name="" img={photography} id={true}  />
      // <Cards1 name="5." img={murderMystery}  id={true} />
      <Cards1 name="" img={connection} id={true} /> */}


      
    </div>
  </section>
  )
}

export default NonTechnical