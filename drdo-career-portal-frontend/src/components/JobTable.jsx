import React from "react";
import { useNavigate } from "react-router-dom";

const JobTable = () => {
  const navigate = useNavigate();
  const handleApply = (job) => {
    navigate(`/apply/${job.id}`, { state: { job } });
  };
  const jobListings = [
    {
      id: 1,
      title: "Junior Research Fellow",
      publishDate: "15-Sep-2024",
      lastDate: "15-Oct-2024",
      category: "Research",
      link: "#",
      documents: "#",
      status: "Open",
    },
    {
      id: 2,
      title: "Senior Scientist",
      publishDate: "02-Oct-2024",
      lastDate: "25-Oct-2024",
      category: "Science",
      link: "#",
      documents: "#",
      status: "Open",
    },
    {
      id: 3,
      title: "Winter Internship",
      publishDate: "15-Sep-2024",
      lastDate: "15-Oct-2024",
      category: "Internship",
      link: "#",
      documents: "#",
      status: "Closed",
    },
    {
      id: 4,
      title: "Junior Scientist",
      publishDate: "02-Oct-2024",
      lastDate: "25-Oct-2024",
      category: "Science",
      link: "#",
      documents: "#",
      status: "Closed",
    },
    {
      id: 5,
      title: "Product Manager",
      publishDate: "2024-11-01",
      lastDate: "2024-12-01",
      category: "Management",
      link: "#",
      documents: "Resume, Portfolio",
      status: "Open",
    },
    // Add more listings as needed
  ];

  return (
    <div className="container mx-auto p-4 mb-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        DRDO Career Opportunities
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-secondary text-white">
            <tr>
              <th className="py-3 px-5 text-center">S.No.</th>
              <th className="py-3 px-5 text-center">Title</th>
              <th className="py-3 px-5 text-center">Publish Date</th>
              <th className="py-3 px-5 text-center">Last Date</th>
              <th className="py-3 px-5 text-center">Category</th>
              <th className="py-3 px-5 text-center">Link</th>
              <th className="py-3 px-5 text-center">Document</th>
              <th className="py-3 px-5 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {jobListings.map((job, index) => (
              <tr key={job.id} className="even:bg-gray-100 hover:bg-gray-50">
                <td className="py-3 px-5 text-center">{index + 1}</td>
                <td className="py-3 px-5 text-center">{job.title}</td>
                <td className="py-3 px-5 text-center">{job.publishDate}</td>
                <td className="py-3 px-5 text-center">{job.lastDate}</td>
                <td className="py-3 px-5 text-center">{job.category}</td>
                <td className="py-3 px-5 text-center">
                  <button
                    onClick={() => handleApply(job)}
                    className="text-white bg-green-500 hover:bg-green-700 py-1 px-3 rounded-lg"
                  >
                    Apply
                  </button>
                </td>
                <td className="py-3 px-5 text-center">
                  <a
                    href={job.documents}
                    className="text-white bg-blue-500 hover:bg-blue-700 py-1 px-3 rounded-lg"
                  >
                    View
                  </a>
                </td>
                <td className="py-3 px-5 text-center">
                  <span
                    className={`py-1 px-3 rounded-full ${
                      job.status === "Open"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobTable;
