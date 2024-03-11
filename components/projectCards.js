import React from "react";

const projects = [
  {
    title: "Temple Quay House, Bristol",
    image: "https://i.ibb.co/tCKLc3d/audience-band-club-2747446.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor mauris, eleifend ac fermentum at, pellentesque non sem. Vivamus lectus felis, porttitor eu est sit amet, aliquet laoreet ligula.",
  },
  {
    title: "Temple Quay House, Bristol",
    image: "https://i.ibb.co/3hnXN31/4k-wallpaper-audience-band-2728557.jpg",
    description: "Another description here.",
  },
  {
    title: "Temple Quay House, Bristol",
    image: "https://i.ibb.co/vqsdkRt/cheerful-concert-crowd-849.jpg",
    description: "Yet another description.",
  },
];

export default function ProjectCards() {
  return (
    <div className="project">
      <div className="container">
        {projects.map((project, index) => (
          <div className="item" key={index}>
            <h1 className="text-2xl text-white absolute z-[100]">{project.title}</h1>
            <div className="card">
              <div className="circle circle2"></div>
              <div className="circle circle1"></div>
              <img src={project.image} alt={`Project ${index + 1}`} />
            </div>
            <div className="content">
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}
