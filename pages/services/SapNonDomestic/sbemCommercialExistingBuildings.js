import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactform";

export default function sbemCommercialExistingBuildings() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="SBEM-exist h-64 flex items-center mt-24 py-14 justify-center">
        <h1 className="mt-2  text text-3xl text-center text-shadow-black font-extrabold tracking-tight text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
          SBEM for Commercial Existing Buildings
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-4 mb-8 container mx-auto">
        <div className="shadow-xl">
          <div className="relative isolate overflow-hidden bg-white px-6 py-6 sm:py-6 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0  lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full  lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="">
                    <p className="text-2xl font-extrabold text-secondary leading-7">
                      Building Regulations
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      EPC/SBEM for existing commercial buildings are governed by
                      Part L2B regulations which are much less stringent than
                      Part L2A regulations used for New Builds.
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      which are much less stringent than Part L2A regulations
                      used for New Builds. There are minimum standards laid out
                      in the Part L2B for building fabric, building services,
                      windows, doors, and rooflights when carrying out works on
                      existing buildings. However, if certain standards can not
                      be met, compliance can still be achieved by compensating
                      in a different area to offset the carbon emissions.
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      These calculations are used to produce an EPC for the
                      building, which is a requirement when it is being rented,
                      sold, or modified (in case of existing buildings). EPC’s
                      are valid for 10 years and in case your building does not
                      have one, you will be required to produce an EPC before it
                      can be sold or rented.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className=" text-base leading-7 text-secondary ">
                    <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2  lg:items-start lg:gap-y-10">
                      <div>
                        <p className="text-2xl font-extrabold text-secondary leading-7" data-aos="fade-up">How we help</p>
                        <p
                          className="mt-6 text-xl leading-8 text-primary"
                          data-aos="fade-up"
                        >
                          We advise clients to involve us early at the design
                          stage to maximise all opportunities to reduce energy
                          consumption and provide cost-effective solutions. We
                          will help your building achieve compliance with Part L
                          regulations by assisting in developing a design for
                          your extension that produces no additional CO2
                          emissions.
                        </p>
                        <p
                          className="mt-6 text-xl leading-8 text-primary"
                          data-aos="fade-up"
                        >
                          An assessment will be carried out at the design stage
                          to produce an estimated EPC and showcase how energy
                          efficient the building will be.
                        </p>
                        <p
                          className="mt-6 text-xl leading-8 text-primary"
                          data-aos="fade-up"
                        >
                          We identify areas of improvement in both the new and
                          existing elements of the building and come up with a
                          plan of action laying out how these can be
                          incorporated into the design.
                        </p>
                        <p
                          className="mt-6 text-xl leading-8 text-primary"
                          data-aos="fade-up"
                        >
                          Once the building reaches completion, a final
                          ‘as-built’ EPC will be produced using the installed
                          buildings services, and fabric specifications used for
                          the works.
                        </p>
                      </div>
                      <div>
                        <img src="../../Images/Sap/grasshome.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
