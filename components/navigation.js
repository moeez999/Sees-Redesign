import React, { useState } from "react";
import Link from "next/link";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSubMenuToggle = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const handleChevronHover = () => {
    setSubMenuOpen(true);
  };

  const handleChevronLeave = () => {
    setSubMenuOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="lg:flex lg:justify-between lg:items-center container bg-white px-4 py-2 rounded-md mt-2 xxl:max-w-9xl lg:max-w-7xl md:max-w-5xl z-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 mr-4" data-aos="fade-right">
            <Link href="/">
              <img src="logo.png" className="h-12" alt="Logo" />
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              onClick={handleMobileMenuToggle}
            >
              ☰
            </button>
          </div>
        </div>
        <nav
          className={`mt-4 lg:mt-0 lg:flex lg:items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <li className="text-base text-secondary uppercase font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-base text-secondary uppercase font-semibold relative">
              <Link
                href="/services"
                onMouseEnter={handleSubMenuToggle}
                onMouseLeave={handleSubMenuToggle}
              >
                Services{" "}
                <span
                  className="chevron-down"
                  onMouseEnter={handleChevronHover}
                  onMouseLeave={handleChevronLeave}
                >
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
                {subMenuOpen && (
                  <ul className="absolute bg-white py-2 rounded-md shadow-lg">
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/breeam">BREEAM</Link>
                    </li>
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/buildingLifeCycle">
                        Building Life Cycle
                      </Link>
                    </li>
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/thermalModelling">
                        Thermal Modelling{" "}
                      </Link>
                    </li>{" "}
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/partLEPC_SAP">Part L/EPC SAP</Link>
                    </li>{" "}
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/partLEPC_SBEM">
                        Part L/EPC SBEM
                      </Link>
                    </li>{" "}
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/airTightnessTesting">
                        Airtightness Testing{" "}
                      </Link>
                    </li>{" "}
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/waterCalculations">
                        Water Calculations
                      </Link>
                    </li>{" "}
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/energyStrategy">
                        Energy Strategy
                      </Link>
                    </li>{" "}
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/indoorAirQuality">
                        Indoor Air Quality
                      </Link>
                    </li>
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/dayLightining">Daylighting </Link>
                    </li>
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/acoustics">Acoustics</Link>
                    </li>
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/thermographics">
                        Thermographics
                      </Link>
                    </li>
                    <li className="text-base text-secondary uppercase font-semibold">
                      <Link href="/services/floodRisk">Flood Risk</Link>
                    </li>
                  </ul>
                )}
              </Link>
            </li>
            <li className="text-base text-secondary uppercase font-semibold">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="text-base text-secondary uppercase font-semibold">
              <Link href="/faqs">FAQs</Link>
            </li>
            <li className="text-base text-secondary uppercase font-semibold">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="text-base text-secondary uppercase font-semibold">
              <Link href="/contactUs">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
