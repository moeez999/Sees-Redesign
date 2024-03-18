import React from "react";

export default function ThermalModellingFaqs() {
  return (
    <div>
      <div className="container mx-auto px-4 Shadow-custom py-8">
        <div className="mx-auto p-6">
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-4xl mb-[0px] animate__animated animate__backInRight animate__slow text-center font-bold mb-4 text-secondary">
              Over Heating
            </h1>
            <div className="w-20 animate__animated animate__backInLeft animate__slow">
              <img src="../Service Logos/Thermal Modelling.png" />
            </div>
          </div>
          {/* Content for question 9 */}
          <h2
            data-aos="fade-right"
            className="text-2xl text-secondary font-bold mb-2"
          >
            9. At what stage do I need an overheating assessment?
          </h2>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            It’s important to carry out the TM59 assessment and report at the
            design stage of a project.  If the initial design is assessed and is
            falling short of the requirements, it allows for changes to be made
            prior to construction beginning.  Alterations to the design may
            include resizing windows, increasing the window opening capability,
            amending the glass specification to reduce solar gain, or perhaps
            amending the layout so that rooms are different sizes or oriented
            differently.
          </p>
          {/* Content for question 10 */}
          <h2
            data-aos="fade-right"
            className="text-2xl text-secondary font-bold mb-2"
          >
            10. What criteria does an overheating assessment follow?
          </h2>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            A number of guides and standards are available for the assessment of
            overheating in buildings. CIBSE guides TM59 covers overheating in
            residential buildings. CIBSE TM52 covers overheating in commercial
            buildings. BB101 covers overheating in educational buildings.
          </p>
          {/* Content for question 11 */}
          <h2
            data-aos="fade-right"
            className="text-2xl text-secondary font-bold mb-2"
          >
            11. What are the key factors in a building overheating?
          </h2>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            A number of factors can impact the internal temperatures of a
            building but below are a few key factors:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="text-base md:text-lg lg:text-xl">Solar Gains</li>
            <li className="text-base md:text-lg lg:text-xl">
              Ventilation rates & Strategy
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              Internal gains (people, equipment, plant, lighting)
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              Internal plant (heat-generating plant i.e. DHW storage)
            </li>
          </ul>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            All of the above can contribute to a building overheating as they
            will raise the internal temperatures unless correctly designed and
            considered.
          </p>
          {/* Content for question 12 */}
          <h2
            data-aos="fade-right"
            className="text-2xl text-secondary font-bold mb-2"
          >
            12. How do we stop overheating?
          </h2>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            Each overheating assessment is unique to the development so the
            route to limit overheating is different for each assessment.
            however, the below outlines some mitigation strategies against
            overheating:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="text-base md:text-lg lg:text-xl">
              Architectural/local shading.
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              Robust natural ventilation strategy
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              Solar control glazing
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              Building layout & orientation designed to reduce solar
              gains/increased temperatures in sensitive areas
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              Building fabric design, specifically thermal mass for the ability
              for heat to be dispersed/retained within the building structure.
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              Mechanical cooling
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
