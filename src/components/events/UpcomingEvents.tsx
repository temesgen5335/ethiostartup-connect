import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Startup Pitch Competition",
      date: "2024-04-15",
      time: "2:00 PM",
      location: "Addis Ababa",
      type: "Competition",
    },
    {
      id: 2,
      title: "Tech Entrepreneurship Workshop",
      date: "2024-04-20",
      time: "10:00 AM",
      location: "Virtual",
      type: "Workshop",
    },
    // Add more events as needed
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-lg p-4 hover:border-primary transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                  <CalendarDays className="h-4 w-4" />
                  <span>{event.date} at {event.time}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{event.location}</p>
              </div>
              <span className="text-xs font-medium bg-secondary/20 text-secondary px-2 py-1 rounded">
                {event.type}
              </span>
            </div>
            <Button variant="outline" className="w-full mt-3">
              Learn More
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}; 