import { JobCard } from "./JobCard";
import { useJobs } from "@/hooks/useJobs";
import { Loader2 } from "lucide-react";

export const JobList = ({ filters }) => {
  const { data: jobs, isLoading, error } = useJobs(filters);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-8">
        Error loading jobs. Please try again later.
      </div>
    );
  }

  if (!jobs?.length) {
    return (
      <div className="text-center text-gray-500 py-8">
        No jobs found matching your criteria.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}; 