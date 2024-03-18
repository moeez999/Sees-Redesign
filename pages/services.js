import React from "react";
import Navigation from "../components/navigation";
import ServicesCards from "../components/cards";
import Footer from "./../components/footer";

const Service = () => {
  return (
    <div className="">
      <div data-aos="fade-right" className="service-s">
        <Navigation />
      </div>
      <div className="pt-28 absolute top-0 left-1/2 transform -translate-x-1/2 w-full  z-[-10]">
        <div className="flex justify-center flex-col items-center">
          <h1 className=" text-2xl md:text-4xl xxl:text-5xl xxxl:text-7xl font-bold  p-4 xxxl:p-8 animate__animated animate__lightSpeedInRight">
            <span className="text-secondary">Our</span> Services
          </h1>
          <ServicesCards />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Service;
