import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AdminJobTable = (props) => {
  const navigate = useNavigate();
  const { username } = useParams();

  const [jobListings, setJobListings] = useState([
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
  ]);

  const handleCreateNew = () => {
    navigate(`/admin/${username}/new`);
  };
  const handleEdit = (job) => {
    navigate(`/admin/${username}/edit/${job.id}`, { state: { job } });
  };

  const handleDelete = (jobToDelete) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${jobToDelete.title}"?`
    );
    if (confirmDelete) {
      setJobListings(jobListings.filter((job) => job.id !== jobToDelete.id));
    }
  };

  return (
    <div className="container mx-auto p-4 mb-6">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Opportunities posted by you
        </h1>
        <button
          onClick={handleCreateNew}
          className="text-white font-bold text-center mb-4 bg-yellow-400 hover:bg-yellow-500 py-1 px-3 rounded-lg"
        >
          Post New Job
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-secondary text-white">
            <tr>
              <th className="py-3 px-5 text-center">S.No.</th>
              <th className="py-3 px-5 text-center">Title</th>
              <th className="py-3 px-5 text-center">Publish Date</th>
              <th className="py-3 px-5 text-center">Last Date</th>
              <th className="py-3 px-5 text-center">Category</th>
              <th className="py-3 px-5 text-center">Document</th>
              <th className="py-3 px-5 text-center">Status</th>
              <th className="py-3 px-5 text-center">Update</th>
              <th className="py-3 px-5 text-center">Delete</th>
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
                <td className="py-3 px-5 text-center">
                  <button
                    onClick={() => handleEdit(job)}
                    className="text-white bg-green-500 hover:bg-green-700 py-1 px-3 rounded-lg"
                  >
                    Edit
                  </button>
                </td>
                <td className="py-3 px-5 text-center">
                  <button
                    onClick={() => handleDelete(job)}
                    className="text-white bg-red-500 hover:bg-red-700 py-1 px-3 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminJobTable;
