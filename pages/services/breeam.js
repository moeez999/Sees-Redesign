import React from "react";
import Navigation from "../../components/navigation";
import ServiceCard from "../../components/serviceCards";
import Card from "../../components/ServicesCards";

export default function breeam() {
  return (
    <div>
      <div className="breeam ">
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
      <div className="mt-28  container mx-auto">
        <div className="flex flex-row justify-center items-center">
          <h2 className="text-4xl font-bold text-center tracking-tight text-secondary sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            BREEAM
          </h2>
          <div className="w-24 animate__animated animate__backInRight animate__slow">
            <img src="../Service Logos/BREEAM.png" />
          </div>
        </div>
        <div className="flex flex-row justify-center flex-wrap gap-8 mt-28 p-4">
          <Card
            color="#509e2f"
            title="Non Domestic Assessment"
            image="../Images/BREEAM Non Domestic Assessment.png"
            content="With over 10 years of experience and having worked across a range of schemes, we can help you achieve your target BREEAM rating  for your project, all the while recognising opportunities to reduce cost and eliminate risk."
            nav="/services/breeam/nonDomesticAssessment"
          />
          <Card
            color="#509e2f"
            title="Domestic Refurbishment Assessment"
            image="../Images/Domestic Air Testing.png"
            content="With over 10 years of experience and having worked across a range of schemes, we can help you achieve your target BREEAM rating  for your project, all the while recognising opportunities to reduce cost and eliminate risk. "
            nav="/services/breeam/domesticRefurbishmentAssessment"
          />
        </div>
      </div>
    </div>
  );
}
