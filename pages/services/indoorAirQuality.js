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
      <div className="my-24  h-auto">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold py-4 text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Indoor Air Quality
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_21-air.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-24 mt-28 p-4 xxm:gap-32">
          <Card
            color="#509e2f"
            title="IAQ Plan and Testing"
            image="../Images/IndoorAirQuality/IMG_0009.png"
            content="Indoor air quality (IAQ) is crucial for public health."
            nav="/services/IndoorAirQuality/IAQPlan"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
