
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowUp, ArrowDown, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Reply {
  id: string;
  author: string;
  content: string;
  votes: number;
  timestamp: string;
}

interface Thread {
  id: string;
  title: string;
  author: string;
  content: string;
  category: string;
  votes: number;
  replies: Reply[];
  timestamp: string;
}

// Mock data - in a real app this would come from an API
const threadsData: Record<string, Thread> = {
  "1": {
    id: "1",
    title: "How to pitch to investors in Ethiopia?",
    author: "Abebe Bekele",
    content: "I'm preparing for my first pitch to local investors in Addis Ababa. What are the key points I should focus on? I've prepared a basic pitch deck but want to ensure it resonates with Ethiopian investors.",
    category: "Fundraising",
    votes: 45,
    timestamp: "2 days ago",
    replies: [
      {
        id: "r1",
        author: "Sara Mohammed",
        content: "Focus on local market understanding and scalability within Ethiopia. Investors here want to see how well you understand the local challenges.",
        votes: 12,
        timestamp: "1 day ago"
      },
      {
        id: "r2",
        author: "Daniel Tesfaye",
        content: "Make sure to highlight your team's local expertise and connections. Also, have clear numbers about market size specifically for Ethiopia.",
        votes: 8,
        timestamp: "12 hours ago"
      }
    ]
  }
};

export const ThreadView = () => {
  const { threadId } = useParams();
  const navigate = useNavigate();
  const [newReply, setNewReply] = useState("");
  const thread = threadId ? threadsData[threadId] : null;

  if (!thread) {
    return <div className="text-center py-12">Thread not found</div>;
  }

  const handleVote = (type: "up" | "down", itemId: string, isReply: boolean = false) => {
    // In a real app, this would make an API call to update votes
    console.log(`Voted ${type} on ${isReply ? "reply" : "thread"} ${itemId}`);
  };

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call to submit the reply
    console.log("Submitting reply:", newReply);
    setNewReply("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate("/forums")}
        className="flex items-center text-gray-600 hover:text-primary mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Forums
      </button>

      <div className="bg-white rounded-lg border border-gray-100 p-6 mb-8">
        <div className="flex gap-4">
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => handleVote("up", thread.id)}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowUp className="h-6 w-6" />
            </button>
            <span className="font-medium text-gray-900">{thread.votes}</span>
            <button
              onClick={() => handleVote("down", thread.id)}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <ArrowDown className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{thread.title}</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <span>Posted by {thread.author}</span>
              <span>•</span>
              <span>{thread.timestamp}</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                {thread.category}
              </span>
            </div>
            <p className="text-gray-700 mb-6">{thread.content}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          <MessageCircle className="inline-block h-5 w-5 mr-2" />
          Replies
        </h2>
        <form onSubmit={handleSubmitReply} className="mb-6">
          <Textarea
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            placeholder="Write your reply..."
            className="mb-4"
          />
          <Button type="submit" disabled={!newReply.trim()}>
            Post Reply
          </Button>
        </form>

        <div className="space-y-6">
          {thread.replies.map((reply) => (
            <div key={reply.id} className="bg-white rounded-lg border border-gray-100 p-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center gap-1">
                  <button
                    onClick={() => handleVote("up", reply.id, true)}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <ArrowUp className="h-5 w-5" />
                  </button>
                  <span className="font-medium text-gray-900">{reply.votes}</span>
                  <button
                    onClick={() => handleVote("down", reply.id, true)}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <ArrowDown className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <span className="font-medium">{reply.author}</span>
                    <span>•</span>
                    <span>{reply.timestamp}</span>
                  </div>
                  <p className="text-gray-700">{reply.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThreadView;
