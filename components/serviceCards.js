// React Import
import React from "react";

// Style Import
import classes from "../components/serviceCards.module.css";

const ServiceCard = (props) => {
  const { icon, heading, buttonText, onClick } = props;

  const cardStyle = {
    backgroundImage: `url(${icon})`,
  };

  return (
    <div className={`${classes.spacer} mx-5 my-7 md:inline-block block`}>
      <div className={`${classes.serviceWrapper}`}>
        <div
          className={`${classes.serviceCard} p-2 flex flex-col rounded `}
          style={cardStyle}
        >
          <div className={`flex-1`}>
            <button
              onClick={onClick}
              className={`${classes.hiddenButton} mt-2 bg-primary text-white px-4 py-2 rounded-md`}
            >
              {buttonText}
            </button>
          </div>
          <div className={`text-center`}>
            <h3
              className={`text-white font-semibold uppercase text-base px-[2px] bg-secondary rounded-md text-center`}
            >
              {heading}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
