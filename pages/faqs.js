import React, { useState } from "react";
import Navigation from "../components/navigation";
import BreeamFaqs from "./Faqs/breeamFaqs";
import BuildingLifeCycleFaqs from "./Faqs/buildingLifeCycleFaqs";
import ThermalModellingFaqs from "./Faqs/thermalModellingFaqs";
import ThermalBridgingFaqs from "./Faqs/thermalBridgingFaqs";
import SAPCalculations from "./Faqs/sapFaqs";
import AirTightnessFaqs from "./Faqs/AirTightnessFaqs";
import WaterCalculationsFaqs from "./Faqs/waterCalculationsFaqs";
import EnergyStrategyFaqs from "./Faqs/energyStrategyFaqs";
import Footer from "./../components/footer";

const Faqs = () => {
  const [activeFaqs, setActiveFaqs] = useState("BREEAM");

  const handleFaqsClick = (faqsType) => {
    setActiveFaqs(faqsType);
  };

  return (
    <div>
      <Navigation />

      <div className="my-28 flex flex-row Shadow-custom container mx-auto ">
        <div className="container mx-auto px-4 bg-secondary py-8 max-w-xs sticky top-0  h-screen">
          <div className="my-4">
            <img src="../Images/faq.png" />
          </div>
          <ul>
            <li
              className="text-lg font-semibold text-white my-1 flex items-center gap-2"
              onClick={() => handleFaqsClick("BREEAM")}
            >
              <img className="w-6" src="../White-Images/white_02-BREEAM.png" />
              BREEAM
            </li>
            <li
              className="text-lg font-semibold text-white my-1 flex items-center gap-2"
              onClick={() => handleFaqsClick("BuildingLifeCycle")}
            >
              <img
                className="w-6"
                src="../White-Images/white_10-Energy strategies for houses.png"
              />
              Building Life Cycle
            </li>
            <li
              className="text-lg font-semibold text-white my-1 flex items-center gap-2"
              onClick={() => handleFaqsClick("ThermalModelling")}
            >
              <img
                className="w-6"
                src="../White-Images/white_09-overheating assessments.png"
              />
              Thermal Modelling
            </li>
            <li
              className="text-lg font-semibold text-white my-1 flex items-center gap-2"
              onClick={() => handleFaqsClick("ThermalBridging")}
            >
              <img
                className="w-6"
                src="../White-Images/white_09-overheating assessments.png"
              />
              Thermal Bridging
            </li>
            <li
              className="text-lg font-semibold text-white my-1 flex items-center gap-2"
              onClick={() => handleFaqsClick("SapCalculations")}
            >
              <img
                className="w-6"
                src="../White-Images/white_11 (SAP) -environmental performance certificates for houses.png"
              />
              SAP Calculations
            </li>
            <li
              className="text-lg font-semibold text-white my-1 flex items-center gap-2"
              onClick={() => handleFaqsClick("AirTightness")}
            >
              <img
                className="w-6"
                src="../White-Images/white_01-air testing.png"
              />
              AirTightness
            </li>
            <li
              className="text-lg font-semibold text-white my-1 flex items-center gap-2"
              onClick={() => handleFaqsClick("WaterCalculations")}
            >
              <img
                className="w-6"
                src="../White-Images/white_06-water calculations.png"
              />
              Water Calculations
            </li>
            <li
              className="text-lg font-semibold text-white my-1 flex items-center gap-2"
              onClick={() => handleFaqsClick("EnergyStrategy")}
            >
              <img
                className="w-6"
                src="../White-Images/white_10-Energy strategies for houses.png"
              />
              Energy Strategy
            </li>
            {/* Add more FAQ categories as needed */}
          </ul>
        </div>
        <div>
          {activeFaqs === "BREEAM" && <BreeamFaqs />}
          {activeFaqs === "BuildingLifeCycle" && <BuildingLifeCycleFaqs />}
          {activeFaqs === "ThermalModelling" && <ThermalModellingFaqs />}
          {activeFaqs === "ThermalBridging" && <ThermalBridgingFaqs />}
          {activeFaqs === "SapCalculations" && <SAPCalculations />}
          {activeFaqs === "AirTightness" && <AirTightnessFaqs />}
          {activeFaqs === "WaterCalculations" && <WaterCalculationsFaqs />}
          {activeFaqs === "EnergyStrategy" && <EnergyStrategyFaqs />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faqs;
