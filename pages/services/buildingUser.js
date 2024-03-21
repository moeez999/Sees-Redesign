import React from "react";
import Navigation from "../../components/navigation";
import Card from "../../components/ServicesCards";
import Footer from "../../components/footer";

export default function buildingUser() {
  return (
    <div>
      <div className="breeam ">
        <Navigation />
      </div>
      <div className="my-24  h-screen">
        <div className="flex flex-row justify-center items-center relative bg-secondary">
          <h2 className="text-4xl font-bold text-center py-4 tracking-tight text-white sm:text-6xl  animate__animated animate__backInLeft animate__slow">
            O&M Manual
          </h2>
          <div className=" w-24 animate__animated animate__backInRight animate__slow ">
            <img src="../White-Images/white_20-book.png" />
          </div>
        </div>

        <div className="flex flex-row justify-center flex-wrap gap-8 mt-28 p-4 w-full xxm:gap-60">
          <Card
            color="#509e2f"
            title="Building User Guide"
            image="../Images/download.jpeg"
            content=" A building user guide (BUG) should help building users and facilities managers access, understand and operate the building efficiently and in accordance with the original design intent."
            nav="/services/UserGuide/buildingUserGuide"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
