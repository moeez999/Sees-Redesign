const services = [
  {
    id: 1,
    name: "BREEAM",
    imageSrc: "Service Logos/BREEAM.png",
  },
  {
    id: 2,
    name: "Water Calculations",
    imageSrc: "Service Logos/Water Calculations.png",
  },
  { id: 3, name: "Air Quality", imageSrc: "Service Logos/Air Quality.png" },
  { id: 4, name: "Air testing", imageSrc: "Service Logos/Air testing.png" },
  {
    id: 5,
    name: "Acoustics",
    imageSrc: "Service Logos/Acoustics.png",
  },
  {
    id: 6,
    name: "Daylight calculations",
    imageSrc: "Service Logos/Daylight calculations.png",
  },
  {
    id: 7,
    name: "Energy strategy",
    imageSrc: "Service Logos/Energy strategy.png",
  },
  {
    id: 8,
    name: "Flood risk assessments",
    imageSrc: "Service Logos/Flood risk assessments.png",
  },
  {
    id: 9,
    name: "Renewable energy Assessments",
    imageSrc: "Service Logos/Renewable energy Assessments.png",
  },
  {
    id: 10,
    name: "SAP",
    imageSrc: "Service Logos/SAP.png",
  },
  {
    id: 11,
    name: "SBEM",
    imageSrc: "Service Logos/SBEM.png",
  },
  {
    id: 12,
    name: "Thermal Modelling",
    imageSrc: "Service Logos/Thermal Modelling.png",
  },
  {
    id: 13,
    name: "Building Life Cycle",
    imageSrc: "Service Logos/Building Life Cycle.png",
  },
  {
    id: 14,
    name: "Building User Guide",
    imageSrc: "Service Logos/Building User Guide.png",
  },
];

const ServicesSlider = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 p-6 my-4">
      {services.map((service) => (
        <div key={service.id} className="w-44 service-cards">
          <img src={service.imageSrc} alt={service.name} />
          <p className="text-center text-lg">{service.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ServicesSlider;
