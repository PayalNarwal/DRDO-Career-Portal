import React, { useState, useEffect } from 'react';
import JobCard from './JobCard';

const JobPositions = () => {
  const [jobs, setJobs] = useState([]);

  // Example jobs data (replace with real data)
  useEffect(() => {
    setJobs([
      { id: 1, title: 'Software Engineer', location: 'New Delhi', description: 'Responsible for developing and maintaining software applications.' },
      { id: 2, title: 'Data Analyst', location: 'Bangalore', description: 'Analyze and interpret complex data to provide actionable insights.' },
      { id: 3, title: 'Data Analyst', location: 'Bangalore', description: 'Analyze and interpret complex data to provide actionable insights.' },
      // Add more jobs here...
    ]);
  }, []);

  return (
    <div className="px-4 py-8 w-[90vw] mx-auto">
      <h1 className="text-3xl font-semibold text-primary mb-6">Open Positions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard job={job.title} />
        ))}
      </div>
    </div>
  );
};

export default JobPositions;
