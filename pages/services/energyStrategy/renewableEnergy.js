import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactform";

export default function renewableEnergy() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="renew-energy h-64 flex items-center mt-24 py-14 justify-center">
        <h1 className="mt-2  text text-3xl font-extrabold text-center text-shadow-black tracking-tight text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
      Renewable Energy/Low Carbon Report
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
                  What is an Energy Strategy and why you need it
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                     An energy strategy lays out a plan outlining how carbon and energy reduction targets set by your Local Planning Authority will be achieved.
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                   The reduction target for your property will be dependent on where it’s located as every Local Planning Authority has their own reduction targets, but are typically in the range of 10% to 19%.
                    </p>
                       <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                 An energy strategy compliant with Part 25A of local building regulations will be required to achieve planning permission. This energy statement can also serve as a guide to help direct the design and construction of the development. 
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className=" text-base leading-7  text-secondary ">
                    <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2  lg:items-start lg:gap-y-10">
                      <div>
                        <p className="text-2xl font-extrabold text-secondary leading-7" data-aos="fade-up">
                      Producing the report 
                        </p>

                        <p
                          className="mt-6 text-xl leading-8 text-secondary"
                          data-aos="fade-up"
                        >
                       The report will use the energy hierarchy to minimise onsite carbon emissions, the stages are:
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
                             Use Renewable Energy – assess the feasibility of renewable energy systems.  
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
                           Supply Energy Efficiently – Use low-carbon technology to significantly reduce energy consumption. 
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
                              <path
                                fillRule="evenodd"
                                d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                                clipRule="evenodd"
                              />
                            </svg>

                            <span>
                              <strong className="font-semibold text-primary">
                            Use less Energy – the incorporation of low energy design and passive measures to promise the reduction of energy use
                              </strong>
                            </span>
                          </li>
                        </ul>
                     
                        
                      </div>
                      <div>
                        <img src="../../Images/3.png" />
                      </div>
                    </div>
                       <p
                          className="mt-6 text-xl leading-8 text-primary"
                          data-aos="fade-up"
                        >
                 We will consider all viable options that can be employed to achieve reduction targets and will then be presented to you in a report outlining all of them. 
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
