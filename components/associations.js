const associations = [
  {
    id: 1,
    name: "Approved_Logo-_Member_Quality_Promise",
    imageSrc: "Associations/Approved_Logo-_Member_Quality_Promise.png",
  },
  {
    id: 2,
    name: "ATTMA logo",
    imageSrc: "Associations/ATTMA logo.png",
  },
  {
    id: 3,
    name: "BREEAM_Recognition_LicensedAssessorCompany_A4",
    imageSrc: "Associations/BREEAM_Recognition_LicensedAssessorCompany_A4.png",
  },
  { id: 4, name: "IES TAP", imageSrc: "Associations/IES TAP.png" },
  {
    id: 5,
    name: "certified-mark-colour",
    imageSrc: "Associations/certified-mark-colour.png",
  },
  {
    id: 6,
    name: "DesignBuilder",
    imageSrc: "Associations/DesignBuilder.png",
  },
];

const AssociationsSlider = () => {
  return (
    <div className="flex lg:flex-row-reverse items-center justify-center flex-col">
      <div className="md:w-[30%] ">
        <h1 className="text-3xl font-semibold md:text-center  text-primary p-4 xxxl:text-5xl">
          <span className="text-secondary">Our</span> associations
        </h1>
        <p className="text-base md:text-center">
          We know that you need complete confidence in your supply chain. That's
          why we're backed by industry leading certification and quality
          standards.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 p-6 my-4">
        {associations.map((service) => (
          <div className="w-44 p-4 associations-cards">
            <img src={service.imageSrc} alt={service.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociationsSlider;
