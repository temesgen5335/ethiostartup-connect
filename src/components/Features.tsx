
import { Rocket, Users, BookOpen, Calendar } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Launch Your Startup",
    description: "Access resources, templates, and guidance to bring your idea to life.",
  },
  {
    icon: Users,
    title: "Connect with Investors",
    description: "Meet potential investors and get the funding you need to grow.",
  },
  {
    icon: BookOpen,
    title: "Learn from Experts",
    description: "Access a library of resources and learn from experienced entrepreneurs.",
  },
  {
    icon: Calendar,
    title: "Join Events",
    description: "Participate in workshops, hackathons, and networking events.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and connections you need to build a successful startup in Ethiopia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-primary/20 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
