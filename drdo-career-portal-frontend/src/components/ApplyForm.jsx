import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ApplyForm = () => {
  const location = useLocation();
  const job = location.state?.job;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    dob: "",
    address: "",
    tenthMarksheet: null,
    twelfthMarksheet: null,
    graduationMarksheet: null,
    resume: null,
    coverLetter: null,
    photoID: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("Please log in to submit the application.");
      return;
    }
    alert("Application Submitted Successfully!");
  };

  return (
    <div className="p-8 mt-4 mb-6 max-w-5xl mx-auto bg-white shadow-lg rounded-xl">
      {job && (
        <div className="flex items-center mb-8 bg-gradient-to-t from-blue-100 to-gray-100 p-6 rounded-lg shadow-md">
          <div className="w-2/3">
            <h2 className="text-3xl font-extrabold text-primary mb-2">
              {job.title}
            </h2>
            <p className="text-lg text-gray-700">
              <strong>Category:</strong> {job.category}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Publish Date:</strong> {job.publishDate}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Last Date:</strong> {job.lastDate}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  job.status === "Open" ? "text-green-600" : "text-red-600"
                }`}
              >
                {job.status}
              </span>
            </p>
            <p className="text-lg text-gray-700">
              <strong>Document: </strong>
              <a
                href={job.documents}
                className="text-white text-lg bg-blue-500 hover:bg-blue-700 py-1 px-2 rounded-lg"
              >
                View
              </a>
            </p>
          </div>
        </div>
      )}
      {isLoggedIn && job?.status === "Open" ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Mobile Number", name: "mobile", type: "tel" },
              { label: "Email ID", name: "email", type: "email" },
              { label: "Date of Birth", name: "dob", type: "date" },
            ].map(({ label, name, type }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-transparent"
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                label: "10th Marksheet",
                name: "tenthMarksheet",
                required: false,
              },
              {
                label: "12th Marksheet",
                name: "twelfthMarksheet",
                required: false,
              },
              {
                label: "Graduation Marksheet (if applicable)",
                name: "graduationMarksheet",
                required: false,
              },
              {
                label: "Resume",
                name: "resume",
                required: false,
                accept: ".pdf",
              },
              {
                label: "Cover Letter (if applicable)",
                name: "coverLetter",
                required: false,
                accept: ".pdf",
              },
              {
                label: "Photo ID Proof (Aadhar, Passport, etc.)",
                name: "photoID",
                required: false,
              },
            ].map(({ label, name, required, accept }) => (
              <div key={name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {label}
                </label>
                <input
                  type="file"
                  name={name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  accept={accept || ".pdf, .jpg, .png"}
                  required={required}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-42 bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center text-red-600 font-semibold mt-6">
            {job?.status === "Open" ? "Please log in to submit your application." : "Applications are closed for this job."}
        </div>
      )}
    </div>
  );
};

export default ApplyForm;
