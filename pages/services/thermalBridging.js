import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function thermalBridging() {
  return (
    <div>
      <div className="breeam">
        <Navigation />
      </div>
      <div className="my-24  h-auto">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center py-4 tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Thermal Bridging
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_09-overheating assessments.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-8 mt-28 p-4 w-full xxm:gap-32">
          <Card
            color="#509e2f"
            title="Thermal Bridging Calculations"
            image="../Images/Thermal-Bridging-Images/THermal Gun.webp"
            content="SAP and SBEM calculations both incorporate heat loss."
            nav="/services/ThermalBridging/thermalBridgingCalculations"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
