import React from "react";
import "./CustomTab.scss";
import CustomTabItemsLeft from "./CustomTabItemsLeft/CustomTabItems";
import CustomTabItemsRight from "./CustomTabItemsRight/CustomTabItemsRight";

const CustomTab = ({ middleImg1, middleImg2, TabLeftItems, TabRightItems }) => {
  return (
    <div className="Custom-tab_container">
      <div className="Custom-tab_container_col1">
        {TabLeftItems.map((item, i) => (
          <CustomTabItemsLeft
            key={i}
            header={item.title}
            description={item.des}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="Custom-tab_col2_outer-container">
        <div className="Custom-tab_container_col2 ">
          <img src={middleImg2} className="client_phone-1" alt="" />
          <img src={middleImg1} className="client_phone-2" alt="" />
        </div>
      </div>
      <div className="Custom-tab_container_col3">
        {TabRightItems.map((item, i) => (
          <CustomTabItemsRight
            key={i}
            header={item.title}
            description={item.des}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomTab;
