import React from "react";
import Navigation from "../../components/navigation";
import ServiceCard from "../../components/serviceCards";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function indoorAirQuality() {
  return (
    <div>
      <div className="SAP">
        <Navigation />
      </div>
      <div className="mt-24  h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold py-4 text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
Indoor Air Quality
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <div className=" w-32 animate__animated animate__backInRight animate__slow ">
            <img src="../Service Logos/Daylight calculations.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-8 mt-28 p-4">
          <Card
            color="#509e2f"
            title="IAQ Plan and Testing"
            image="../Images/IndoorAirQuality/IMG_0009.png"
            content="Indoor air quality (IAQ) is crucial for public health, regulatory compliance, energy efficiency, and environmental sustainability. Poor IAQ can exacerbate health issues, while adherence to regulations ensures occupant safety. "
            nav="/services/IndoorAirQuality/IAQPlan"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
