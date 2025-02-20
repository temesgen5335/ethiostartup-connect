
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Empowering Ethiopian Entrepreneurs
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Connect with investors, mentors, and fellow entrepreneurs. Build the next generation of Ethiopian startups.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
