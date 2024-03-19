import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";

import ContactForm from "../../../components/contactform";

export default function overHeatingAnalysis() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="over-heat h-64 mt-24 py-14 flex items-center justify-center">
        <h1 className="mt-2  px-4 py-2 rounded-xl font-extrabold  text text-3xl  text-shadow-black   text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
          Overheating Assessment
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-4 mb-8 container mx-auto">
        <div className="shadow-xl w-full">
          <div className="relative isolate overflow-hidden bg-white px-6 py-4 sm:py-6 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none  lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full   lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="">
                    <p className="text-2xl font-extrabold text-secondary leading-7">
                      Why you need CIBSE TM52, TM59 & Part O: Overheating
                      Assessments
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      Overheating is an area of growing concern for building
                      design, with global temperature rises presenting complex
                      challenges when it comes to balancing occupant comfort,
                      health and wellbeing against the need for energy and
                      carbon reductions. The emergence of building regulations
                      in recent years, such as Part O in the UK, and
                      methodologies, such as CIBSE TM52 and TM59, are helping
                      designers to better predict the risk of overheating, so
                      that measures can be implemented to mitigate these risks
                      early within the design process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="text-base leading-7 font-semibold text-secondary ">
                    <p
                      className="mt-4 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Building Regulations
                    </p>
                    <p className="mt-8 text-primary">
                      Approved Document O was released in December 2021 and sets
                      out two methods for calculating and assessing overheating
                      in domestic properties. The main requirements are to
                      demonstrate the project limit unwanted solar gains, and
                      provides an adequate means to remove heat from indoor
                      environment
                    </p>

                    <h2
                      className="mt-16 text-2xl font-semibold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      Compliance is demonstrated by either of the following
                      methods:
                    </h2>
                    <h2
                      className="mt-16 text-2xl font-semibold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      1. Simplified Method
                    </h2>
                    <p className="mt-6 text-primary font-normal">
                      Which categorizes buildings according to location and
                      cross ventilation applicability. For this method
                      compliance is based on maximum glazing areas; minimum
                      opening areas.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-semibold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      2. Dynamic Thermal Modelling
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      This is in accordance with the CIBSE TM59 methodology but
                      with additional limitations.
                    </p>
                    <h2
                      className="my-8 text-2xl font-bold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      Criteria to assess overheating risk for domestic and
                      commercial settings
                    </h2>

                    <div>
                      <img src="../../Images/3.jpg" />
                    </div>

                    <h2
                      className="mt-16 text-2xl font-semibold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      TM59-For domestic buildings
                    </h2>
                    <p className="mt-8 text-primary font-medium">
                      CIBSE Document TM59 offers a standardised approach to
                      predicting overheating in homes. The approach is valid for
                      new build as well as major refurbishments.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-semibold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      Criteria for naturally ventilated homes
                    </h2>
                    <h2
                      className="mt-16 text-2xl font-semibold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      Criterion 1
                    </h2>
                    <p className="mt-8 text-primary font-medium">
                      Hours of exceedance (living rooms, kitchens and bedrooms).
                      The operative temperature cannot exceed the threshold
                      comfort temperature (Tmax) by 1°C or more for over 3% of
                      occupied hours between May-September. Tmax is a function
                      of the outdoor running mean temperature.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Criterion 2
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      For bedrooms only, from 10pm to 7am the operative
                      temperature shall not exceed 26°C for more than 1% of
                      annual hours.
                    </p>
                    <p className="mt-8 text-primary font-normal">
                      (both criteria must be passed to achieve compliance)
                    </p>
                    <p className="mt-8 text-primary font-normal">
                      Criteria for mechanically ventilated homes
                    </p>
                    <p className="mt-8 text-primary font-normal">
                      All occupied rooms should not exceed an operative
                      temperature of 26°C for more than 3% of the annual
                      occupied hours
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Communal Corridors
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      There is no mandatory target for communal corridors
                      however it is advised that an operative temperature of
                      28°C is not exceeded for more than 3% of total annual
                      hours. Should this occur the building will be marked as
                      being at ‘significant risk.’
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      TM52-For non-domestic buildings
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      CIBSE Document TM52 uses a simple 28°C backstop and brings
                      UK overheating analysis in line with international
                      standards. TM52 is based on ‘adaptive’ thermal comfort.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Criterion 1: Total Hours of Exceedance
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      The operative temperature cannot exceed the threshold
                      comfort temperature (Tmax) by 1°C or more for over 3% of
                      occupied hours between May-September.
                    </p>
                    <p className="mt-8 text-primary font-normal">
                      Tmax is a function of the outdoor running mean
                      temperature.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Criterion 2: Daily Weighted Exceedance​
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      This is a limit on the degree of overheating in any given
                      day of the simulation period. It must be ≤6 degree hours.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Criterion 3: Upper Limit Temperature
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      This criterion sets an absolute upper limit for the
                      comfort temperature of a room.
                    </p>
                    <p className="mt-8 text-primary font-normal">
                      The value should not exceed Tmax+4°C and is assessed
                      between May and September.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      BB101- For schools
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      Building Bulletin 101 provides an assessment of
                      overheating and indoor air quality in schools.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Criterion 1: Total Hours of Exceedance​
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      The number of occupied hours for which an adaptive thermal
                      comfort threshold is exceeded.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Criterion 2: Daily Weighted Exceedance
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      The degree to which the operative temperature exceeds the
                      adaptive thermal comfort threshold temperature.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      Criterion 3: Upper Limit Temperature​
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      The maximum temperature experienced at any occupied time.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      BREEAM Hea 04
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      BREEAM Hea 04 ensures that thermal comfort levels are
                      achieved through the design of the building. Hea 04 is
                      subject to CIBSE guide A or a relevant industry standard.
                      CIBSEA TM52 is used to provide overheating risk modelling
                      while the Fanger Comfort Model can be used to assess
                      thermal comfort in air conditioned buildings providing
                      outputs of PMV (predicted mean vote) and PPD (predicted
                      percentage dissatisfied), in line with BREEAM criteria.
                    </p>
                    <div>
                      <img src="../../Images/circle.png" />
                    </div>
                    <p className="mt-8 text-primary font-normal">
                      The following section details the modeling strategy and
                      possible design guidelines to prevent overheating, taking
                      into consideration the projected climate scenario for the
                      year 2050. It also highlights essential design components
                      that may be integrated into the detailed design phase of
                      the planned development to minimize the risk of
                      overheating.
                    </p>
                    <div>
                      <table>
                        <tbody>
                          <tr>
                            <td
                              style={{ border: "1px solid black" }}
                              className="text-center bg-gray text-black"
                              colspan="4"
                            >
                              Mitigation options following the cooling hierarchy
                              approach.
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                          <tr>
                            <td
                              style={{ border: "1px solid black" }}
                              className="text-center bg-gray text-black"
                            >
                              Cooling hierarchy
                            </td>
                            <td
                              style={{ border: "1px solid black" }}
                              className="text-center bg-gray text-black"
                            >
                              Design element
                            </td>
                            <td
                              style={{ border: "1px solid black" }}
                              className="text-center bg-gray text-black"
                            ></td>
                            <td
                              style={{ border: "1px solid black" }}
                              className="text-center bg-gray text-black"
                            >
                              Discussion
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="text-center bg-secondary text-white"
                              style={{ border: "1px solid black" }}
                              rowspan="9"
                            >
                              Reduce the heat entering the building
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              External shutters
                            </td>
                            <td style={{ border: "1px solid black" }}>
                              Select the appropriate external shade device
                              considering the size of the window and its
                              orientation.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              External shadings
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              West and East facades are affected by diagonal
                              solar rays therefore vertical shadings are more
                              effective.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Horizontal shadings are effective for south
                              facades.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              External blinds (automatically controlled based on
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              indoor temperatures or solar radiation)
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Awnings
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Window size
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              When sizing the windows, it should be considered
                              their solar exposure (south more the required
                              airflow based on
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              the requirements of the room function
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              External reveals
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Deep external reveals will help to reduce solar
                              radiation. This element,
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Ceiling height
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Higher internal floor-to-ceiling heights
                              (&gt;2.8m) will help to increase stratification of
                              air movement.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}>
                              Managing internal heat
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Exposed thermal mass material used in some
                              elements such as internal walls, floor, or
                              ceilings can help slow down temperature rises but
                              need to be well ventilated during the night- time.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Exposed thermal mass
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}>
                              Provide Natural Ventilation
                            </td>
                            <td style={{ border: "1px solid black" }}>
                              Fully openable windows
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Window sill height should be design to ensure
                              window can safely open (B.R Part K Guarding
                              heights)
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Passive measures
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Plenum windows allow to utilize openable windows,
                              while reducing external noise. They can provide a
                              reduction up to 11dB (AVO Guide v1.1 2020).
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Plenum windows
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}>
                              Provide Natural Ventilation and Noise Mitigation
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Traditional acoustic louvres coupled with a fan
                              can enhanced airflow into the spaces while
                              mitigating external noise. They can provide a
                              reduction up to 11dB (AVO Guide v1.1 2020).
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Acoustically treated ventilated louvres
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Tempered fresh air MVHR units (peak looping)
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              These MVHR units can provide some amount of fresh
                              air at lower temperature (free cooling) during the
                              summer months to assist natural ventilation to
                              mitigate the risk of overheating.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}>
                              Provide Mechanical Ventilation
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Active cooling
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}>
                              Active cooling it should be used only as last
                              resort when all passive measures from the ‘cooling
                              hierarchy’ have been explored.
                            </td>
                          </tr>
                          <tr>
                            <td style={{ border: "1px solid black" }}>
                              Provide Active cooling
                            </td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                            <td style={{ border: "1px solid black" }}></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <h2
                      className="mt-16 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      How SEES can Help
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      At SEES we have years of experience in carry out
                      overheating assessments on a range of building types such
                      as schools, offices, and dwellings.
                    </p>
                    <p className="mt-8 text-primary font-normal">
                      We can use of proficiency in Dynamic Simulation
                      Modelling to investigate different building designs
                      quickly and compare their overheating results. If you need
                      an overheating assessment carried out to satisfy BB 101
                      2018, for achieve BREEAM credits or as part of a London
                      Plan Energy Assessment, contact us today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
