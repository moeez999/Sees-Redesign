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
      <div className="mt-24 h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Water Calculations
          </h2>
          <div className="w-24 animate__animated animate__backInRight animate__slow">
            <img src="../Service Logos/Sap.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-8 mt-28 p-4">
          <Card
            color="#509e2f"
            title="Water Usage Calculations"
            image="../Images/watercalcs.jpg"
            content="This section of the building regulations is mainly concerned with water efficiency requirements. It requires all new homes and converted properties to meet new water efficiency requirements to reduce the occupants water usage within the dwelling."
            nav="/services/WaterCalculations/waterUsageCalculations"
          />
          <Card
            color="#509e2f"
            title="Water Neutrality"
            image="../Images/watercalcstop.jpg"
            content="Water Neutrality was conceived to indicate the need to reduce the overall water consumption and demand on our natural water resource. "
            nav="/services/WaterCalculations/waterNeutralityReport"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
