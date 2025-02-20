
import { BookOpen, FileText, Download, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const resourceCategories = [
  {
    title: "Business Templates",
    description: "Essential templates for business plans, pitch decks, and financial models.",
    icon: FileText,
    resources: [
      {
        title: "Startup Business Plan Template",
        description: "Comprehensive business plan template tailored for Ethiopian startups.",
        type: "PDF",
      },
      {
        title: "Investor Pitch Deck",
        description: "Professional pitch deck template with winning examples.",
        type: "PPT",
      },
      {
        title: "Financial Projection Model",
        description: "3-year financial projection spreadsheet with automated calculations.",
        type: "XLS",
      },
    ],
  },
  {
    title: "Case Studies",
    description: "Success stories and lessons from Ethiopian startups.",
    icon: BookOpen,
    resources: [
      {
        title: "Delivering Innovation in Addis",
        description: "How a local delivery startup scaled across the city.",
        type: "PDF",
      },
      {
        title: "From Local to Pan-African",
        description: "Growth story of an Ethiopian fintech company.",
        type: "PDF",
      },
      {
        title: "Sustainable Agriculture Tech",
        description: "How technology is transforming Ethiopian farming.",
        type: "PDF",
      },
    ],
  },
  {
    title: "Startup Guides",
    description: "Step-by-step guides for launching and growing your startup.",
    icon: Folder,
    resources: [
      {
        title: "Legal Compliance Guide",
        description: "Essential legal requirements for Ethiopian startups.",
        type: "PDF",
      },
      {
        title: "Funding Options Guide",
        description: "Overview of funding sources and requirements.",
        type: "PDF",
      },
      {
        title: "Market Research Toolkit",
        description: "Tools and methods for Ethiopian market research.",
        type: "PDF",
      },
    ],
  },
];

export const ResourcesContent = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Startup Resources
        </h1>
        <p className="text-xl text-gray-600">
          Access our curated collection of resources to help you build and grow your startup in Ethiopia.
        </p>
      </div>

      <div className="space-y-16">
        {resourceCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className="animate-fade-in-up"
            style={{ animationDelay: `${categoryIndex * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-semibold text-gray-900">{category.title}</h2>
            </div>
            <p className="text-gray-600 mb-8">{category.description}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.resources.map((resource, resourceIndex) => (
                <div
                  key={resource.title}
                  className="bg-white rounded-lg border border-gray-100 p-6 hover:border-primary/20 transition-all shadow-sm hover:shadow"
                  style={{ animationDelay: `${(categoryIndex + resourceIndex) * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.type}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
