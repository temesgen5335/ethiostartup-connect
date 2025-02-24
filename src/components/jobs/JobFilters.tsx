import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

export const JobFilters = ({ filters, setFilters }) => {
  return (
    <div className="space-y-6 p-6 bg-white rounded-lg border">
      <h3 className="font-semibold text-lg">Filters</h3>
      
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium">Role</label>
          <Input 
            placeholder="e.g. Software Engineer"
            value={filters.role}
            onChange={(e) => setFilters({...filters, role: e.target.value})}
          />
        </div>

        <div>
          <label className="text-sm font-medium">Industry</label>
          <Select
            value={filters.industry}
            onValueChange={(value) => setFilters({...filters, industry: value})}
          >
            <option value="">All Industries</option>
            <option value="tech">Technology</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            {/* Add more industries */}
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium">Experience Level</label>
          <Select
            value={filters.experience}
            onValueChange={(value) => setFilters({...filters, experience: value})}
          >
            <option value="">All Levels</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </Select>
        </div>

        <div>
          <label className="text-sm font-medium">Salary Range</label>
          <Slider
            min={0}
            max={100000}
            step={1000}
            value={[filters.salaryMin, filters.salaryMax]}
            onValueChange={([min, max]) => 
              setFilters({...filters, salaryMin: min, salaryMax: max})}
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>${filters.salaryMin}</span>
            <span>${filters.salaryMax}</span>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">Location Type</label>
          <Select
            value={filters.location}
            onValueChange={(value) => setFilters({...filters, location: value})}
          >
            <option value="">All Locations</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
            <option value="onsite">On-site</option>
          </Select>
        </div>
      </div>
    </div>
  );
}; 