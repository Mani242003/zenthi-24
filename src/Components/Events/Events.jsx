import React from "react";
import "./Events.scss";
import tech from "../../Images/2024/tech.png";
import nonTech from "../../Images/2024/non-tech.png";
import { Link } from "react-scroll";

const Events = () => {
  return (
    <section className="events_wrapper" id="events">
      <div className="event_container">
        <span className="event_title_header">Events</span>
        <span className="event_title_des">
          Explore the following Events during the symposium.
        </span>

        <div className="event_contents">
          <div className="content"  data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500">
            <img src={tech} alt="" />
            <span className="eventName">Technical Events</span>
            <span className="eventdes">
              Unleash innovation, ignite competition - where code meets
              creativity!
            </span>
            <Link to="tech" spy={true} offset={-70} duration={600}>
              <button className="button">Know more</button>
            </Link>
          </div>

          <div className="content"  data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500">
            <img src={nonTech} alt="" />
            <span className="eventName">Non-Technical Events</span>
            <span className="eventdes">
            Elevate excitement, ignite camaraderie - where fun meets strategy!
            </span>
            <Link to="non-tech" spy={true} offset={-70} duration={600}>
              <button className="button">Know more</button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;
