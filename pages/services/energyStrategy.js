import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function energyStrategy() {
  return (
    <div>
      <div className="SAP">
        <Navigation />
      </div>
      <div className="my-24  h-auto">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold py-4 text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Energy Strategy
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_03-renewable energy Assessments.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-24 mt-28 p-4 xxm:gap-32">
          <Card
            color="#509e2f"
            title="Renewable Energy/Low Carbon Report"
            image="../Images/Fotolia_33265_M.jpg"
            content="An energy strategy lays out a plan outlining how carbon and."
            nav="/services/energyStrategy/renewableEnergy"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
