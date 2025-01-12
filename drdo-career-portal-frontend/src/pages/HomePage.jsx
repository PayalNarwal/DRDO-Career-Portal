// import React from 'react';
import JobCard from "../components/JobCard";
import NavBar from "../components/NavBar";

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
    {
      id: 1,
      title: "Software Intern",
      description: "Work on MERN stack projects.",
    },
    {
      id: 2,
      title: "Cybersecurity Intern",
      description: "Assist in cybersecurity research.",
    },
  ];
  return (
    <>
      <NavBar />
    </>
  );
};

export default HomePage;
