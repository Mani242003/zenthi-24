import React from "react";
import "./CustomTabItemsRight.scss";

const CustomTabItemsRight = ({header,description,icon}) => {
  return (
    <div className="customTabItemsRight_container">
      <div className="customTabItemsRight_left_container">
        {icon }
      </div>
      <div className="customTabItemsRight_right_container">
      <span className="customTabItemsRight_left_header">{header}</span>
        <span className="customTabItemsRight_left_des">
          {description}
        </span>
        
      </div>
    </div>
  );
};

export default CustomTabItemsRight;
