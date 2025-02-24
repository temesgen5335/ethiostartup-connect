import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const JobSidebar = () => {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
        <div className="space-y-4">
          <Link to="/jobs/post">
            <Button className="w-full">Post a Job</Button>
          </Link>
          <Button variant="outline" className="w-full">
            Upload Resume
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">Hiring Trends</h3>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium">Top Industries</p>
            <p className="text-gray-600">Technology, Finance, Healthcare</p>
          </div>
          <div>
            <p className="text-sm font-medium">Most In-Demand Skills</p>
            <p className="text-gray-600">React, Python, Data Analysis</p>
          </div>
        </div>
      </Card>
    </div>
  );
}; 