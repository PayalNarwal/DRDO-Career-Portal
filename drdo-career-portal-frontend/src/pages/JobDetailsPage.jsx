import React from 'react';
import { useParams } from 'react-router-dom';

const JobDetailsPage = () => {
  const { jobId } = useParams();

  // Replace this with an API call to fetch job details by ID
  const job = { title: "Software Intern", description: "Work on MERN stack projects." };

  return (
    <div>
      <h1>{job.title} - Job ID: {jobId}</h1>
      <p>{job.description}</p>

      <form>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />
        <label>Resume:</label>
        <input type="file" required />
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default JobDetailsPage;
