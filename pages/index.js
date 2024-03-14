import React, { useEffect } from "react";
import Footer from "../components/footer";
import ClientSlider from "../components/clients";
import QuoteContainer from "../components/reviews";
import quotesData from "../components/reviewsData";
import ServicesSlider from "./../components/servicesSlider";
import HeroSection from "../components/heroSection";
import AssociationsSlider from "../components/associations";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>

      <div className="flex justify-center mt-8 p-2 xxxl:container xxxl:mx-auto">
        <div
          id="service-section"
          className="w-full xsm:w-[50%] md:w-[75%] lg:w-[60%] py-6"
        >
          <h1
            className="text-center text-2xl md:text-4xl xxl:text-5xl xxxl:text-7xl font-bold text-secondary p-4 xxxl:p-8"
            data-aos="zoom-in"
            data-aos-anchor-placement="center-bottom"
          >
            Our Services
          </h1>
        </div>
      </div>
      <div className="services-slider container mx-auto  mb-6 pb-6 flex justify-center">
        <ServicesSlider></ServicesSlider>
      </div>
      <div className="flex justify-center flex-col">
        <div className="xsm:w-full">
          <div className="flex justify-center relative anima">
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <h1
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-2xl animate_animated animate__flipInX text-white md:text-4xl xxl:text-5xl xxxl:text-7xl  font-semibold text-center p-4 mt-4 md:w-[60%] xxxl:p-8 xsm:w-full"
            >
              TRUSTED BY HOME OWNERS, ARCHITECTS, HOUSING ASSOCIATIONS, COUNCILS
              AND NATIONAL HOUSE BUILDERS ALIKE.
            </h1>
          </div>
        </div>
        <div className="p-2 mt-8 container client-slider mx-auto flex justify-center">
          <ClientSlider></ClientSlider>
        </div>
      </div>
      <div className="p-8 relative anima">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h1 className="text-2xl animate_animated animate__flipInX text-primary md:text-4xl xxl:text-5xl xxxl:text-7xl  font-semibold text-center p-4 mt-4 xxxl:p-8 xsm:w-full">
          Who We Are
        </h1>
        <p className="text-white text-center my-3 text-base md:text-lg lg:text-xl xl:text-2xl">
          Sadler Energy and Environmental Services Ltd was founded in 2008 with
          our team’s background firmly in the construction industry, initially
          specialising in energy calculations and Code for Sustainable Homes
          reports. Over the years, we have evolved and broadened our services in
          response to changing building regulations and advancements in building
          physics.
        </p>
        <p className="text-white text-center my-3 text-base md:text-lg lg:text-xl xl:text-2xl">
          Our journey began modestly, operating from a home's box room. As
          demand grew, we transitioned to an office space and gradually built a
          dedicated team. Today, we take pride in offering a comprehensive array
          of services, including thermal modelling, overheating analysis,
          commercial air testing, passive house air testing, and environmental
          statements. Our commitment to sustainability is deeply ingrained in
          our business ethos, with our team serving as the cornerstone of our
          operations. We prioritise the well-being of both our team and clients,
          ensuring that we consistently deliver optimal outcomes.
        </p>
        <p className="text-white text-center my-3 text-base md:text-lg lg:text-xl xl:text-2xl">
          Our dedication to environmental stewardship extends throughout our
          business practices, making a positive impact on the environment,
          community, and business landscape. We have developed and implemented
          an environmental management plan that emphasises recycling and
          prioritises sustainable products, even down to our choice of toilet
          paper, which reflects our commitment to zero carbon impact.
          Additionally, we have taken proactive steps to reduce our carbon
          footprint and encourage our clients and educate others to empower them
          to make positive environmental impacts.
        </p>
        <p className="text-white text-center my-3 text-base md:text-lg lg:text-xl xl:text-2xl">
          As part of our community engagement efforts, we have hosted Cub Scouts
          to educate them about environmental responsibility and everyone's role
          in fostering positive change. We recognise the vital role our staff
          plays in our sustainability endeavours, considering them integral to
          both our company and our commitment to environmental responsibility.
          Our staff embodies the essence of SEES, not merely as employees but as
          champions of sustainability
        </p>
        <p className="text-white text-center my-3 text-base md:text-lg lg:text-xl xl:text-2xl">
          Looking ahead, we aspire to expand our services to become leaders in
          environmental compliance in the south of England, empowering others to
          create sustainable futures for all.
        </p>
      </div>

      {/* <div className="p-4 mt-8" id="review-section">f
        <QuoteContainer quoteData={quotesData} />
      </div>
      <div className="flex justify-center p-4 my-8">
        <a
          href="https://www.reviews.co.uk/company-reviews/store/sadler-energy-and-environmental-services"
          target="_blank"
          className="text-base xxxl:text-2xl font-semibold text-secondary border-secondary border-2 hover:bg-secondary hover:text-white rounded-md px-4 py-2"
        >
          View More Reviews
        </a>
      </div> */}

      <div className="flex justify-center p-4 relative my-8">
        <div className="quote flex flex-col items-center  shadow-2xl rounded-md p-4">
          <h1 className="text-3xl font-semibold text-center text-secondary p-4 xxxl:text-5xl">
            GET A QUOTE
          </h1>
          <p className="xxm:text-base xxm:text-center  xsm:text-lg p-4 xxxl:text-2xl">
            We have extremely competitive pricing, get in touch for a free
            non-committal quote.
          </p>
          <a href="/contactUs" className="get-a-quote" target="_blank">
            <span className="text-base xxxl:text-2xl">Get in Touch</span>
            <div className="liquid"></div>
          </a>
        </div>
      </div>
      <div className="anima relative py-6">
        <h1 className="text-4xl font-semibold text-center  text-white p-4 xxxl:text-5xl">
          Our associations
        </h1>
        <div className="flex justify-center">
          <p className="text-xl text-white text-center md:w-[30%]">
            We know that you need complete confidence in your supply chain.
            That's why we're backed by industry leading certification and
            quality standards.
          </p>
        </div>

        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="py-8 px-4 my-6  ">
        <AssociationsSlider></AssociationsSlider>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
