import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function waterCalculations() {
  return (
    <div>
      <div className="SAP">
        <Navigation />
      </div>
      <div className="my-24  h-auto">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl py-4 font-bold text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Water Calculations
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-24 animate__animated animate__backInRight animate__slow">
            <img src="../Service Logos/Water Calculations.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-24 mt-28 p-4">
          <Card
            color="#509e2f"
            title="Water Usage Calculations"
            image="../Images/watercalcs.jpg"
            content="This section of the building regulations is mainly."
            nav="/services/WaterCalculations/waterUsageCalculations"
          />
          <Card
            color="#509e2f"
            title="Water Neutrality"
            image="../Images/watercalcstop.jpg"
            content="Water Neutrality was conceived to indicate the need to."
            nav="/services/WaterCalculations/waterNeutralityReport"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
