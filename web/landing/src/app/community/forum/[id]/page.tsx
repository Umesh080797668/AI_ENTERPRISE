'use client';

import { Navbar } from '../../../../components/Navbar';
import { Footer } from '../../../../components/Footer';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, User, Share2, Heart, Send } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

// Mock data for topics
const MOCK_TOPICS: Record<string, any> = {
  "1": {
    id: "1",
    title: "How to integrate AI Engine with React?",
    author: "alex_dev",
    category: "Integration",
    time: "2 hours ago",
    content: "I'm trying to connect my React frontend with the AI Engine backend. I've followed the documentation but I'm getting a CORS error. Has anyone else encountered this?",
    initialLikes: 5,
    replies: [
        {
            id: "r1",
            author: "dev_support",
            time: "1 hour ago",
            content: "Hi alex_dev. Make sure you've configured the CORS settings in your backend `main.py`. You need to allow the origin of your React app.",
            likes: 2
        },
        {
            id: "r2",
            author: "alex_dev",
            time: "30 mins ago",
            content: "Ah, that was it! I forgot to add localhost:3000 to the allowed origins. Thanks!",
            likes: 1
        }
    ]
  },
  "2": {
    id: "2",
    title: "Best practices for prompt engineering",
    author: "sarah_ai",
    category: "Best Practices",
    time: "5 hours ago",
    content: "I've been experimenting with different prompt structures. What are your go-to strategies for getting consistent JSON output from the model?",
    initialLikes: 12,
    replies: []
  },
  "3": {
    id: "3",
    title: "Error 500 when deploying to Kubernetes",
    author: "mike_ops",
    category: "Deployment",
    time: "1 day ago",
    content: "My deployment fails with a 500 error on the health check. Logs show 'Connection refused' to the Redis service.",
    initialLikes: 3,
    replies: []
  },
  "4": {
    id: "4",
    title: "Feature Request: Python SDK Async Support",
    author: "python_guru",
    category: "Feature Request",
    time: "2 days ago",
    content: "It would be great to have native async support in the Python SDK for high-concurrency applications.",
    initialLikes: 8,
    replies: []
  }
};

export default function TopicDetailPage({ params }: { params: { id: string } }) {
  const topicData = MOCK_TOPICS[params.id];
  const [topic, setTopic] = useState(topicData || {
    title: "Topic Not Found",
    author: "Unknown",
    category: "General",
    time: "",
    content: "This topic does not exist or has been deleted.",
    initialLikes: 0,
    replies: []
  });

  const [replyText, setReplyText] = useState("");
  // Initialize replies with isLiked state
  const [replies, setReplies] = useState(
    topic.replies.map((r: any) => ({ ...r, isLiked: false }))
  );
  
  // State for main topic like
  const [topicLikes, setTopicLikes] = useState(topic.initialLikes || 0);
  const [isTopicLiked, setIsTopicLiked] = useState(false);

  const handleTopicLike = () => {
    if (isTopicLiked) {
      setTopicLikes((prev: number) => prev - 1);
    } else {
      setTopicLikes((prev: number) => prev + 1);
    }
    setIsTopicLiked(!isTopicLiked);
  };

  const handleReplyLike = (replyId: string) => {
    setReplies(replies.map((reply: any) => {
      if (reply.id === replyId) {
        return {
          ...reply,
          likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
          isLiked: !reply.isLiked
        };
      }
      return reply;
    }));
  };

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    const newReply = {
      id: `new-${Date.now()}`,
      author: "Guest User",
      time: "Just now",
      content: replyText,
      likes: 0,
      isLiked: false
    };

    setReplies([...replies, newReply]);
    setReplyText("");
  };

  if (!topicData) {
     return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
           <Navbar />
           <main className="pt-24 pb-20 container mx-auto px-4">
              <div className="text-center py-20">
                 <h1 className="text-2xl font-bold">Topic not found</h1>
                 <Link href="/community/forum" className="text-blue-600 hover:underline mt-4 inline-block">Return to Forum</Link>
              </div>
           </main>
           <Footer />
        </div>
     );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link href="/community/forum" className="inline-flex items-center text-slate-500 hover:text-blue-600 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Forum
          </Link>

          {/* Main Topic Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6"
          >
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2.5 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                  {topic.category}
                </span>
                <span className="text-sm text-slate-500">{topic.time}</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                {topic.title}
              </h1>
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{topic.author}</div>
                  <div className="text-xs text-slate-500">Author</div>
                </div>
              </div>
              <div className="prose prose-slate max-w-none mb-8">
                <p>{topic.content}</p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <button 
                  onClick={handleTopicLike}
                  className={`flex items-center gap-2 transition-colors ${isTopicLiked ? 'text-red-500' : 'text-slate-500 hover:text-red-500'}`}
                >
                  <Heart className={`h-5 w-5 ${isTopicLiked ? 'fill-current' : ''}`} />
                  <span className="text-sm font-medium">{topicLikes} Likes</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors">
                  <MessageCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">{replies.length} Replies</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors ml-auto">
                  <Share2 className="h-5 w-5" />
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Replies Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">{replies.length} Replies</h3>
            <div className="space-y-4">
              {replies.map((reply: any, index: number) => (
                <motion.div
                  key={reply.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mt-1 flex-shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-slate-900">{reply.author}</span>
                        <span className="text-xs text-slate-500">{reply.time}</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed mb-4">{reply.content}</p>
                      
                      <div className="flex items-center gap-4">
                        <button 
                          onClick={() => handleReplyLike(reply.id)}
                          className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${reply.isLiked ? 'text-red-500' : 'text-slate-500 hover:text-red-500'}`}
                        >
                          <Heart className={`h-4 w-4 ${reply.isLiked ? 'fill-current' : ''}`} />
                          {reply.likes || 0} Likes
                        </button>
                        <button className="flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors">
                          <MessageCircle className="h-4 w-4" />
                          Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Reply Form */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Post a Reply</h3>
            <form onSubmit={handleReplySubmit}>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write your reply here..."
                className="w-full p-4 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] mb-4 resize-y"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all active:scale-[0.98]"
                >
                  <Send className="h-4 w-4" />
                  Post Reply
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
