import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ForumsContent } from "@/components/ForumsContent";

const Forums = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-6">Forums</h1>
        <ForumsContent />
      </main>
      <Footer />
    </div>
  );
};

export default Forums;
