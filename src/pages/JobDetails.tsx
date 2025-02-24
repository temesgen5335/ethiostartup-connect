import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { useJob } from "@/hooks/useJob";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const JobDetails = () => {
  const { id } = useParams();
  const { data: job, isLoading } = useJob(id);

  if (isLoading) return <div>Loading...</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg border p-8">
            {/* Job header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                <p className="text-gray-600">{job.companyName}</p>
              </div>
              <Button size="lg">Apply Now</Button>
            </div>

            {/* Job details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                <p className="text-gray-600">{job.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Required Skills</h2>
                <div className="flex gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JobDetails; 