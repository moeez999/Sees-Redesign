import React from "react";
import Navigation from "../components/navigation";
import ServicesCards from "../components/cards";

const Service = () => {
  return (
    <div className="relative area">
      <ul className="service-circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div data-aos="fade-right">
        <Navigation />
      </div>
      <div className="py-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 w-full  z-[-10]">
        <div className="flex justify-center flex-col items-center">
          <h1
            className=" text-2xl md:text-4xl xxl:text-5xl xxxl:text-7xl font-bold  p-4 xxxl:p-8"
            data-aos="fade-in"
          >
            <span className="text-secondary">Our</span> Services
          </h1>
          <ServicesCards />
        </div>
      </div>
    </div>
  );
};

export default Service;
