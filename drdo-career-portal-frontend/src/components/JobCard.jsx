import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <div className="job-card">
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <button onClick={handleViewDetails}>View Details</button>
    </div>
  );
};

export default JobCard;
