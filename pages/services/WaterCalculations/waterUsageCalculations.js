import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactform";

export default function waterUsageCalculation() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="water-usage h-64 flex items-center mt-24 py-14 justify-center">
        <h1 className="mt-2  text text-3xl text-center text-shadow-black font-extrabold tracking-tight text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
  Water Usage Calculations
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
                     
Part G of the Building Regulations

                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                This section of the building regulations is mainly concerned with water efficiency requirements. It requires all new homes and converted properties to meet new water efficiency requirements to reduce the occupants water usage within the dwelling. 
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
           This section of the building regulations is mainly concerned with water efficiency requirements. It requires all new homes and converted properties to meet new water efficiency requirements to reduce the occupants water usage within the dwelling. 
                    </p>
                         <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
     Failure to comply with the target water use figure will adversely affect the SAP rating of a newly created dwelling.
                    </p>


                    <p
                      className="mt-6 text-2xl font-extrabold text-secondary leading-7"
                      data-aos="fade-up"
                    >
               A Guide to target water efficiency of fittings
                    </p>
                    <table className="w-full my-6">
                <thead className="bg-secondary border-2">
                    <tr>
                        <th className="py-2 px-4 text-base border-2 text-left text-white">Water Fitting</th>
                        <th className="py-2 px-4 text-base border-2 text-left text-white">Maximum Consumption</th>
                    </tr>
                </thead>
                <tbody className="border-2">
                    <tr>
                        <td className="py-2 px-4 text-base border-2">W/C</td>
                        <td className="py-2 px-4 text-base border-2">6/4 ltr dual flush or 4.5 ltr single flush</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 text-base border-2">Shower</td>
                        <td className="py-2 px-4 text-base border-2">10 l/min</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 text-base border-2">Bath Capacity</td>
                        <td className="py-2 px-4 text-base border-2">185l</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 text-base border-2">Basin Taps</td>
                        <td className="py-2 px-4 text-base border-2">6 l/min</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 text-base border-2">Kitchen Taps</td>
                        <td className="py-2 px-4 text-base border-2">8 l/min</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 text-base border-2">Dishwasher</td>
                        <td className="py-2 px-4 text-base border-2">1.25 l/place setting</td>
                    </tr>
                    <tr>
                        <td className="py-2 px-4 text-base border-2">Washing Machine</td>
                        <td className="py-2 px-4 text-base border-2">8.17 l/kg</td>
                    </tr>
                </tbody>
            </table>
                <p className="text-2xl font-extrabold text-secondary leading-7">
                     
Water Reduction Strategy 

                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                 Some larger sites require a full water reduction strategy as part of the planning process. This is a more detailed report demonstrating the water efficiency measures to be utilised on a site wide basis.
                    </p>
                        <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                We, at SEES, use our BRE approved Part G water efficiency calculation tools to demonstrate compliance. Not only can we provide all the necessary documentation for your local Building Control officer, but we are also able to provide suitable cost-effective recommendations to achieve the target water consumption even after the property has been completed.
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
