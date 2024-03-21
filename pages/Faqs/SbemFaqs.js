import React from "react";

export default function SbemFaqs() {
  return (
    <div>
      <div className="container mx-auto px-4  py-8">
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-4xl mb-[0px] animate__animated animate__backInRight animate__slow text-center font-bold mb-4 text-secondary">
            SBEM Calculations
          </h1>
          <div className="w-20 animate__animated animate__backInLeft animate__slow">
            <img src="../Service Logos/SAP.png" />
          </div>
        </div>
        <h2
          data-aos="fade-right"
          className="text-2xl text-secondary font-bold mb-2"
        >
          19. What are SBEM Calculations?
        </h2>
        <p data-aos="fade-up" className="mb-4 text-base md:text-lg lg:text-xl ">
          SBEM (Simplified Building Energy Model) calculations are a method used
          in the United Kingdom to assess and rate the energy performance of
          non-domestic buildings. SBEM calculations are required to demonstrate
          compliance with building regulations and obtain a Building Regulation
          Compliance Certificate for new non-domestic buildings and certain
          renovations or extensions.
        </p>
        <p data-aos="fade-up" className="mb-4 text-base md:text-lg lg:text-xl ">
          Here's an overview of how SBEM calculations work:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">
              Energy Performance Assessment:
            </strong>
            SBEM calculations evaluate the energy performance of a non-domestic
            building based on various factors such as the building's fabric,
            heating systems, cooling systems, ventilation, lighting, and
            renewable energy sources.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary"> Data Input:</strong> The
            calculations require detailed input data about the building's
            characteristics, including its size, orientation, construction
            materials, insulation levels, glazing types, heating and cooling
            systems, lighting efficiency, and renewable energy technologies.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">SBEM Software:</strong> SBEM
            calculations are typically performed using approved software tools
            that implement the SBEM methodology. These software tools facilitate
            the input of building data and perform the necessary calculations to
            determine the building's energy performance.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">
              Energy Performance Rating:
            </strong>
            The output of SBEM calculations is an energy performance rating
            expressed as a numerical value in kilowatt-hours per square meter
            per year (kWh/m²/year). This rating represents the predicted energy
            consumption of the building for heating, cooling, ventilation,
            lighting, and hot water production.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">Compliance:</strong> In the UK,
            non-domestic buildings must achieve a minimum level of energy
            performance to comply with building regulations. The required energy
            performance rating varies depending on factors such as the
            building's type, size, and use, as well as changes to building
            regulations over time.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary"> Improvement Measures:</strong>
            SBEM calculations can also be used to assess the impact of various
            energy efficiency measures or building design changes on the
            building's overall energy performance. This helps designers and
            builders identify opportunities to improve energy efficiency and
            meet regulatory requirements.
          </li>
        </ul>
        {/* Content for question 20 */}
        <h2
          data-aos="fade-right"
          className="text-2xl text-secondary font-bold mb-2"
        >
          20. How do I show compliance with Part L regulations?
        </h2>
        <p data-aos="fade-up" className="mb-4 text-base md:text-lg lg:text-xl ">
          To demonstrate compliance with Part L of the Building Regulations in
          the United Kingdom using SBEM (Simplified Building Energy Model)
          calculations, you typically follow these steps:
        </p>
        <ol className="list-decimal ml-6 mb-4">
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">Gather Building Data:</strong>
            Collect detailed information about the building's design,
            construction, and services. This includes data on the building's
            size, orientation, construction materials, insulation levels,
            glazing types, heating and cooling systems, ventilation, lighting,
            and any renewable energy technologies.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">
              Input Data into SBEM Software:
            </strong>
            Use approved SBEM software to input the building data gathered in
            the previous step. The software will prompt you to enter information
            about the building's geometry, construction, and services, as well
            as occupancy patterns and operational schedules.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">Run SBEM Calculation:</strong>
            Once all the required data is inputted, run the SBEM calculation
            within the software. The SBEM calculation will analyse the
            building's energy performance based on the information provided and
            produce a numerical output representing the predicted energy
            consumption of the building for heating, cooling, ventilation,
            lighting, and hot water production.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">Compliance Targets:</strong>
            Compare Results with Compare the results of the SBEM calculation
            with the compliance targets specified in Part L of the Building
            Regulations. Part L sets out minimum energy performance standards
            that buildings must meet to comply with regulations. The targets
            vary depending on factors such as the building's type, size, and
            use.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">
              Implement Energy Efficiency Measures:
            </strong>
            If the SBEM calculation indicates that the building does not meet
            the compliance targets, identify areas where energy efficiency
            improvements can be made. This may involve upgrading insulation,
            improving glazing, optimizing heating and cooling systems,
            installing energy-efficient lighting, or incorporating renewable
            energy technologies.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">Iterative Process:</strong>
            Make adjustments to the building's design or services as needed and
            rerun the SBEM calculation to assess the impact of energy efficiency
            measures on the building's energy performance. Iterate this process
            until the building meets the compliance targets specified in Part L.
          </li>
          <li className="text-base md:text-lg lg:text-xl">
            <strong className="text-secondary">Document Compliance:</strong>
            Keep records of the SBEM calculations, design decisions, and energy
            efficiency measures implemented to demonstrate compliance with Part
            L of the Building Regulations. These records may be required for
            building control approval and certification processes.
          </li>
        </ol>
        <p data-aos="fade-up" className="mb-4 text-base md:text-lg lg:text-xl ">
          By following these steps and ensuring that the building's energy
          performance meets the requirements outlined in Part L, you can
          demonstrate compliance with the Building Regulations in the UK.
        </p>
      </div>
    </div>
  );
}
