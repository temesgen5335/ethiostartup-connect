import { useQuery } from "@tanstack/react-query";
import { Job } from "@/types/job";

interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  description: string;
  openPositions?: Job[];
}

// Mock company data
const mockCompany: Company = {
  id: "1",
  name: "TechCo Ethiopia",
  logo: "/company-logos/techco.png",
  industry: "Technology",
  description: "Leading technology company in Ethiopia focused on innovation...",
};

export const useCompany = (id: string | undefined) => {
  return useQuery({
    queryKey: ["company", id],
    queryFn: async () => {
      if (!id) return null;
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockCompany;
    },
  });
}; 