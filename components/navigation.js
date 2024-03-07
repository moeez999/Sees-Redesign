import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const chevron = <i className="fa-solid fa-chevron-down"></i>;
const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services ",
    href: "/services",
    chevron: chevron,
    subItems: [
      { name: "BREEAM", href: "/services/breeam" },
      { name: "Building Life Cycle", href: "/services/buildingLifeCycle" },
      { name: "Thermal Modelling", href: "/services/thermalModelling" },
      { name: "Part L/EPC SAP", href: "/services/partLEPC_SAP" },
      { name: "Part L/EPC SBEM", href: "/services/partLEPC_SBEM" },
      { name: "Airtightness Testing", href: "/services/airTightnessTesting" },
      { name: "Water Calculations", href: "/services/waterCalculations" },
      { name: "Energy Strategy", href: "/services/energyStrategy" },
      { name: "Indoor Air Quality", href: "/services/indoorAirQuality" },
      { name: "Daylighting", href: "/services/dayLightining" },
      { name: "Acoustics", href: "/services/acoustics" },
      { name: "Thermographics", href: "/services/thermographics" },
      { name: "Flood Risk", href: "/services/floodRisk" },
      {
        name: "Building User Guide/O&M Manual",
        href: "/services/buildingUserGuide",
      },
    ],
  },
  { name: "Faqs", href: "/faqs" },
  { name: "AboutUs", href: "/aboutus" },
  { name: "Contact", href: "/contactUs" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const [subMenuHovered, setSubMenuHovered] = useState(false);

  const handleChevronHover = (index) => {
    setOpenSubMenu(index);
  };

  const handleChevronLeave = () => {
    if (!subMenuHovered) {
      setOpenSubMenu(null);
    }
  };

  const handleSubMenuEnter = () => {
    setSubMenuHovered(true);
  };

  const handleSubMenuLeave = () => {
    setSubMenuHovered(false);
    setOpenSubMenu(null);
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
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
              <div className="hidden lg:ml-6 lg:flex lg:gap-x-14 items-center relative">
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

                    {openSubMenu === index && (
                      <div
                        className="absolute top-2 left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-100 visible transition-opacity duration-200 z-10"
                        onMouseEnter={handleSubMenuEnter}
                        onMouseLeave={handleSubMenuLeave}
                      >
                        <div className="py-1">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
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
                      {openSubMenu === index && (
                        <div
                          className="absolute top-2 left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-100 visible transition-opacity duration-200 z-10"
                          onMouseEnter={handleSubMenuEnter}
                          onMouseLeave={handleSubMenuLeave}
                        >
                          <div className="py-1">
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
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
