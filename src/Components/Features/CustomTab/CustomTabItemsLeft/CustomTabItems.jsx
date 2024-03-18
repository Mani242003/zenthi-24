import React from "react";
import "./CustomTabItems.scss";
import { AiOutlineSetting } from "react-icons/ai";

const CustomTabItems = ({header,description,icon}) => {
  return (
    <div className="customTabItems_container">
      <div className="customTabItems_left">
        <span className="customTabItems_left_header">{header}</span>
        <span className="customTabItems_left_des">
        {description}
        </span>
      </div>
      <div className="customTabItems_right">
      {icon}
      </div>
    </div>
  );
};

export default CustomTabItems;
