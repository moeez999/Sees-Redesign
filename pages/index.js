import React from "react";
import Navigation from "../components/navigation";
import ServiceCard from "../components/serviceCards";
import DomesticsAndCommercial from "../components/domesticAndCommerical";
import BuildingDwelling from "../components/newBuildDwelling";
import YouTube from "react-youtube";
import Footer from "../components/footer";
import ClientSlider from "../components/swiper";
import BoxWrapper from "../components/cards";
import TestimonialSlider from "../components/testimonialSlider";
import QuoteContainer from "./reviews";
import quotesData from "../components/reviewsData";

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <Navigation />

        <div className="text-center absolute xxm:w-[95%]  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mainhead p-6 xxm:p-2 rounded-md">
          <div>
            <h1
              className="text-5xl xxm:text-2xl font-semibold text-center text-secondary"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              THE HOME OF BUILDING REGULATION COMPLIANCE, TESTING AND
              CERTIFICATION
            </h1>
            <p
              className="text-center text-primary text-xl xxm:text-base mt-2"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Tell us what project you are planning and we will let you know
              what you might need.
            </p>
            <button
              type="button"
              className="rounded-md mt-2 bg-secondary px-3 py-2 mt-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Find Out More
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%]">
          <div className="flex justify-center">
            <h1 className="text-4xl text-secondary font-semibold text-center p-4 mt-4 w-[60%]">
              TRUSTED BY HOME OWNERS, ARCHITECTS, HOUSING ASSOCIATIONS, COUNCILS
              AND NATIONAL HOUSE BUILDERS ALIKE.
            </h1>
          </div>

          <div className="p-2 mt-6">
            <ClientSlider></ClientSlider>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 p-4">
        <div className="service-section w-[80%] py-6  border-b-2">
          <h1
            className="text-center text-5xl font-bold text-secondary p-4"
            data-aos="zoom-in"
            data-aos-anchor-placement="center-bottom"
          >
            Our Services
          </h1>
          <p
            className="text-lg text-wrap px-2 py-4"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Sadler Energy and Environmental Services Ltd is an independent
            Consultancy, providing sustainable development advice to developers
            and builders from pre-planning stages through the construction
            process, providing certification and testing services on completion.
          </p>
          <p
            className="text-lg text-wrap p-2"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Our aim is to give impartial and pragmatic advice on all
            environmental issues working across a broad range of domestic and
            commercial developments which will enable the improved performance
            within the constraints of the project.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <BoxWrapper />
      </div>

      <div className="mt-8 p-8">
        <div className="service-cards flex flex-col items-center border-b-2 p-12">
          <h1
            className="text-3xl text-secondary font-semibold text-center p-4"
            data-aos="zoom-in"
          >
            NON-DOMESTIC AND COMMERCIAL BUILDINGS
          </h1>

          <p className="text-base text-wrap w-[70%] text-center p-4 mt-2">
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
        <div className="service-cards flex flex-col items-center border-b-2 p-12">
          <h1
            className="text-3xl text-secondary font-semibold text-center p-4"
            data-aos="zoom-in"
          >
            NEW BUILD DWELLING
          </h1>

          <p className="text-base text-wrap w-[70%] text-center p-4 mt-2">
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
      <div className="p-4 mt-8">
        <QuoteContainer quoteData={quotesData} />
      </div>
      <div className="flex justify-center p-4 my-8">
        <button className="text-base font-semibold text-secondary border-secondary border-2 hover:bg-secondary hover:text-white rounded-md px-4 py-2">
          View More Reviews
        </button>
      </div>
      <div className="flex justify-center p-4 my-8">
        <div className="quote flex flex-col items-center shadow-2xl rounded-md p-4">
          <h1 className="text-3xl font-semibold text-center text-secondary p-4">
            GET A QUOTE
          </h1>
          <p className="text-lg p-4">
            We have extremely competitive pricing, get in touch for a free
            non-committal quote.
          </p>
          <button className="get-a-quote" target="_blank">
            <span className="text-base">Get a Quote</span>
            <div class="liquid"></div>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
