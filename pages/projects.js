import React from "react";
import Navigation from "../components/navigation";
import ProjectCards from "./../components/projectCards";

const Projects = () => {
  return (
    <div>
      <Navigation />

      <div className="mt-24">
        <div className="flex justify-center items-center bg-secondary py-4">
        <h1 className="text-center text-5xl text-white font-semibold">Projects</h1>

        </div>
        <ProjectCards />
      </div>
    </div>
  );
};

export default Projects;
