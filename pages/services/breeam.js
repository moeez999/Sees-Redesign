import React from "react";
import Navigation from "./../../components/navigation";
import ServiceHeader from "../../components/serviceHeader";
import Table from "../../components/tables";
import RatingTable from "../../components/tables";

export default function breeam() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <div>
          <ServiceHeader
            data={{
              backgroundImage: "",
              title: "BREEAM",
            }}
          />
          <h3 className="text-center text-xl md:text-2xl xxl:text-2xl xxxl:text-4xl font-bold text-secondary p-6 my-4 xxxl:p-8">
            Non-domestic Assessment
          </h3>
        </div>
        <div className="flex justify-center">
          <div className="flex justify-between items-center container mx-auto p-4">
            <div className="w-[45%]">
              <p className="text-lg md:text-xl xxl:text-xl xxxl:text-2xl font-bold text-secondary p-4 xxxl:p-8">
                What we bring?
              </p>
              <p className="xxm:text-base xxm:text-center  xsm:text-lg p-4 xxxl:text-2xl">
                With over 10 years of experience and having worked across a
                range of schemes, we can help you achieve your target BREEAM
                rating for your project, all the while recognising opportunities
                to reduce cost and eliminate risk.
              </p>
              <p className="xxm:text-base xxm:text-center font-semibold xsm:text-xl p-4 xxxl:text-2xl text-secondary">
                We are licensed to work across both the non-domestic assessment
                categories:
              </p>
              <ul className="px-4">
                <li className="text-base list-disc">New Construction</li>
                <li className="text-base list-disc">Refurbishment & Fit Out</li>
              </ul>
            </div>
            <div className="w-[45%]">
              <RatingTable></RatingTable>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <p className="xxm:text-base xxm:text-center font-semibold  xsm:text-xl p-4 xxxl:text-2xl text-secondary">
            What types of buildings does BREEAM new construction cover?
          </p>
          <p className="xxm:text-base xxm:text-center font-semibold  xsm:text-base p-4 xxxl:text-2xl text-secondary">
            BRE has divided buildings into categories for ease of the developer
            and the assessor, these are as follows:
          </p>
          <ul className="px-4">
            <li className="text-base list-disc">
              Commercial - Offices, Industrial and Retail​
            </li>
            <li className="text-base list-disc">
              Public - Education, Healthcare, Prisons and Law Courts{" "}
            </li>
            <li className="text-base list-disc">
              Multi-residential Buildings​
            </li>
            <li className="text-base list-disc">
              Other - Residential Institutions (Short term), Non-residential
              institutions, Assembly and leisure and Other
            </li>
          </ul>
          <p className="xxm:text-base xxm:text-center xsm:text-base p-4 xxxl:text-2xl">
            We typically work across Commercial and Other buildings, but this is
            not exhaustive.
          </p>
          <p className="xxm:text-base xxm:text-center font-semibold  xsm:text-xl p-4 xxxl:text-2xl text-secondary">
            Why do I need an assessment?
          </p>
          <p className="xxm:text-base xxm:text-center xsm:text-base p-4 xxxl:text-2xl ">
            There are a variety of reasons as to why you might want to have your
            project assessed. Some schemes will have a specific target level,
            normally around the "Very Good" level, as part of the planning
            condition or local unitary authority planning policy.
          </p>
          <p className="xxm:text-base xxm:text-center xsm:text-base p-4 xxxl:text-2xl ">
            Often when the construction is undertaken on behalf of local
            government authority, BREEAM Target is set as part of the employees
            requirements (ER's), even if it does not for part of the planning
            condition
          </p>
        </div>
      </div>
    </div>
  );
}
