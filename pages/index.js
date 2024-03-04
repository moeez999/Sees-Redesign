import React from "react";
import Navigation from "../components/navigation";
import ServiceCard from "../components/serviceCards";
import DomesticsAndCommercial from "../components/domesticAndCommerical";
import BuildingDwelling from "../components/newBuildDwelling";
import YouTube from "react-youtube";
import Footer from "../components/footer";
import ClientSlider from "../components/clients";
import BoxWrapper from "../components/cards";
import TestimonialSlider from "../components/testimonialSlider";
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
      <div className="flex justify-center">
        <div className="w-[80%] xsm:w-full">
          <div className="flex justify-center">
            <h1 className="text-2xl md:text-4xl xxl:text-5xl xxxl:text-7xl text-secondary font-semibold text-center p-4 mt-4 md:w-[60%] xxxl:p-8 xsm:w-full">
              TRUSTED BY HOME OWNERS, ARCHITECTS, HOUSING ASSOCIATIONS, COUNCILS
              AND NATIONAL HOUSE BUILDERS ALIKE.
            </h1>
          </div>

          <div className="p-2 mt-8 container client-slider mx-auto flex justify-center">
            <ClientSlider></ClientSlider>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 my-6 mx-4">
        <AssociationsSlider></AssociationsSlider>
      </div>
      <div className="p-4 mt-8" id="review-section">
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
      </div>
      <div className="flex justify-center p-4  my-8">
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

      <Footer />
    </div>
  );
};

export default Home;
