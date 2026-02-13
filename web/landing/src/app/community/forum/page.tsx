'use client';

import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Filter, Plus, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function ForumPage() {
  const [topics, setTopics] = useState([
    {
      id: "1",
      title: "How to integrate AI Engine with React?",
      author: "alex_dev",
      replies: 12,
      views: 345,
      category: "Integration",
      time: "2 hours ago"
    },
    {
      id: "2",
      title: "Best practices for prompt engineering",
      author: "sarah_ai",
      replies: 45,
      views: 1205,
      category: "Best Practices",
      time: "5 hours ago"
    },
    {
      id: "3",
      title: "Error 500 when deploying to Kubernetes",
      author: "mike_ops",
      replies: 3,
      views: 89,
      category: "Deployment",
      time: "1 day ago"
    },
    {
      id: "4",
      title: "Feature Request: Python SDK Async Support",
      author: "python_guru",
      replies: 28,
      views: 670,
      category: "Feature Request",
      time: "2 days ago"
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isNewTopicModalOpen, setIsNewTopicModalOpen] = useState(false);
  const [newTopicData, setNewTopicData] = useState({ title: "", category: "Integration", content: "" });

  const categories = ["All", "Integration", "Best Practices", "Deployment", "Feature Request", "General"];

  const filteredTopics = topics.filter(topic => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          topic.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCreateTopic = (e: React.FormEvent) => {
    e.preventDefault();
    const newTopic = {
      id: `${topics.length + 1}`,
      title: newTopicData.title,
      author: "Guest User", // Mock user
      replies: 0,
      views: 0,
      category: newTopicData.category,
      time: "Just now"
    };
    
    setTopics([newTopic, ...topics]);
    setIsNewTopicModalOpen(false);
    setNewTopicData({ title: "", category: "Integration", content: "" });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Community Forum</h1>
            <p className="text-xl text-slate-600">Join the discussion, ask questions, and share your knowledge.</p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                  <Filter className="h-5 w-5" />
                  {selectedCategory === "All" ? "Filter" : selectedCategory}
                </button>
                {/* Dropdown for Filter */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg"
                      onClick={() => setSelectedCategory(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => setIsNewTopicModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
                New Topic
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[300px]">
            {filteredTopics.length > 0 ? (
              <div className="divide-y divide-slate-100">
                {filteredTopics.map((topic, index) => (
                  <Link href={`/community/forum/${topic.id}`} key={topic.id} className="block">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="p-6 hover:bg-slate-50 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                              {topic.category}
                            </span>
                            <span className="text-xs text-slate-500">{topic.time}</span>
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                            {topic.title}
                          </h3>
                          <div className="text-sm text-slate-500">
                            Started by <span className="font-medium text-slate-700">{topic.author}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-6 text-slate-500">
                          <div className="text-center">
                            <div className="text-lg font-semibold text-slate-700">{topic.replies}</div>
                            <div className="text-xs">Replies</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-semibold text-slate-700">{topic.views}</div>
                            <div className="text-xs">Views</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            ) : (
               <div className="p-12 text-center text-slate-500">
                 <MessageCircle className="h-12 w-12 mx-auto mb-4 text-slate-300" />
                 <p className="text-lg font-medium">No topics found</p>
                 <p>Try adjusting your search or filter</p>
               </div>
            )}
          </div>
        </div>
      </main>
      
      {/* New Topic Modal */}
      <AnimatePresence>
        {isNewTopicModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-900">Create New Topic</h2>
                <button 
                  onClick={() => setIsNewTopicModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <form onSubmit={handleCreateTopic} className="p-6 space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-1">Topic Title</label>
                  <input
                    type="text"
                    id="title"
                    required
                    value={newTopicData.title}
                    onChange={(e) => setNewTopicData({...newTopicData, title: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="e.g., How to allow CORS requests?"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-1">Category</label>
                  <select
                    id="category"
                    value={newTopicData.category}
                    onChange={(e) => setNewTopicData({...newTopicData, category: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    {categories.filter(c => c !== "All").map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-slate-700 mb-1">Content</label>
                  <textarea
                    id="content"
                    required
                    value={newTopicData.content}
                    onChange={(e) => setNewTopicData({...newTopicData, content: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none h-32 resize-none"
                    placeholder="Describe your question or discussion point..."
                  />
                </div>
                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsNewTopicModalOpen(false)}
                    className="px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Topic
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
