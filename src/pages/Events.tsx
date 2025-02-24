import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Calendar } from "@/components/events/Calendar";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { Announcements } from "@/components/events/Announcements";
import { News } from "@/components/events/News";

const Events = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Events & News</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Calendar and Upcoming Events */}
          <div className="lg:col-span-2 space-y-8">
            <Calendar />
            <UpcomingEvents />
          </div>
          
          {/* Right column: Announcements and News */}
          <div className="space-y-8">
            <Announcements />
            <News />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events; 