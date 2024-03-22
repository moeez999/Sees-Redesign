import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function dayLightining() {
  return (
    <div>
      <div className="SAP">
        <Navigation />
      </div>
      <div className="my-24  h-auto">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold py-4 text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Daylighting
          </h2>
          <div className=" w-32 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_04-day light calculations.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-24 mt-28 p-4 xxm:gap-32">
          <Card
            color="#509e2f"
            title="Daylighting Calculation"
            image="../Images/Daylighting/Daylight.JPG"
            content="New build commercial properties have to adhere to building regulations Part L2A."
            nav="/services/Daylighting/daylightingCalculations"
          />
          <Card
            color="#509e2f"
            title="Sunlight Analysis"
            image="../Images/Daylighting/Sunlight.JPG"
            content="EPC/SBEM for existing commercial buildings are governed by Part L2B regulations."
            nav="/services/Daylighting/sunlightAnalysis"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
