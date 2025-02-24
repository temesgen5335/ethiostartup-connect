import { Card } from "@/components/ui/card";
import { useJobStats } from "@/hooks/useJobStats";

export const JobAnalytics = () => {
  const { data: stats, isLoading } = useJobStats();

  if (isLoading) return null;

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="p-4">
        <p className="text-sm text-gray-600">Total Jobs</p>
        <p className="text-2xl font-bold">{stats.totalJobs}</p>
      </Card>
      <Card className="p-4">
        <p className="text-sm text-gray-600">Companies Hiring</p>
        <p className="text-2xl font-bold">{stats.activeCompanies}</p>
      </Card>
      <Card className="p-4">
        <p className="text-sm text-gray-600">New This Week</p>
        <p className="text-2xl font-bold">{stats.newJobs}</p>
      </Card>
    </div>
  );
}; 