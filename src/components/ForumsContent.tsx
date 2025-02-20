import { useState } from "react";
import { Search, MessageSquare, Users, ArrowUp, ArrowDown, MessageCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

interface Thread {
  id: string;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  votes: number;
  lastReply: string;
  previewText: string;
}

const topics: Thread[] = [
  {
    id: "1",
    title: "How to pitch to investors in Ethiopia?",
    author: "Abebe Bekele",
    category: "Fundraising",
    replies: 24,
    views: 1250,
    votes: 45,
    lastReply: "2 hours ago",
    previewText: "I'm preparing for my first pitch to local investors. What are the key points I should focus on?"
  },
  {
    id: "2",
    title: "Scaling agritech startups in Ethiopia",
    author: "Sara Mohammed",
    category: "Agritech",
    replies: 18,
    views: 890,
    votes: 32,
    lastReply: "5 hours ago",
    previewText: "Looking for advice on expanding our agritech solution beyond Addis Ababa."
  },
  {
    id: "3",
    title: "Legal requirements for fintech startups",
    author: "Daniel Tesfaye",
    category: "Legal",
    replies: 15,
    views: 750,
    votes: 28,
    lastReply: "1 day ago",
    previewText: "What licenses and permits do we need to launch a mobile payment solution?"
  }
];

const categories = ["All", "Fundraising", "Agritech", "Fintech", "Legal", "Marketing", "Technology"];

export const ForumsContent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleVote = (threadId: string, direction: "up" | "down") => {
    console.log(`Voted ${direction} on thread ${threadId}`);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discussion Forums
        </h1>
        <p className="text-xl text-gray-600">
          Join conversations with fellow entrepreneurs, share insights, and learn from the community.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-64 space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <Button 
              className="w-full mb-6" 
              size="lg"
              onClick={() => navigate("/forums/new")}
            >
              <Plus className="mr-2 h-5 w-5" />
              New Discussion
            </Button>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                    selectedCategory === category
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">156</p>
                  <p className="text-sm text-gray-600">Total Discussions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">2,450</p>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="space-y-4">
            {filteredTopics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white rounded-lg border border-gray-100 p-6 hover:border-primary/20 transition-all animate-fade-in-up"
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center space-y-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVote(topic.id, "up");
                      }}
                      className="text-gray-400 hover:text-primary"
                    >
                      <ArrowUp className="h-6 w-6" />
                    </button>
                    <span className="font-medium text-gray-900">{topic.votes}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVote(topic.id, "down");
                      }}
                      className="text-gray-400 hover:text-primary"
                    >
                      <ArrowDown className="h-6 w-6" />
                    </button>
                  </div>
                  <div 
                    className="flex-1 cursor-pointer"
                    onClick={() => navigate(`/forums/thread/${topic.id}`)}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-primary">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Started by {topic.author}
                        </p>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {topic.category}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{topic.previewText}</p>
                    <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {topic.replies} replies
                      </div>
                      <div>
                        {topic.views} views
                      </div>
                      <div>
                        Last reply {topic.lastReply}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
