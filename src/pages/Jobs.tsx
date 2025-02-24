import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobsContent } from "@/components/jobs/JobsContent";
import { JobAnalytics } from "@/components/jobs/JobAnalytics";
import { PostJobButton } from "@/components/jobs/PostJobButton";
import { Suspense } from "react";

const Jobs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Startup Jobs</h1>
          <div className="flex gap-4">
            <Suspense fallback={null}>
              <JobAnalytics />
            </Suspense>
            <PostJobButton />
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <JobsContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs; 