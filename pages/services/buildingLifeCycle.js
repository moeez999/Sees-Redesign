import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function buildingLifeCycle() {
  return (
    <div>
      <div className="breeam ">
        <Navigation />
      </div>
      <div className="my-24  h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center py-4 tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Building Life Cycle
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_23-carbon lifecycle stage.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-8 mt-28 p-4 w-full xxm:gap-60">
          <Card
            color="#509e2f"
            title="Life Cycle Assessment (LCA)"
            image="../Images/Fotolia_394708_M.jpg"
            content="A life cycle assessment evaluates the environmental impact of a product/process over the course of its life cycle. Most assessment techniques are primarily concerned with operational carbon, but LCA takes a different approach and analyses the embodied carbon, from raw material supply and manufacturing stage to end of life disposal stage."
            nav="/services/BuildingLifeCycle/lifeCycleAssessment"
          />
          <Card
            color="#509e2f"
            title="Whole Life Carbon Assessment"
            content="A WLC assessment is concerned with emissions from all life-cycle phases (A1-C4), encompassing both embodied and operational carbon together, unlike building LCA which only focuses on embodied carbon."
            image="../Images/Fotolia_33265_M.jpg"
            nav="/services/BuildingLifeCycle/wholeLifeCarbonAssessment"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
