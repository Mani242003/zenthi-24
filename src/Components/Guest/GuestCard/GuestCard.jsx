import React from 'react'
import "./GuestCard.scss"

const GuestCard = ({img,name,des,customName}) => {
  return (
    <div className='guest_card_container'  data-aos="fade-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="500">
        <img src={img} alt="" />
        <span className="guest_name">{name}</span>
        
        <span className="guest_des">{des}</span>
        {
          customName ? <span className="guest_des" style={{marginTop:'6px'}}>{customName}</span> : <></>
        }
    </div>
  )
}

export default GuestCard