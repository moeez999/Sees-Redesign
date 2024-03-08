import React from "react";
import Navigation from "../../components/navigation";
import ServiceCard from "../../components/serviceCards";
import Card from "../../components/ServicesCards";

export default function partLEPC_SAP() {
  return (
    <div>
      <div className="SAP ">
        <Navigation />

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="mt-24 light-grey">
        <div className="flex pt-8 flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            SAP
          </h2>
          <div className="w-24 animate__animated animate__backInRight animate__slow">
            <img src="../Service Logos/Sap.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-8 mt-28 p-4">
          <Card
            color="#509e2f"
            title="SAP for New Build"
            image="../Images/SAP/NewBuild.png"
            content="New build homes require SAP calculations to obtain planning permission before commencement of works. "
            nav="/services/SAP/sapForNewBuild"
          />
          <Card
            color="#509e2f"
            title="SAP for Extensions"
            image="../Images/extension.png"
            content="If you are planning to carry out an extension on your existing property, you will need to carry out SAP calculations to get planning permission."
            nav="/services/SAP/sapForExtensions"
          />
          <Card
            color="#509e2f"
            title="SAP for Conversions"
            image="../Images/Conversion SAPs.png"
            content="Part L1B states that changing the use of a building or converting it would require SAP calculations to be carried out to ensure it meets the efficiency standards and carbon targets."
            nav="/services/SAP/sapForConversions"
          />
        </div>
      </div>
    </div>
  );
}
