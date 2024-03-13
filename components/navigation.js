import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const chevron = <i className="fa-solid fa-chevron-down"></i>;
const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    chevron: chevron,
    subItems: [
      {
        name: "BREEAM",
        href: "/services/breeam",
        sublists: [
          {
            name: "Non Domestic Assessment",
            href: "/services/breeam/nonDomesticAssessment",
          },
          {
            name: "Domestic Refurbishment Assessment",
            href: "/services/breeam/domesticRefurbishmentAssessment",
          },
        ],
      },
      {
        name: "Building Life Cycle",
        href: "/services/buildingLifeCycle",
        sublists: [
          {
            name: "Life Cycle Assessment (LCA)",
            href: "/services/buildingLifeCycle/lifeCycleAssessment",
          },
          {
            name: "Whole Life Carbon Assessment",
            href: "/services/buildingLifeCycle/wholeLifeCarbonAssessment",
          },
        ],
      },
      {
        name: "Thermal Modelling",
        href: "/services/thermalModelling",
        sublists: [
          {
            name: "Overheating Assessment",
            href: "/services/thermalModelling/overheatingAssessment",
          },
        ],
      },
      {
        name: "Thermal Bridging",
        href: "/services/thermalBridging",
        sublists: [
          {
            name: "Thermal Bridging Calculations",
            href: "/services/thermalBridging/thermalBridgingCalculations",
          },
        ],
      },
      {
        name: "Part L/EPC SAP",
        href: "/services/partLepcSap",
        sublists: [
          {
            name: "SAP for New Builds",
            href: "/services/SAP/sapForNewBuild",
          },
          {
            name: "SAP for Extensions",
            href: "/services/SAP/sapForExtension",
          },
          {
            name: "SAP for Conversions",
            href: "/services/SAP/sapForConversion",
          },
        ],
      },
      {
        name: "Part L/EPC SBEM",
        href: "/services/partLEPC_SBEM",
        sublists: [
          {
            name: "SBEM for Commercial New Builds",
            href: "/services/SapNonDomestic/sbemForCommercialNewBuilds",
          },
          {
            name: "SBEM for Commercial Existing Buildings",
            href: "/services/SapNonDomestic/sbemForCommercialExistingBuildings",
          },
        ],
      },
      {
        name: "Airtightness Testing",
        href: "/services/airTightnessTesting",
        sublists: [
          {
            name: "Blower Door Fan Test",
            href: "/services/AirTightness/blowerDoorFanTest",
          },
          {
            name: "Ventilation Testing",
            href: "/services/AirTightness/ventilationTesting",
          },
        ],
      },
      {
        name: "Water Calculations",
        href: "/services/waterCalculations",
        sublists: [
          {
            name: "Water Usage Calculations",
            href: "/services/WaterCalculations/waterUsageCalculations",
          },
          {
            name: "Water Neutrality Report",
            href: "/services/WaterCalculations/waterNeutralityReport",
          },
        ],
      },
      {
        name: "Energy Strategy",
        href: "/services/energyStrategy",
        sublists: [
          {
            name: "Renewable Energy/Low Carbon Report",
            href: "/services/renewableEnergyLowCarbonReport",
          },
        ],
      },
      {
        name: "Indoor Air Quality",
        href: "/services/indoorAirQuality",
        sublists: [
          {
            name: "IAQ Plan & Testing",
            href: "/services/IndoorAirQuality/IAQPlan",
          },
        ],
      },
      {
        name: "Daylighting",
        href: "/services/dayLightining",
        sublists: [
          {
            name: "Daylighting Calculations",
            href: "/services/Daylighting/daylightingCalculations",
          },
          {
            name: "Sunlight Analysis",
            href: "/services/Daylighting/sunlightAnalysis",
          },
        ],
      },
      {
        name: "Acoustics",
        href: "/services/acoustics",
        sublists: [
          {
            name: "Sound Testing",
            href: "/services/Acoustics/soundTesting",
          },
          {
            name: "Noise Impact Assessment",
            href: "/services/Acoustics/NoiseImpactAssessment",
          },
        ],
      },
      {
        name: "Thermographics",
        href: "/services/thermographics",
        sublists: [
          {
            name: "Thermographic Survey",
            href: "/services/ThermoGraphy/thermographicSurvey",
          },
        ],
      },
      {
        name: "Flood Risk",
        href: "/services/floodRisk",
        sublists: [
          {
            name: "Flood Risk Assessment",
            href: "/services/FLoodRisk/FloodRiskAssessment",
          },
        ],
      },
      {
        name: "O&M Manual",
        href: "/services/buildingUser",
        sublists: [
          {
            name: "Building User Guide",
            href: "/services/UserGuide/buildingUserGuide",
          },
        ],
      },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "FAQs", href: "/faqs" },
  { name: "AboutUs", href: "/aboutus" },
  { name: "Contact", href: "/contactUs" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [openSublist, setOpenSublist] = useState(null);
  const [subMenuHovered, setSubMenuHovered] = useState(false);
  const [sublistHovered, setSublistHovered] = useState(false);

  const handleChevronHover = (index) => {
    setOpenSubMenu(index);
  };

  const handleSublistHover = (index) => {
    setOpenSublist(index);
  };

  const handleChevronLeave = () => {
    if (!subMenuHovered) {
      setOpenSubMenu(null);
    }
  };

  const handleSublistLeave = () => {
    if (!sublistHovered) {
      setOpenSublist(null);
    }
  };

  const handleSubMenuEnter = () => {
    setOpenSubMenu(openSubMenu);
  };

  const handleSubMenuLeave = () => {
    setSubMenuHovered(false);
    setOpenSubMenu(null);
  };

  const handleSublistEnter = () => {
    setSublistHovered(true);
  };

  const handleSublistMenuLeave = () => {
    setSublistHovered(false);
    setOpenSublist(null);
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50 bg-white">
        <div className="mx-auto max-w-7xl center-s">
          <div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0 nav-p">
            <nav
              className="flex items-center justify-between lg:justify-start"
              aria-label="Global"
            >
              <a href="/" className="m-1.5 p-1.5">
                <img alt="sees" className="w-24 max-w-2xl" src="/logo.png" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="hidden lg:ml-6 lg:flex lg:gap-x-6 items-center relative">
                {navigation.map((item, index) => (
                  <div key={item.name} className="relative">
                    <a
                      href={item.href}
                      className="text-sm font-semibold leading-6 text-primary"
                      onMouseEnter={() => handleChevronHover(index)}
                      onMouseLeave={handleChevronLeave}
                    >
                      {item.name}
                      <span className="chevron-down">{item.chevron}</span>
                    </a>

                    {openSubMenu === index && item.subItems && (
                      <div
                        className="absolute top-2 left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-100 visible transition-opacity duration-1000 z-10"
                        onMouseEnter={handleSubMenuEnter}
                        onMouseLeave={handleSubMenuLeave}
                      >
                        <div className="py-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <div key={subItem.name} className="relative">
                              <a
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                onMouseEnter={() =>
                                  handleSublistHover(subIndex)
                                }
                                onMouseLeave={handleSublistLeave}
                              >
                                {subItem.name}
                                {subItem.sublists && (
                                  <span className="chevron-right">
                                    {subItem.chevron}
                                  </span>
                                )}
                              </a>
                              {openSublist === subIndex && subItem.sublists && (
                                <div
                                  className="absolute top-0 left-44 mt-0 w-48 bg-white shadow-lg rounded-md opacity-100 visible transition-opacity duration-2000 z-50"
                                  onMouseEnter={handleSublistEnter}
                                  onMouseLeave={handleSublistMenuLeave}
                                >
                                  <div className="py-1">
                                    {subItem.sublists.map((sublistItem) => (
                                      <a
                                        key={sublistItem.name}
                                        href={sublistItem.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                      >
                                        {sublistItem.name}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div>{/* Add any additional content for navigation */}</div>
              </div>
            </nav>
          </div>
        </div>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <img alt="sees" className="w-24 max-w-2xl" src="/logo.png" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary hover:bg-gray-50"
                    >
                      {item.name}
                      <span
                        className="chevron-down"
                        onMouseEnter={() => handleChevronHover(index)}
                        onMouseLeave={handleChevronLeave}
                      >
                        {item.chevron}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default Navigation;
