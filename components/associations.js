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
    <div className="flex lg:flex-row-reverse items-center justify-center flex-col ">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:xl:grid-cols-6 gap-4 p-6 my-4">
        {associations.map((association) => (
          <div key={association.id} className="w-44 p-4 associations-cards">
            <img src={association.imageSrc} alt={association.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociationsSlider;
