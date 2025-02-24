import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Forums from "./pages/Forums";
import ThreadView from "./components/ThreadView";
import NewDiscussion from "./components/NewDiscussion";
import Network from "./pages/Network";
import Resources from "./pages/Resources";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import PostJob from "./pages/PostJob";
import CompanyProfile from "./pages/CompanyProfile";
import Events from "./pages/Events"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/forums/thread/:threadId" element={<ThreadView />} />
          <Route path="/forums/new" element={<NewDiscussion />} />
          <Route path="/network" element={<Network />}  />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/jobs/post" element={<PostJob />} />
          <Route path="/companies/:id" element={<CompanyProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
