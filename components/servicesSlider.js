const services = [
  {
    id: 1,
    name: "BREEAM",
    imageSrc: "Service Logos/BREEAM.png",
    href: "/services/breeam",
  },
  {
    id: 2,
    name: "Water Calculations",
    imageSrc: "Service Logos/Water Calculations.png",
    href: "/services/waterCalculations",
  },
  {
    id: 3,
    name: "Air Quality",
    imageSrc: "Service Logos/IndoorAirQuality.png",
    href: "/services/indoorAirQuality",
  },
  {
    id: 4,
    name: "Air testing",
    imageSrc: "Service Logos/Air testing.png",
    href: "/services/airTightnessTesting",
  },
  {
    id: 5,
    name: "Acoustics",
    imageSrc: "Service Logos/Acoustics.png",
    href: "/services/acoustics",
  },
  {
    id: 6,
    name: "Daylight calculations",
    imageSrc: "Service Logos/Daylight calculations.png",
    href: "services/dayLightining",
  },
  {
    id: 7,
    name: "Energy strategy",
    imageSrc: "Service Logos/Energy strategy.png",
    href: "/services/energyStrategy",
  },
  {
    id: 8,
    name: "Flood risk assessments",
    imageSrc: "Service Logos/Flood risk assessments.png",
    href: "/services/floodRisk",
  },
  {
    id: 9,
    name: "Thermal Bridging",
    imageSrc: "Service Logos/thermalBridging.png",
    href: "/services/thermalBridging",
  },
  {
    id: 10,
    name: "SAP",
    imageSrc: "Service Logos/SAP.png",
    href: "/services/partLepcSap",
  },
  {
    id: 11,
    name: "SBEM",
    imageSrc: "Service Logos/SBEM.png",
    href: "/services/partLEPC_SBEM",
  },
  {
    id: 12,
    name: "Thermal Modelling",
    imageSrc: "Service Logos/Thermal Modelling.png",
    href: "/services/thermalModelling",
  },
  {
    id: 13,
    name: "Building Life Cycle",
    imageSrc: "Service Logos/Building Life Cycle.png",
    href: "/services/buildingLifeCycle",
  },
  {
    id: 14,
    name: "Building User Guide",
    imageSrc: "Service Logos/Building User Guide.png",
    href: "/services/buildingUser",
  },
  {
    id: 14,
    name: "Thermographics",
    imageSrc: "Service Logos/Thermal Modelling.png",
    href: "/services/thermographics",
  },
];

const ServicesSlider = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 p-6 my-4">
      {services.map((service) => (
        <a key={service.id} href={service.href}>
          <div key={service.id} className="w-44 service-cards">
            <img
              className="w-full h-full hover:scale-110"
              src={service.imageSrc}
              alt={service.name}
            />
            <p className="text-center text-lg">{service.name}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ServicesSlider;
