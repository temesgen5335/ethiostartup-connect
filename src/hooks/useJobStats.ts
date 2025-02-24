import { useQuery } from "@tanstack/react-query";

interface JobStats {
  totalJobs: number;
  activeCompanies: number;
  newJobs: number;
}

export const useJobStats = () => {
  return useQuery({
    queryKey: ["jobStats"],
    queryFn: async () => {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        totalJobs: 150,
        activeCompanies: 45,
        newJobs: 23,
      };
    },
  });
}; 