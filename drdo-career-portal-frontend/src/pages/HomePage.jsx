// import React from 'react';
import JobCard from "../components/JobCard";

// const HomePage = () => {
//   const jobs = [
//     { id: 1, title: "Software Intern", description: "Work on MERN stack projects." },
//     { id: 2, title: "Cybersecurity Intern", description: "Assist in cybersecurity research." },
//   ];

//   return (
//     <div>
//       <h1>Open Internship Positions</h1>
//       <div>
//         {jobs.map((job) => (
//           <JobCard key={job.id} job={job} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";

const HomePage = () => {
  const jobs = [
    { id: 1, title: "Software Intern", description: "Work on MERN stack projects." },
    { id: 2, title: "Cybersecurity Intern", description: "Assist in cybersecurity research." },
  ];
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to DRDO Job Portal
        </h1>
        <p className="mt-4 text-gray-600 p-8">
          Find exciting internship opportunities at DRDO and shape your future.
        </p>
        {/* <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
          Explore Internships
        </button> */}
      </div>
      <div>
        <h1>Open Internship Positions</h1>
        <div>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
