const JobCard = ({ job }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:bg-blue-50 relative group">
      {/* DRDO Logo */}
      <div className="flex flex-col items-center space-x-4">
        <img
          src="../../public/drdo-logo.jpg" // Replace with the actual DRDO logo
          alt="DRDO Logo"
          className="w-20 h-20 rounded-full"
        />
        <div className="flex-1">
          {/* Job Position Name */}
          <h3 className="text-xl font-semibold">{job}</h3>
        </div>
      </div>

      {/* Underline (appears on hover) */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-[#023c73] scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300" />
    </div>
  );
};

export default JobCard;
