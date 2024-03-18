import React from "react";

export default function BuildingLifeCycleFaqs() {
  return (
    <div>
      <div className="container mx-auto px-4  py-8">
        <div className="mx-auto p-6">
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-4xl mb-[0px] animate__animated animate__backInRight animate__slow text-center font-bold mb-4 text-secondary">
              Building Life Cycle Faqs
            </h1>
            <div className="w-20 animate__animated animate__backInLeft animate__slow">
              <img src="../Service Logos/Building Life Cycle.png" />
            </div>
          </div>
          <h2
            data-aos="fade-right"
            className="text-2xl text-secondary font-bold mb-2"
          >
            6. What is Building LCA?
          </h2>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            Building LCA stands for Building Life Cycle Assessment. It is a
            methodological framework used to evaluate the environmental impacts
            associated with all stages of a building's life cycle, from raw
            material extraction and manufacturing to construction, use,
            maintenance, and eventual demolition or deconstruction.
          </p>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            Building LCA aims to quantify and assess the environmental burdens
            and potential impacts of a building in terms of resource
            consumption, energy use, greenhouse gas emissions, pollution, and
            other indicators. This holistic approach considers various aspects
            of a building's life cycle, including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">Materials:</strong> Assessing
              the environmental impacts of building materials, including
              extraction, processing, transportation, and disposal.
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              <strong className="text-secondary"> Construction:</strong>
              Evaluating the environmental impacts associated with the
              construction process, such as energy use, waste generation, and
              site disturbance.
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">Operation:</strong> Analysing
              the energy consumption, water use, and other resource utilization
              during the operational phase of the building, including heating,
              cooling, lighting, and ventilation.
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">
                Maintenance and Renovation:
              </strong>
              Considering the environmental impacts associated with building
              maintenance activities, renovations, and upgrades over the
              building's lifespan.
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">End of Life:</strong> Assessing
              the environmental impacts of demolition, deconstruction, and
              disposal or recycling of building materials at the end of the
              building's life cycle.
            </li>
          </ul>
          {/* Content for question 7 */}
          <h2
            data-aos="fade-right"
            className="text-2xl text-secondary font-bold mb-2"
          >
            7. What is Whole Life Carbon Assessment?
          </h2>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            A Whole Life Carbon Assessment (WLCA) is a methodology used to
            evaluate the carbon emissions associated with a building or
            infrastructure project throughout its entire life cycle. Unlike
            traditional carbon assessments that focus solely on operational
            carbon emissions (those generated during the use phase of a
            building), WLCA considers emissions from all stages of the life
            cycle, including:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">Embodied Carbon:</strong> This
              refers to the carbon emissions associated with the extraction,
              manufacturing, transportation, assembly, and disposal of building
              materials and components.
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">Operational Carbon:</strong>
              These are the carbon emissions generated during the operational
              phase of the building, including energy consumption for heating,
              cooling, lighting, ventilation, and other activities.
            </li>
            <li className="text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">End of Life Carbon:</strong>
              This includes the carbon emissions associated with the demolition,
              deconstruction, and disposal or recycling of building materials at
              the end of the building's life cycle.
            </li>
          </ul>
          {/* Content for question 8 */}
          <h2
            data-aos="fade-right"
            className="text-2xl text-secondary font-bold mb-2"
          >
            8. Difference between LCA and Whole Life Carbon Assessment?
          </h2>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            Life Cycle Assessment (LCA) and Whole Life Carbon Assessment (WLCA)
            are both methodologies used to evaluate the environmental impacts of
            products or systems, but they focus on different aspects and
            metrics. Here's a comparison:
          </p>
          <div className="mb-4">
            <h3 className="text-2xl text-secondary font-bold mb-4">1. Scope</h3>
            <p className="mb-4 text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">LCA:</strong> LCA assesses a
              wide range of environmental impacts associated with a product,
              process, or system throughout its entire life cycle. This includes
              not only carbon emissions but also other environmental indicators
              such as energy use, resource depletion, water consumption, air and
              water pollution, and waste generation.
            </p>
            <p className="mb-4 text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">WLCA:</strong> WLCA
              specifically focuses on assessing the carbon emissions associated
              with a building or infrastructure project throughout its entire
              life cycle. While LCA considers a broader range of environmental
              impacts, WLCA zooms in on carbon emissions and their contribution
              to climate change.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl text-secondary font-bold mb-4">
              2. Metrics
            </h3>
            <p className="mb-4 text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">LCA:</strong> LCA uses various
              environmental impact categories to quantify the environmental
              performance of a product or system. These categories can include
              global warming potential (carbon emissions), acidification,
              eutrophication, ozone depletion, human toxicity, and others.
            </p>
            <p className="mb-4 text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">WLCA:</strong> WLCA primarily
              focuses on quantifying carbon emissions or carbon dioxide
              equivalents (CO2e) associated with a building or infrastructure
              project. It aims to provide a comprehensive understanding of the
              project's contribution to climate change.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl text-secondary font-bold mb-4">
              3. Application
            </h3>
            <p className="mb-4 text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">LCA:</strong> LCA is widely
              used across different sectors to assess the environmental impacts
              of products, processes, and systems, including buildings,
              transportation, energy production, consumer goods, and more.
            </p>
            <p className="mb-4 text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">WLCA:</strong> WLCA is
              specifically tailored for assessing the carbon emissions of
              buildings and infrastructure projects. It is commonly used in the
              construction and building industry to support sustainable design,
              construction, and operation practices.
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl text-secondary font-bold mb-4">4. Focus</h3>
            <p className="mb-4 text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">LCA:</strong> LCA considers all
              environmental impacts, allowing stakeholders to identify
              trade-offs and hotspots across different impact categories. It
              provides a holistic view of the environmental performance of a
              product or system.
            </p>
            <p className="mb-4 text-base md:text-lg lg:text-xl">
              <strong className="text-secondary">WLCA:</strong> WLCA focuses
              specifically on carbon emissions, reflecting the growing
              importance of addressing climate change concerns and reducing
              greenhouse gas emissions in the built environment.
            </p>
          </div>
          <p
            data-aos="fade-up"
            className="mb-4 text-base md:text-lg lg:text-xl "
          >
            In summary, while both LCA and WLCA are methodologies used to assess
            environmental impacts, LCA provides a broader assessment covering
            various environmental indicators, whereas WLCA zooms in on carbon
            emissions to evaluate a building or infrastructure project's
            contribution to climate change.
          </p>
        </div>
      </div>
    </div>
  );
}
