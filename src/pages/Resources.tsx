
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ResourcesContent } from "@/components/ResourcesContent";

const Resources = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <ResourcesContent />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
