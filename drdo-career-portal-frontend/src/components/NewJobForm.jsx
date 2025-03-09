import React, { useState, useEffect } from "react";

const NewJobForm = () => {
  const [jobName, setJobName] = useState("");
  const [category, setCategory] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [status, setStatus] = useState("Open");
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setPublishDate(today);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data
    const formData = new FormData();
    formData.append("title", jobName);
    formData.append("category", category);
    formData.append("startDate", publishDate);
    formData.append("endDate", lastDate);
    formData.append("status", status);
    formData.append("document", document);

    // Send formData to your backend API
    fetch(`http://localhost:8080/jobs`, {
      method: "POST",
      body: formData,      
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Job posted successfully:", data);
        // Reset form
        setJobName("");
        setCategory("");
        const today = new Date().toISOString().split("T")[0];
        setPublishDate(today);
        setLastDate("");
        setStatus("Open");
        setDocument(null);
      })
      .catch((error) => {
        console.error("Error posting job:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-[#023c73] mb-6">
        Post a New Job
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
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#023c73] text-white py-2 px-4 rounded-full font-medium shadow-md hover:bg-[#03529c]"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default NewJobForm;
