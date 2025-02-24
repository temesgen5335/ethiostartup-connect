import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

export const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: "New Startup Grant Program",
      date: "2024-04-10",
      content: "Applications are now open for the 2024 Ethiopian Startup Grant Program.",
    },
    {
      id: 2,
      title: "Platform Maintenance",
      date: "2024-04-12",
      content: "Scheduled maintenance will occur on April 15th from 2-4 AM EAT.",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Announcements</h2>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="border-b last:border-b-0 pb-4 last:pb-0">
            <h3 className="font-medium text-gray-900">{announcement.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{announcement.date}</p>
            <p className="text-sm text-gray-600 mt-2">{announcement.content}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}; 