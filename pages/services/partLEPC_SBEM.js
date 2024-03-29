import React from "react";
import Navigation from "../../components/navigation";
import ServiceCard from "../../components/serviceCards";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function partLEPC_SBEM() {
  return (
    <div>
      <div className="SAP">
        <Navigation />
      </div>
      <div className="mt-24 fextraboldont- h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold py-4 text-center tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Part L SBEM (Non-Domestic)
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_12 (SBEM)-environmental performance certificates for non domestic buildings.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-28 md:gap-24 mt-28 p-4 xxm:gap-32">
          <Card
            color="#509e2f"
            title="SBEM For Commercial New Builds"
            image="../Images/SAP/NewBuild.png"
            content="New build commercial properties have to adhere to building."
            nav="/services/SapNonDomestic/sbemForCommercialNewBuilds"
          />
          <Card
            color="#509e2f"
            title="SBEM for Commercial Existing Buildings"
            image="../Images/extension.png"
            content="EPC/SBEM for existing commercial buildings are governed by Part L2B."
            nav="/services/SapNonDomestic/sbemCommercialExistingBuildings"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
