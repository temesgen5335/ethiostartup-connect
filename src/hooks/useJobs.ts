import { useQuery } from "@tanstack/react-query";
import { Job } from "@/types/job";

// Mock data with multiple jobs
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Frontend Developer",
    companyId: "1",
    companyName: "TechCo Ethiopia",
    companyLogo: "/company-logos/techco.png",
    locationType: "Remote",
    type: "Full-time",
    salary: 50000,
    description: "We're looking for a skilled Frontend Developer...",
    skills: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: "2",
    title: "Backend Engineer",
    companyId: "2",
    companyName: "FinTech Solutions",
    companyLogo: "/company-logos/fintech.png",
    locationType: "Hybrid",
    type: "Full-time",
    salary: 60000,
    description: "Join our backend team to build scalable systems...",
    skills: ["Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "3",
    title: "Product Designer",
    companyId: "1",
    companyName: "TechCo Ethiopia",
    companyLogo: "/company-logos/techco.png",
    locationType: "On-site",
    type: "Full-time",
    salary: 45000,
    description: "Looking for a creative product designer...",
    skills: ["Figma", "UI/UX", "Design Systems"],
  },
];

export const useJobs = (filters: any) => {
  return useQuery({
    queryKey: ["jobs", filters],
    queryFn: async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Return mock data
      return mockJobs;
    },
    // Add these options to prevent unnecessary loading states
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
    gcTime: 1000 * 60 * 30, // Keep data in cache for 30 minutes
  });
}; 