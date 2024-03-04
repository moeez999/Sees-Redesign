import React from "react";
import Navigation from "../components/navigation";
import BoxWrapper from "../components/cards";

const Service = () => {
  return (
    <div>
      <Navigation />
      <div className="p-28">
        <div className="flex justify-center flex-col items-center">
          <h1 className=" text-2xl md:text-4xl xxl:text-5xl xxxl:text-7xl font-bold  p-4 xxxl:p-8">
            <span className="text-secondary">Our</span> Services
          </h1>
          <BoxWrapper />
        </div>
      </div>
    </div>
  );
};

export default Service;
