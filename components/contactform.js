import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("http://localhost:3001/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        // Reset the form after successful submission if needed
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      className="max-w-xl mx-auto rounded p-8 shadow-xl border-secondary border bg-white sticky top-0"
      onSubmit={handleSubmit}
    >
      <div className="w-64">
        <img src="../../Images/best-contact-us-pages-2.png" alt="Contact Us" />
      </div>
      <div>
        <h1 className="text-xl text-secondary font-semibold py-6">
          Tell us about your project
        </h1>
      </div>
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
