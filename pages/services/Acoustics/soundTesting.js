import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactform";

export default function soundTesting() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="domestic h-64 mt-24 py-14 flex items-center justify-center">
        <h1 className="mt-2  px-4 py-2 rounded-xl font-extrabold  text text-3xl  text-shadow-black   text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
          Sound Testing
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
                      Regulations
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      Part E of the building regs are concerned with the
                      insulation of residential properties and schools. It
                      primarily requires the testing of separating walls and
                      floors, as well as stairs that have a separating function,
                      to determine their sound insulation levels.
                    </p>
                    <p className="text-2xl font-extrabold text-secondary leading-7">
                      When you need a sound test and how we can help
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      If your property is not built to the robust details as
                      specified by Part E, and it falls under one of the
                      following categories, it will require a sound test:
                    </p>
                  </div>
                </div>
                <div></div>
              </div>

              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className=" text-base leading-7 font-semibold text-secondary ">
                    <li className="flex gap-x-3" data-aos="fade-up">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#509e2f"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-primary">
                          A new development with attached dwellings or flats
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
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                      </svg>

                      <span>
                        <strong className="font-semibold text-primary">
                          New build nursing home or residential use property
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
                        <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
                      </svg>

                      <span>
                        <strong className="font-semibold text-primary">
                          Conversion of dwelling to flats
                        </strong>
                      </span>
                    </li>
                    <p
                      className="my-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      We provide UKAS accredited sound testing services all over
                      the UK. Along with that we can also help with:
                    </p>

                    <li className="flex gap-x-3" data-aos="fade-up">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#509e2f"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <span>
                        <strong className="font-semibold text-primary">
                          Noise Abatement
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
                        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                      </svg>

                      <span>
                        <strong className="font-semibold text-primary">
                          Noise at Work surveys
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
                        <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
                      </svg>

                      <span>
                        <strong className="font-semibold text-primary">
                          Noise at Work surveys
                        </strong>
                      </span>
                    </li>
                  </div>
                </div>
                <img src="../../Images/Fotolia_3991529_M.jpg" />
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
