import { useState } from "react";
import { JobFilters } from "./JobFilters";
import { JobList } from "./JobList";
import { JobSidebar } from "./JobSidebar";

export const JobsContent = () => {
  const [filters, setFilters] = useState({
    role: "",
    industry: "",
    experience: "",
    salaryMin: 0,
    salaryMax: 100000,
    location: "",
    type: "all", // full-time, part-time, contract, internship
  });

  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Left Sidebar - Filters */}
      <div className="col-span-12 lg:col-span-3">
        <JobFilters filters={filters} setFilters={setFilters} />
      </div>

      {/* Main Content - Job Listings */}
      <div className="col-span-12 lg:col-span-6">
        <JobList filters={filters} />
      </div>

      {/* Right Sidebar - Analytics & Quick Actions */}
      <div className="col-span-12 lg:col-span-3">
        <JobSidebar />
      </div>
    </div>
  );
}; 