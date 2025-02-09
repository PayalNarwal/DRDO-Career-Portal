import React, { useState, useEffect } from "react";

const UpdateJobForm = ({ jobData, onUpdate }) => {
  const [jobName, setJobName] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [status, setStatus] = useState("Open");
  const [document, setDocument] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (jobData) {
      setJobName(jobData.jobName);
      setCategory(jobData.category);
      setPublishDate(jobData.publishDate);
      setLastDate(jobData.lastDate);
      setStatus(jobData.status);
    }
  }, [jobData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("jobName", jobName);
    formData.append("category", category);
    formData.append("publishDate", publishDate);
    formData.append("lastDate", lastDate);
    formData.append("status", status);
    if (document) {
      formData.append("document", document);
    }

    fetch(`/api/jobs/${jobData.id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Job updated successfully:", data);
        if (onUpdate) onUpdate(data);
      })
      .catch((error) => {
        console.error("Error updating job:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-[#023c73] mb-6">
        Update Job
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job Name
          </label>
          <input
            type="text"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-xl shadow-sm focus:ring-[#023c73] focus:border-[#023c73]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-xl shadow-sm focus:ring-[#023c73] focus:border-[#023c73]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Publish Date
          </label>
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-xl shadow-sm focus:ring-[#023c73] focus:border-[#023c73]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Date
          </label>
          <input
            type="date"
            value={lastDate}
            onChange={(e) => setLastDate(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-xl shadow-sm focus:ring-[#023c73] focus:border-[#023c73]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-xl shadow-sm focus:ring-[#023c73] focus:border-[#023c73]"
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Document (PDF)
          </label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setDocument(e.target.files[0])}
            className="mt-1 block w-full p-2 border rounded-xl shadow-sm focus:ring-[#023c73] focus:border-[#023c73]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#023c73] text-white py-2 px-4 rounded-full font-medium shadow-md hover:bg-[#03529c]"
        >
          Update Job
        </button>
      </form>
    </div>
  );
};

export default UpdateJobForm;
