import { Card } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

export const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Ethiopian Tech Startups Raise $50M in Q1",
      date: "2024-04-08",
      summary: "Local tech startups show promising growth with record funding.",
    },
    {
      id: 2,
      title: "New Innovation Hub Opens in Addis",
      date: "2024-04-05",
      summary: "State-of-the-art facility aims to support early-stage startups.",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Newspaper className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Latest News</h2>
      </div>
      <div className="space-y-4">
        {newsItems.map((item) => (
          <div key={item.id} className="border-b last:border-b-0 pb-4 last:pb-0">
            <h3 className="font-medium text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.date}</p>
            <p className="text-sm text-gray-600 mt-2">{item.summary}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}; 