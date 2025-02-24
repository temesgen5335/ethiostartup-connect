import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const PostJobButton = () => {
  return (
    <Link to="/jobs/post">
      <Button>
        <Plus className="w-4 h-4 mr-2" />
        Post a Job
      </Button>
    </Link>
  );
}; 