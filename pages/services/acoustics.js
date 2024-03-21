import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";
export default function acoustics() {
  return (
    <div>
      <div className="breeam ">
        <Navigation />
      </div>
      <div className="my-24  h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center py-4 tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            Acoustics
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_08-sound testing.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-8 mt-28 p-4 w-full xxm:gap-60">
          <Card
            color="#509e2f"
            title="Sound Testing"
            image="../Images/istockphoto-497748804-612x612.jpg"
            content="Part E of the building regs are concerned with the insulation of residential properties and schools. It primarily requires the testing of separating walls and floors, as well as stairs that have a separating function, to determine their sound insulation levels."
            nav="/services/Acoustics/soundTesting"
          />
          <Card
            color="#509e2f"
            title="Noise Impact Assessment"
            image="../Images/Noise-Impact-scaled.jpg"
            content="SEES provides noise impact surveys for a variety of different projects to help you obtain planning permission for your development. This will conform to the relevant standards and requirements of either building control, local planners, or the environmental health department."
            nav="/services/Acoustics/NoiseImpactAssessment"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
