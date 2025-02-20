
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import Forums from "@/pages/Forums";
import ThreadView from "@/components/ThreadView";
import NewDiscussion from "@/components/NewDiscussion";

const Index = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
              </>
            } />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/thread/:threadId" element={<ThreadView />} />
            <Route path="/forums/new" element={<NewDiscussion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default Index;
