import React, { useState } from "react";
import Navigation from "./navigation";

export default function HeroSection() {
  return (
    <div className="bg-white">
      <Navigation />
      <div className="relative bg-secondary h-screen">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute h-screen inset-y-0 right-8 hidden w-80 translate-x-1/2 transform fill-secondary lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="main">
                  <h1 className="text-primary text-3xl md:text-4xl xxl:text-5xl xxxl:text-7xl">
                    THE HOME OF BUILDING
                    <div className="roller text-white">
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
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Tell us what project you are planning and we will let you know
                  what you might need.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="/contactUs"
                    className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-secondary hover:border-secondary border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="#service-section"
                    className="text-sm font-semibold leading-6 text-primary"
                  >
                    Find Out More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/hero.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
