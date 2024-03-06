import React from "react";

const Card = ({ color, title, image, content, nav }) => {
  return (
    <div className="container-cards">
      <div className="card" style={{ "--clr": color }}>
        <div className="img-box">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p className="text-base">{content}</p>
          <a className="text-sm" href={nav}>Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
