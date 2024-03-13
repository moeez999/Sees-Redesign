import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactform";

export default function wholeLifeCarbonAssessment() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="lifeCycle h-64 mt-24 py-14 flex items-center justify-center">
        <h1 className="mt-2  px-4 py-2 rounded-xl font-semibold  text text-3xl  text-shadow-black   text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
          Whole Life Carbon Assessment
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
                      Scope and Importance of Whole Life Carbon (WLC) Assessment
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      A WLC assessment is concerned with emissions from all
                      life-cycle phases (A1-C4), encompassing both embodied and
                      operational carbon together, unlike building LCA which
                      only focuses on embodied carbon.
                    </p>
                    <div>
                      <img src="../../Images/2.jpg" />
                    </div>

                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      An assessment of Whole Life Carbon also incorporates
                      evaluating the potential carbon emission 'advantages'
                      resulting from the reuse or recycling of components once a
                      building reaches the end of its useful life. This
                      assessment offers a genuine insight into the building's
                      environmental carbon impact.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="text-base leading-7 ">
                    <h2
                      className="mt-6 text-2xl font-semibold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      Policies and Guidance
                    </h2>
                    <p className="mt-8 text-primary font-normal">
                      Within the UK, BS EN 15978:2011 (underpinned by RICS
                      Professional Statement: Whole Life Carbon assessment for
                      the built environment) establishes the framework for
                      assessing the environmental impacts of the built
                      environment. It outlines the principles and calculation
                      methods for conducting whole life assessments of
                      environmental impacts resulting from built projects,
                      utilizing life-cycle assessment techniques
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
