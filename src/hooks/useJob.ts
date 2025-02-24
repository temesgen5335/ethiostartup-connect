import { useQuery } from "@tanstack/react-query";
import { Job } from "@/types/job";

// Mock data for a single job
const mockJob: Job = {
  id: "1",
  title: "Frontend Developer",
  companyId: "1",
  companyName: "TechCo Ethiopia",
  companyLogo: "/company-logos/techco.png",
  locationType: "Remote",
  type: "Full-time",
  salary: 50000,
  description: "We're looking for a skilled Frontend Developer with experience in React and TypeScript...",
  skills: ["React", "TypeScript", "Tailwind"],
};

export const useJob = (id: string | undefined) => {
  return useQuery({
    queryKey: ["job", id],
    queryFn: async () => {
      if (!id) return null;
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockJob;
    },
  });
}; 