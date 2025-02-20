
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NetworkContent } from "@/components/NetworkContent";

const Network = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <NetworkContent />
      </main>
      <Footer />
    </div>
  );
};

export default Network;
