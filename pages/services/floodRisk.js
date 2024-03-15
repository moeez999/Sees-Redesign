import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function floodRisk() {
  return (
    <div>
      <div className="breeam ">
        <Navigation />
      </div>
      <div className="mt-24  h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center py-4 tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Flood Risk
          </h2>
             <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_05-flood risk assessments.png" />
          </div>
        </div>
   
        <div className="flex flex-row justify-center flex-wrap gap-8 mt-28 p-4 w-full">
          <Card
            color="#509e2f"
            title="Flood Risk"
            image="../Images/Fotolia_394708_M.jpg"
            content="To obtain planning permission for your proposed development site you will need to carry out a flood risk assessment (FRA) and ensure your site follows the guidelines laid out in the National Planning Policy Framework."
            nav="/services/FLoodRisk/FloodRiskAssessment"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
