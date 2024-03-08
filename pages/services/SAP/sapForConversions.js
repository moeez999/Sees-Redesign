import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import Table from "../../../components/tables";
import ContactForm from "../../../components/contactform";

export default function sapForConversions() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="sap-conversion h-64 flex items-center mt-24 py-14 justify-center">
        <h1 className="mt-2  text text-3xl text-center text-shadow-black font-extrabold tracking-tight text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
          SAP for Conversion
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-4 mb-8 container mx-auto">
        <div className="shadow-xl">
          <div className="relative isolate overflow-hidden bg-white px-6 py-6 sm:py-6 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0  lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full  lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="">
                    <p className="text-2xl font-extrabold font-extrabold leading-7">
                      Building Regulations
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      Part L1B states that changing the use of a building or
                      converting it would require SAP calculations to be carried
                      out to ensure it meets the efficiency standards and carbon
                      targets.
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      The process is done in two stages; firstly SAP
                      calculations are carried out at the design stage to ensure
                      the proposed design complies with Part L1B requirements,
                      and the calculations are carried out again at the
                      ‘as-built’ stage, producing a final report and an EPC for
                      the new dwelling.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className=" text-base leading-7 font-semibold text-secondary ">
                    <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2  lg:items-start lg:gap-y-10">
                      <div>
                        <p data-aos="fade-up">How we help</p>
                        <p
                          className="mt-6 text-xl leading-8 text-primary"
                          data-aos="fade-up"
                        >
                          We've supported numerous architects, contractors, and
                          developers in delivering commercially viable projects
                          that prioritize sustainability and environmental
                          consciousness.
                        </p>
                        <p
                          className="mt-6 text-xl leading-8 text-primary"
                          data-aos="fade-up"
                        >
                          We, at SEES, will help and advise you throughout the
                          whole process, from the design stage until completion,
                          to ensure your building meets the regulation
                          requirements in the most cost-effective way.
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
                          className="mt-6 text-xl leading-8 text-secondary"
                          data-aos="fade-up"
                        >
                          What we would require to conduct SAP calculations:
                        </p>
                        <ul role="list" className="mt-8 space-y-4 text-primary">
                          <li className="flex gap-x-3" data-aos="fade-up">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#509e2f"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>
                              <strong className="font-semibold text-primary">
                                Existing and proposed site plans and elevations
                              </strong>
                            </span>
                          </li>
                          <li className="flex gap-x-3" data-aos="fade-up">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#509e2f"
                              className="w-6 h-6"
                            >
                              <path d="M11.584 2.376a.75.75 0 0 1 .832 0l9 6a.75.75 0 1 1-.832 1.248L12 3.901 3.416 9.624a.75.75 0 0 1-.832-1.248l9-6Z" />
                              <path
                                fillRule="evenodd"
                                d="M20.25 10.332v9.918H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h.75v-9.918a.75.75 0 0 1 .634-.74A49.109 49.109 0 0 1 12 9c2.59 0 5.134.202 7.616.592a.75.75 0 0 1 .634.74Zm-7.5 2.418a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Zm3-.75a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0v-6.75a.75.75 0 0 1 .75-.75ZM9 12.75a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0v-6.75Z"
                                clipRule="evenodd"
                              />
                              <path d="M12 7.875a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" />
                            </svg>
                            <span>
                              <strong className="font-semibold text-primary">
                                Construction details and building services
                                specifications
                              </strong>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <img src="../../Images/Sap/grasshome.png" />
                      </div>
                    </div>
                    <p className="mt-8 text-primary">
                      The rest will be done from our office on our SAP software,
                      eliminating the need for any site visits.
                    </p>
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
