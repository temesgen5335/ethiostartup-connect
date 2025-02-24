import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Job } from "@/types/job";

// Add proper type for the props
interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  // Add error boundary to catch any rendering issues
  try {
    return (
      <div className="p-6 bg-white rounded-lg border hover:border-primary/50 transition-colors">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <Link 
              to={`/companies/${job.companyId}`}
              className="text-gray-600 hover:text-primary"
            >
              {job.companyName}
            </Link>
          </div>
          {/* Add fallback for missing company logo */}
          {job.companyLogo ? (
            <img 
              src={job.companyLogo} 
              alt={job.companyName} 
              className="w-12 h-12 rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder-logo.png';
              }}
            />
          ) : (
            <div className="w-12 h-12 rounded-lg bg-gray-100" />
          )}
        </div>

        <div className="flex gap-2 mb-4">
          <Badge>{job.locationType}</Badge>
          <Badge variant="outline">{job.type}</Badge>
          <Badge variant="secondary">${job.salary.toLocaleString()}</Badge>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {job.description}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {job.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
          <Button>Apply Now</Button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering JobCard:', error);
    return null;
  }
}; 