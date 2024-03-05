import React from "react";

const ServiceCircles = ({ numberOfCircles }) => {
  const circles = [];

  // Generate circles dynamically
  for (let i = 1; i <= numberOfCircles; i++) {
    const circleStyle = {
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 150 + 20}px`,
      height: `${Math.random() * 150 + 20}px`,
      animationDelay: `${Math.random() * 10}s`,
      animationDuration: `${Math.random() * 50 + 10}s`,
    };
    circles.push(<li key={i} style={circleStyle}></li>);
  }

  return <ul className="service-circles">{circles}</ul>;
};

export default ServiceCircles;
