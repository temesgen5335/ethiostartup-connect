
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ForumsContent } from "@/components/ForumsContent";

const Forums = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <ForumsContent />
      </main>
      <Footer />
    </div>
  );
};

export default Forums;
