import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    companyName: "",
    phoneNumber: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your form submission logic
    console.log(formData);
    // Reset the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      companyName: "",
      phoneNumber: "",
      file: null,
    });
  };

  return (
    <form
      className="max-w-xl mx-auto rounded p-8 shadow-xl border-secondary border"
      onSubmit={handleSubmit}
    >
      <div><h1 className="text-xl text-secondary font-semibold py-6">Tell us about your project</h1></div>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block font-medium text-secondary text-sm"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none "
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block font-medium text-secondary text-sm"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none "
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block font-medium text-secondary text-sm"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none "
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block font-medium text-secondary text-sm"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none "
          rows="4"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="companyName"
          className="block font-medium text-secondary text-sm"
        >
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none "
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block font-medium text-secondary text-sm"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none "
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="file"
          className="block font-medium text-secondary text-sm"
        >
          Upload File
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={handleFileChange}
          className="mt-1 block w-full border border-gray-300 rounded-md focus:outline-none "
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="py-2 px-4 w-full border border-transparent border-b-2 border-[#509e2f] shadow-sm text-sm font-medium rounded-md text-white bg-secondary hover:bg-white hover:text-secondary  "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
