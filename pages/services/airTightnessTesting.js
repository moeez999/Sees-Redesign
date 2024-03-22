import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function airTightnessTesting() {
  return (
    <div>
      <div className="SAP">
        <Navigation />
      </div>
      <div className="my-24  h-auto">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl py-4 font-bold text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Airtightness Testing
          </h2>
          <div className="w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_01-air testing.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-24 mt-28 p-4 xxm:gap-32">
          <Card
            color="#509e2f"
            title="Airtightness Testing"
            image="../Images/Domestic Air Testing.png"
            content="Air permeability testing is a mandatory requirement for new buildings under Part L regulations for both domestic and non-domestic buildings."
            nav="/services/AirTightness/airtightnessTesting"
          />
          <Card
            color="#509e2f"
            title="Ventilation Testing"
            image="../Images/Commercial Air Testing.png"
            content="Part F building regs govern the ventilations requirements and as per these regulations it is a requirement to test ventilation systems in new build properties. Part F volume 1 applies to dwellings, while volume 2 applies to all buildings other than dwellings."
            nav="/services/AirTightness/ventilationTesting"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
