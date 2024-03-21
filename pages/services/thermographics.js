import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function thermalModelling() {
  return (
    <div>
      <div className="breeam ">
        <Navigation />
      </div>
      <div className="my-24  h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center py-4 tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Thermography
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_09-overheating assessments.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-8 mt-28 p-4 w-full xxm:gap-60">
          <Card
            color="#509e2f"
            title="Thermographic Survey"
            image="../Images/Fotolia_394708_M.jpg"
            content="Thermographic survey is a technique used to analyse buildings by detecting infrared rays. It requires special thermal imaging cameras that visualise surface temperatures and detects anomalies to uncover possible defects in the construction"
            nav="/services/ThermoGraphy/thermographicSurvey"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
