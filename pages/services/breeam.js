import React from "react";
import Navigation from "./../../components/navigation";
import ServiceHeader from "../../components/serviceHeader";

export default function breeam() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className=" ">
        <div>
          <ServiceHeader
            data={{
              backgroundImage: "",
              title: "BREEAM",
            }}
          />

          <h3 className="text-center text-xl md:text-2xl xxl:text-2xl xxxl:text-4xl font-bold text-secondary p-4 xxxl:p-8">
            Non-domestic Assessment
          </h3>
          <p className="text-lg md:text-xl xxl:text-xl xxxl:text-2xl font-bold text-secondary p-4 xxxl:p-8">
            What we bring?
          </p>
          <p className="xxm:text-base xxm:text-center  xsm:text-lg p-4 xxxl:text-2xl">
            With over 10 years of experience and having worked across a range of
            schemes, we can help you achieve your target BREEAM rating for your
            project, all the while recognising opportunities to reduce cost and
            eliminate risk.
          </p>
          <p className="xxm:text-base xxm:text-center  xsm:text-xl p-4 xxxl:text-2xl text-secondary">
            We are licensed to work across both the non-domestic assessment
            categories:
          </p>
          <ul className="px-4">
            <li className="text-base">New Construction</li>
            <li className="text-base">Refurbishment & Fit Out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
