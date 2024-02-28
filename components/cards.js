import React from "react";

const BoxWrapper = () => {
  // Array of objects containing data for each box
  const boxes = [
    {
      imgSrc: "cards/card-1.png",
      title: "Extensions",
      content:
        "L1B of the building regulations require extensions where there will be an amount of glazing that accounts to the equivalent of 25% of the extension floor area or when a highly glazed area, such as an orangery, is to be opened up to the main house, to demonstrate that it will not be detrimental to the overall energy performance of the property as a whole.",
      buttonText: "Learn More",
    },
    {
      imgSrc: "cards/card-2.png",
      title: "Conversions",
      content:
        "Building Regulations require a SAP Assessment and Energy Performance Certificate to be produced when an existing building is converted into a new dwelling. Whilst there are not as many requirements as a new build there are certain criteria that our energy assessors will help you with, such as elemental u-values.",
      buttonText: "Learn More",
    },
    {
      imgSrc: "cards/card-9.png",
      title: "RESIDENTIAL AIR TIGHTNESS TESTING",
      content:
        "As an accredited Air Tightness Testing provider, we offer ATTMA air leakage testing as required under part L of the building regulations. We test domestic, non-domestic buildings and commercial properties. Working with onsite teams to help achieve your target air permeability rate.",
      buttonText: "Learn More",
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
            <a href="#" className="read-more-btn">
              {box.buttonText}
            </a>
          </figcaption>
          <span className="after"></span>
        </figure>
      ))}
    </div>
  );
};

export default BoxWrapper;
