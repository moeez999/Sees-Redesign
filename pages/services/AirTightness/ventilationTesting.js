import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactform";

export default function ventilationTesting() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="ventilation h-64 flex items-center mt-24 py-14 justify-center">
        <h1 className="mt-2  text text-3xl text-center text-shadow-black font-extrabold tracking-tight text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
          Ventilation Testing
        </h1>
      </div>
      <div className="flex flex-col xl:flex-row justify-center gap-4 mb-8 container mx-auto">
        <div className="shadow-xl">
          <div className="relative isolate overflow-hidden bg-white px-6 py-6 sm:py-6 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0  lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full  lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="">
                    <p className="text-2xl font-extrabold leading-7">
                      Building Regulations
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      Part F building regs govern the ventilations requirements
                      and as per these regulations it is a requirement to test
                      ventilation systems in new build properties. Part F volume
                      1 applies to dwellings, while volume 2 applies to all
                      buildings other than dwellings.
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 font-extrabold text-secondary"
                      data-aos="fade-up"
                    >
                      Under Part F ventilation systems are divided into separate
                      categories labelled as Systems:
                    </p>
                    <ul role="list" className="mt-8 space-y-4 text-primary">
                      <li className="flex gap-x-3 text-base" data-aos="fade-up">
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
                            System 1 – Intermittent extract fans with background
                            ventilators
                          </strong>
                        </span>
                      </li>
                      <li className="flex gap-x-3 text-base" data-aos="fade-up">
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
                            System 2 – Passive stack ventilation
                          </strong>
                        </span>
                      </li>
                      <li className="flex gap-x-3 text-base" data-aos="fade-up">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#509e2f"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.32 1.827a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V4.757c0-1.47 1.073-2.756 2.57-2.93ZM7.5 11.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H8.25Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75H8.25Zm1.748-6a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.007Zm-.75 3a.75.75 0 0 1 .75-.75h.007a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.007a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.335.75.75.75h.007a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.007Zm1.754-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-.75 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V18a.75.75 0 0 0-.75-.75h-.008Zm1.748-6a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 1.5a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75h-.008Zm-8.25-6A.75.75 0 0 1 8.25 6h7.5a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75v-.75Zm9 9a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-2.25Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>
                          <strong className="font-semibold text-primary">
                            System 3 – Mechanical Extract Ventilation
                          </strong>
                        </span>
                      </li>
                      <li className="flex gap-x-3 text-base" data-aos="fade-up">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#509e2f"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                            clipRule="evenodd"
                          />
                          <path
                            fillRule="evenodd"
                            d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>
                          <strong className="font-semibold text-primary">
                            System 4 – Mechanical Ventilation with Heat Recovery
                            (MVHR)
                          </strong>
                        </span>
                      </li>
                    </ul>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      Each system has its own benefits depending on build type
                      of your property and occupant requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className=" text-base leading-7 text-secondary ">
                    <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:grid-cols-2  lg:items-start lg:gap-y-10">
                      <div>
                        <p
                          data-aos="fade-up"
                          className="font-semibold text-2xl"
                        >
                          How we help
                        </p>
                        <p
                          className="mt-6 text-xl font-semibold leading-8 text-primary"
                          data-aos="fade-up"
                        >
                          We provide coverage all over the UK and our expert
                          testers use UKAS calibrated equipment as is defined by
                          Part F regulations.
                        </p>
                        <p
                          className="mt-6 text-xl font-semibold leading-8 text-primary"
                          data-aos="fade-up"
                        >
                          Ventilation testing can usually be coupled with
                          airtightness testing, which would also warrant a
                          discounted price on both services.
                        </p>
                      </div>
                      <div>
                        <img src="../../Images/IndoorAirQuality/home3.png" />
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
