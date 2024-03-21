import React from "react";

const ServicesCards = () => {
  // Array of objects containing data for each box
  const boxes = [
    {
      imgSrc: "cards/card-1.png",
      title: "Extensions",
      content:
        "L1B of the building regulations require extensions where there will be an amount of glazing that accounts to the equivalent of 25% of the extension floor area or when a highly glazed area, such as an orangery, is to be opened up to the main house, to demonstrate that it will not be detrimental to the overall energy performance of the property as a whole.",
      buttonText: "Learn More",
      href: "/services/SAP/sapForExtensions",
    },
    {
      imgSrc: "cards/card-2.png",
      title: "Conversions",
      content:
        "Building Regulations require a SAP Assessment and Energy Performance Certificate to be produced when an existing building is converted into a new dwelling. Whilst there are not as many requirements as a new build there are certain criteria that our energy assessors will help you with, such as elemental u-values.",
      buttonText: "Learn More",
      href: "/services/SAP/sapForConversions",
    },
    {
      imgSrc: "cards/card-9.png",
      title: "RESIDENTIAL AIR TIGHTNESS TESTING",
      content:
        "As an accredited Air Tightness Testing provider, we offer ATTMA air leakage testing as required under part L of the building regulations. We test domestic, non-domestic buildings and commercial properties. Working with onsite teams to help achieve your target air permeability rate.",
      buttonText: "Learn More",
      href: "services/airTightnessTesting",
    },
    {
      imgSrc: "cards/card-3.png",
      title: "SBEM COMPLIANCE",
      content:
        "Your project is in safe hands with Sadler Energy, we have a great deal of experience in assessing and testing commercial properties and understand the specific complexities of such schemes. Whether you are selling a small shop and require an EPC or working on a large scheme requiring BREEAM outstanding, we will guide you through the whole process.",
      buttonText: "Learn More",
      href: "/services/partLEPC_SBEM",
    },
    {
      imgSrc: "cards/card-4.png",
      title: "BREEAM NEW CONSTRUCTION",
      content:
        "Your project is in safe hands with Sadler Energy, we have a great deal of experience in assessing and testing commercial properties and understand the specific complexities of such schemes. Whether you are selling a small shop and require an EPC or working on a large scheme requiring BREEAM outstanding, we will guide you through the whole process.",
      buttonText: "Learn More",
      href: "",
    },
    {
      imgSrc: "cards/card-5.png",
      title: "BREEAM ACCREDITED PROFESSIONAL",
      content:
        "Your project is in safe hands with Sadler Energy, we have a great deal of experience in assessing and testing commercial properties and understand the specific complexities of such schemes. Whether you are selling a small shop and require an EPC or working on a large scheme requiring BREEAM outstanding, we will guide you through the whole process.",
      buttonText: "Learn More",
      href: "services/breeam",
    },
    {
      imgSrc: "cards/card-6.png",
      title: "VENTILATION TESTING",
      content:
        "Whether you are a self builder, architect or a national housing developer we are your 'one stop shop' for building regulation compliance, in particular Part E - Sound, Part G - Water, Part F - Ventilation and Part L - Energy. We also offer guidance and will compile the required documentation to meet your specific planning conditions.",
      buttonText: "Learn More",
      href: "/services/indoorAirQuality",
    },
    {
      imgSrc: "cards/card-7.png",
      title: "SOUND TESTING",
      content:
        "Whether you are a self builder, architect or a national housing developer we are your 'one stop shop' for building regulation compliance, in particular Part E - Sound, Part G - Water, Part F - Ventilation and Part L - Energy. We also offer guidance and will compile the required documentation to meet your specific planning conditions.",
      buttonText: "Learn More",
      href: "/services/acoustics",
    },
    {
      imgSrc: "cards/card-8.png",
      title: "SAP CALCULATIONS (PART L)",
      content:
        "Whether you are a self builder, architect or a national housing developer we are your 'one stop shop' for building regulation compliance, in particular Part E - Sound, Part G - Water, Part F - Ventilation and Part L - Energy. We also offer guidance and will compile the required documentation to meet your specific planning conditions.",
      buttonText: "Learn More",
      href: "/services/partLepcSap",
    },
  ];

  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {boxes.map((box, index) => (
        <figure className="shape-box shape-box_half" key={index}>
          <img src={box.imgSrc} alt="" />
          <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
          <figcaption>
            <div className="show-cont">
              <h3 className="card-no">0{index + 1}</h3>
              <h4 className="card-main-title">{box.title}</h4>
            </div>
            <p className="card-content">{box.content}</p>
            <a href={box.href} className="read-more-btn">
              {box.buttonText}
            </a>
          </figcaption>
          <span className="after"></span>
        </figure>
      ))}
    </div>
  );
};

export default ServicesCards;
