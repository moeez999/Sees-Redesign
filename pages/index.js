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
      {/* <div className="hero-section">
        <Navigation />

        <div className="text-center absolute  xxm:w-[95%]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mainhead p-6 xxm:p-2 rounded-md">
          <div>
            <div class="main">
              <h1 className="text-secondary text-3xl md:text-4xl xxl:text-5xl xxxl:text-7xl">
                THE HOME OF BUILDING
                <div class="roller">
                  <span id="rolltext">
                    REGULATION COMPLIANCE,
                    <br />
                    TESTING AND CERTIFICATION
                    <br />
                    Curiosity
                    <br />
                  </span>
                </div>
              </h1>
            </div>
            <p className="text-center text-primary p-3 text-xl xxxl:text-3xl xxm:text-base mt-2 xxxl:p-4">
              Tell us what project you are planning and we will let you know
              what you might need.
            </p>
            <a
              href="#service-section"
              type="button"
              className="rounded-md mt-2 bg-secondary px-3 py-2 text-base xxxl:text-3xl xxxl:px-6 xxxl:py-4 font-semibold text-white shadow-sm hover:bg-white hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
            >
              Find Out More
            </a>
          </div>
        </div>
      </div> */}
      <HeroSection></HeroSection>
      <div className="flex justify-center">
        <div className="w-[80%] xsm:w-full">
          <div className="flex justify-center">
            <h1 className="text-2xl md:text-4xl xxl:text-5xl xxxl:text-7xl text-secondary font-semibold text-center p-4 mt-4 md:w-[60%] xxxl:p-8 xsm:w-full">
              TRUSTED BY HOME OWNERS, ARCHITECTS, HOUSING ASSOCIATIONS, COUNCILS
              AND NATIONAL HOUSE BUILDERS ALIKE.
            </h1>
          </div>

          <div className="p-2 mt-6 container client-slider mx-auto flex justify-center">
            <ClientSlider></ClientSlider>
          </div>
        </div>
      </div>
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
        <BoxWrapper />
      </div>

      <div className="mt-8 p-8">
        <div className="service-cards flex flex-col items-center border-b-2 xsm:p-12">
          <h1
            className="text-2xl md:text-4xl xxl:text-5xl xxxl:text-7xl text-secondary font-semibold text-center p-4"
            data-aos="zoom-in"
          >
            NON-DOMESTIC AND COMMERCIAL BUILDINGS
          </h1>

          <p className="text-base xsm:text-lg text-wrap xsm:w-[70%] text-center p-4 mt-2  xxxl:text-2xl">
            Your project is in safe hands with Sadler Energy, we have a great
            deal of experience in assessing and testing commercial properties
            and understand the specific complexities of such schemes. Whether
            you are selling a small shop and require an EPC or working on a
            large scheme requiring BREEAM outstanding, we will guide you through
            the whole process.
          </p>
          <div className="flex flex-wrap justify-center gap-8 p-4 mt-8">
            {DomesticsAndCommercial.map((item) => (
              <ServiceCard
                key={item.id}
                icon={item.icon}
                heading={item.title}
                buttonText={item.serviceType}
              ></ServiceCard>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 p-8">
        <div className="service-cards flex flex-col items-center border-b-2 xsm:p-12">
          <h1
            className="text-2xl md:text-4xl xxl:text-5xl xxxl:text-7xl text-secondary font-semibold text-center p-4"
            data-aos="zoom-in"
          >
            NEW BUILD DWELLING
          </h1>

          <p className="text-base xsm:text-lg text-wrap xsm:w-[70%] text-center p-4 mt-2  xxxl:text-2xl">
            Whether you are a self builder, architect or a national housing
            developer we are your 'one stop shop' for building regulation
            compliance, in particular Part E - Sound, Part G - Water, Part F -
            Ventilation and Part L - Energy. We also offer guidance and will
            compile the required documentation to meet your specific planning
            conditions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 p-4 mt-8">
            {BuildingDwelling.map((item) => (
              <ServiceCard
                key={item.id}
                icon={item.icon}
                heading={item.title}
                buttonText={item.serviceType}
              ></ServiceCard>
            ))}
          </div>
        </div>
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
            <div class="liquid"></div>
          </a>
        </div>
      </div>
      <div className="p-4 mt-4">
        <AssociationsSlider></AssociationsSlider>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
