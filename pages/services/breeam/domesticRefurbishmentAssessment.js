import React from "react";
import Navigation from "../../../components/navigation";
import Footer from "../../../components/footer";
import ContactForm from "../../../components/contactform";

export default function dosmesticRefurbishmentAssessment() {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="breeam-nav">
        <Navigation />
      </div>
      <div className="domestic h-64 mt-24 py-14 flex items-center justify-center">
        <h1 className="mt-2  px-4 py-2 rounded-xl font-extrabold  text text-3xl  text-shadow-black   text-white sm:text-4xl animate__animated animate__backInLeft animate__slow">
          Domestic Refurbishment Assessment
        </h1>
      </div>
      <div class="flex flex-col xl:flex-row justify-center gap-4 mb-8 container mx-auto">
        <div className="shadow-xl">
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="mx-auto grid  grid-cols-1 gap-x-8 gap-y-16 lg:mx-0   lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full   lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="">
                    <p className="text-2xl font-extrabold text-secondary leading-7">
                      What is it?
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      Similar to its more popular counterpart ‘Non-Domestic New
                      Construction’ assessment, this scheme also evaluates the
                      environmental performance of a building or site but the
                      difference is that this is targeted towards residential
                      properties.
                    </p>
                    <p
                      className="mt-6 text-xl leading-8 text-primary"
                      data-aos="fade-up"
                    >
                      As the name suggests, this scheme deals with existing
                      buildings that are undergoing refurbishment. It would also
                      apply to buildings that are undergoing refurbishment and
                      changing its use from a commercial to a residential
                      building.
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
                      Why you should get your project assessed?
                    </p>
                    <p className="mt-8 text-primary font-normal">
                      BREEAM Domestic Refurbishment will help improve the
                      sustainability and environmental performance of existing
                      dwellings in a robust and cost effective way.
                    </p>

                    <p className="mt-8 text-primary  font-normal">
                      A BREEAM certification makes the project more desirable to
                      clients and future residents, as validation from a
                      globally recognised standard adds value to the property
                      and builds confidence in the market.
                    </p>
                    <p className="mt-8 text-primary  font-normal">
                      From an environmental standpoint, buildings refurbished
                      under BREEAM standards are far more sustainable, have
                      lower energy bills, and more comfortable for the residents
                      to live in.
                    </p>
                    <h2
                      className="mt-16 text-2xl font-bold tracking-tight text-secondary"
                      data-aos="zoom-in"
                    >
                      How we Help?
                    </h2>
                    <p className="mt-8 text-primary  font-normal">
                      We guide our clients from early concept stage up until
                      post construction, making sure your BREEAM experience is
                      as easy and painless as possible
                    </p>
                    <p className="mt-8 text-primary  font-normal">
                      Our BREEAM experts assess projects of all types and sizes,
                      ranging from large multi-storey residential apartments to
                      small dwellings undergoing refurbishment.
                    </p>

                    <p className="mt-8 text-primary font-normal">
                      A full assessment would start with a pre-assessment at
                      planning stage, advancing to an assessment at design
                      phase, and finally a post construction review once the
                      building has reached completion.
                    </p>
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
