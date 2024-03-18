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

      <div className="my-28 flex flex-row gap-4 container mx-auto ">
        <div className="container mx-auto px-4 py-8 max-w-xs sticky top-0 Shadow-custom ">
          <h2 className="text-3xl text-secondary font-bold mt-8 mb-4">FAQs</h2>
          <ul>
            <li
              className="text-lg font-semibold text-primary my-1"
              onClick={() => handleFaqsClick("BREEAM")}
            >
              BREEAM
            </li>
            <li
              className="text-lg font-semibold text-primary my-1"
              onClick={() => handleFaqsClick("BuildingLifeCycle")}
            >
              Building Life Cycle
            </li>
            <li
              className="text-lg font-semibold text-primary my-1"
              onClick={() => handleFaqsClick("ThermalModelling")}
            >
              Thermal Modelling
            </li>
            <li
              className="text-lg font-semibold text-primary my-1"
              onClick={() => handleFaqsClick("ThermalBridging")}
            >
              Thermal Bridging
            </li>
            <li
              className="text-lg font-semibold text-primary my-1"
              onClick={() => handleFaqsClick("SapCalculations")}
            >
              SAP Calculations
            </li>
            <li
              className="text-lg font-semibold text-primary my-1"
              onClick={() => handleFaqsClick("AirTightness")}
            >
              AirTightness
            </li>
            <li
              className="text-lg font-semibold text-primary my-1"
              onClick={() => handleFaqsClick("WaterCalculations")}
            >
              Water Calculations
            </li>
            <li
              className="text-lg font-semibold text-primary my-1"
              onClick={() => handleFaqsClick("EnergyStrategy")}
            >
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
