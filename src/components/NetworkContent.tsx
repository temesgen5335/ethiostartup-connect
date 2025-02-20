
import { useState } from "react";
import { Search, Filter, Users, MessageSquare, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Industry = "All" | "Fintech" | "Agritech" | "E-commerce" | "Healthcare" | "Education";
type UserType = "All" | "Startup" | "Investor" | "Mentor";

interface Member {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: Exclude<Industry, "All">;
  type: Exclude<UserType, "All">;
  location: string;
  image: string;
}

const members: Member[] = [
  {
    id: "1",
    name: "Abebe Bekele",
    role: "Founder & CEO",
    company: "AgriTech Ethiopia",
    industry: "Agritech",
    type: "Startup",
    location: "Addis Ababa",
    image: "/placeholder.svg"
  },
  {
    id: "2",
    name: "Sara Mohammed",
    role: "Investment Director",
    company: "East Africa Ventures",
    industry: "Fintech",
    type: "Investor",
    location: "Addis Ababa",
    image: "/placeholder.svg"
  },
  {
    id: "3",
    name: "Daniel Tesfaye",
    role: "Technical Advisor",
    company: "Tech Mentors Hub",
    industry: "E-commerce",
    type: "Mentor",
    location: "Bahir Dar",
    image: "/placeholder.svg"
  },
];

const industries: Industry[] = ["All", "Fintech", "Agritech", "E-commerce", "Healthcare", "Education"];
const userTypes: UserType[] = ["All", "Startup", "Investor", "Mentor"];

export const NetworkContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("All");
  const [selectedType, setSelectedType] = useState<UserType>("All");

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === "All" || member.industry === selectedIndustry;
    const matchesType = selectedType === "All" || member.type === selectedType;
    
    return matchesSearch && matchesIndustry && matchesType;
  });

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Connect with the Community
        </h1>
        <p className="text-xl text-gray-600">
          Find and connect with startups, investors, and mentors in the Ethiopian ecosystem.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1 space-y-6 bg-white p-6 rounded-lg border border-gray-100 h-fit">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Industry</label>
                <select
                  className="w-full rounded-md border border-gray-200 p-2 text-sm"
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value as Industry)}
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-2">Member Type</label>
                <select
                  className="w-full rounded-md border border-gray-200 p-2 text-sm"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value as UserType)}
                >
                  {userTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 mb-2">Quick Links</h3>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <MessageSquare className="mr-2 h-4 w-4" />
              Discussion Forums
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Users className="mr-2 h-4 w-4" />
              Group Chats
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <PieChart className="mr-2 h-4 w-4" />
              Community Polls
            </Button>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search by name or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-lg border border-gray-100 p-6 hover:border-primary/20 transition-all shadow-sm hover:shadow animate-fade-in-up"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.company}</p>
                    <div className="flex gap-2 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {member.industry}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-gray-700">
                        {member.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Connect
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
