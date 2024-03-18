import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactform";

export default function thermalBridgingCalculations() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="thermal-bridge h-64 mt-24 py-14 flex items-center justify-center">
        <h1 className="mt-2  px-4 py-2 rounded-xl font-extrabold  text text-3xl  text-shadow-black   text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
          Thermal Bridging Calculations
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-4 mb-8 container mx-auto">
        <div className="shadow-xl">
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0   lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full   lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="">
                    <p className="text-2xl font-extrabold text-secondary leading-7">
                      Importance
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      SAP and SBEM calculations both incorporate heat loss from
                      thermal bridges while checking for compliance with Part L.
                      Where ever there’s a break in the insulation layer, or a
                      point where two or more building units meet, that area can
                      be classified as a thermal bridge which is a path for heat
                      to escape.
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      Thermal bridges have several classifications depending on
                      the type of junction, and each thermal bridge has a
                      specific Psi-value associated with it. However, instead of
                      using default Psi-values, they can be calculated to give a
                      more accurate measurement of the heat loss through the
                      thermal bridges.
                    </p>
                  </div>
                </div>
                <div></div>
              </div>

              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className=" text-base leading-7 font-semibold text-secondary ">
                    <p
                      className="mt-6 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="zoom-in"
                    >
                      How we help
                    </p>
                    <p className="mt-8 text-primary font-normal">
                      Our expert assessors, at SEES, have experience calculating
                      thermal bridges for a variety of different projects, in
                      accordance with BR497.
                    </p>

                    <p className="mt-8 text-primary  font-normal">
                      These calculated Psi-values can be used in place of
                      default values as they are the worst acceptable values,
                      and using them within SAP and SBEM calculations do not
                      provide good results, and may make it harder to achieve
                      compliance with Part L.
                    </p>
                    <p className="mt-8 text-primary  font-normal">
                      We also advise clients if there are possibilities of
                      reducing the thermal bridges, although this may not be
                      possible all the time.
                    </p>
                  </div>
                </div>
                <img src="../../Images/Thermal-Bridging-Images/Thermal Bridging.png" />
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
