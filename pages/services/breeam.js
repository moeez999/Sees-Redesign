import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function breeam() {
  return (
    <div>
      <div className="breeam ">
        <Navigation />
      </div>
      <div className="mt-24  h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center py-4 tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            BREEAM
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow">
            <img src="../White-Images/white_02-BREEAM.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-8 mt-28 p-4 w-full xxm:gap-60">
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
      <Footer />
    </div>
  );
}
