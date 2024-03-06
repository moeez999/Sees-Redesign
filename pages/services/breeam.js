import React from "react";
import Navigation from "../../components/navigation";
import ServiceCard from "../../components/serviceCards";
import Card from "../../components/ServicesCards";

export default function breeam() {
  return (
    <div>
      <Navigation />
      <div className="pt-28">
        <h2 className="text-4xl font-bold text-center tracking-tight text-secondary sm:text-6xl animate__animated animate__flip animate__slow">
          BREEAM
        </h2>
        <div className="grid grid-cols-4 mt-4 p-4">
          <Card
            color="#509e2f"
            title="Non-domestic Assessment"
            image="../Images/BREEAM Non Domestic Assessment.png"
            content="With over 10 years of experience and having worked across a range of schemes, we can help you achieve your target BREEAM rating  for your project, all the while recognising opportunities to reduce cost and eliminate risk."
            nav="/services/breeam/nonDomesticAssessment"
          />
          <Card
            color="#509e2f"
            title="Domestic Refurbishment Assessment"
            image="../Images/Domestic Air Testing.png"
            content="With over 10 years of experience and having worked across a range of schemes, we can help you achieve your target BREEAM rating  for your project, all the while recognising opportunities to reduce cost and eliminate risk. "
            nav=""
          />
          <Card
            color="#509e2f"
            title="Building User Guide/O&M Manual"
            image="https://i.postimg.cc/t4w95jsf/img-01.png"
            content="With over 10 years of experience and having worked across a range of schemes, we can help you achieve your target BREEAM rating  for your project, all the while recognising opportunities to reduce cost and eliminate risk. "
            nav=""
          />
        </div>
      </div>
    </div>
  );
}
