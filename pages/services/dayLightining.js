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
      <div className="mt-24  h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold py-4 text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Daylighting
          </h2>
          <div className=" w-32 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_04-day light calculations.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-8 mt-28 p-4">
          <Card
            color="#509e2f"
            title="Daylighting Calculation"
            image="../Images/Daylighting/Daylight.JPG"
            content="New build commercial properties have to adhere to building regulations Part L2A, which focuses on the properties carbon emission rates, primary energy consumption, heating + cooling demand, and fabric efficiency."
            nav="/services/Daylighting/daylightingCalculations"
          />
          <Card
            color="#509e2f"
            title="Sunlight Analysis"
            image="../Images/Daylighting/Sunlight.JPG"
            content="EPC/SBEM for existing commercial buildings are governed by Part L2B regulations which are much less stringent than Part L2A regulations used for New Builds."
            nav="/services/Daylighting/sunlightAnalysis"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
