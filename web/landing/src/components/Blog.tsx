import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag, Clock, TrendingUp, BookOpen, Search, Mail } from 'lucide-react';
import Link from 'next/link';

export const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const featuredPost = {
    title: "The Future of Enterprise AI: Trends and Predictions for 2026",
    excerpt: "Explore the transformative trends shaping enterprise AI adoption, from autonomous systems to ethical AI frameworks. Learn how organizations are preparing for the next wave of AI innovation.",
    author: "Dr. Sarah Chen",
    date: "March 1, 2026",
    readTime: "12 min read",
    category: "Industry Insights",
    href: "/blog/future-enterprise-ai-2026",
    image: "/api/placeholder/600/300"
  };

  const categories = [
    { name: "All", count: 12 },
    { name: "Tutorials", count: 4 },
    { name: "Industry Insights", count: 3 },
    { name: "Product Updates", count: 2 },
    { name: "Case Studies", count: 2 },
    { name: "Best Practices", count: 2 }
  ];

  const allPosts = [
    {
      id: 1,
      title: "Getting Started with AI Enterprise Platform",
      excerpt: "Learn how to set up and configure your AI Enterprise environment for maximum productivity. A comprehensive guide for new users.",
      author: "AI Team",
      date: "February 15, 2026",
      readTime: "5 min read",
      category: "Tutorials",
      href: "/blog/getting-started",
      featured: false
    },
    {
      id: 2,
      title: "Advanced AI Model Integration Techniques",
      excerpt: "Discover advanced techniques for integrating multiple AI models into your workflows. Best practices for enterprise deployments.",
      author: "Dev Team",
      date: "February 10, 2026",
      readTime: "8 min read",
      category: "Best Practices",
      href: "/blog/advanced-integration",
      featured: false
    },
    {
      id: 3,
      title: "Best Practices for Enterprise AI Security",
      excerpt: "Learn about security best practices when deploying AI solutions in enterprise environments. Protect your data and models.",
      author: "Security Team",
      date: "February 5, 2026",
      readTime: "6 min read",
      category: "Best Practices",
      href: "/blog/security-best-practices",
      featured: false
    },
    {
      id: 4,
      title: "Scaling AI Workloads: A Case Study",
      excerpt: "How TechCorp scaled their AI infrastructure to handle 10x more requests while reducing costs by 40%. Real-world implementation insights.",
      author: "Solutions Engineering",
      date: "January 28, 2026",
      readTime: "10 min read",
      category: "Case Studies",
      href: "/blog/scaling-ai-workloads",
      featured: true
    },
    {
      id: 5,
      title: "API Reference: Complete Guide to REST Endpoints",
      excerpt: "Comprehensive documentation of all REST API endpoints, including authentication, rate limits, and error handling.",
      author: "API Team",
      date: "January 20, 2026",
      readTime: "15 min read",
      category: "Tutorials",
      href: "/blog/api-reference-guide",
      featured: false
    },
    {
      id: 6,
      title: "Q4 2025 Product Roadmap and What's Next",
      excerpt: "Exciting updates coming in Q1 2026 including new AI models, enhanced security features, and improved developer experience.",
      author: "Product Team",
      date: "January 15, 2026",
      readTime: "7 min read",
      category: "Product Updates",
      href: "/blog/q4-2025-roadmap",
      featured: true
    },
    {
      id: 7,
      title: "Understanding Transformer Architectures",
      excerpt: "A deep dive into the architecture that powers modern LLMs. Understand the mechanism behind the magic.",
      author: "Research Team",
      date: "January 10, 2026",
      readTime: "12 min read",
      category: "Industry Insights",
      href: "/blog/transformer-architectures",
      featured: false
    },
    {
      id: 8,
      title: "Optimizing Vector Database Queries",
      excerpt: "Tips and tricks for getting the fastest response times from your vector similarity searches.",
      author: "Database Team",
      date: "January 5, 2026",
      readTime: "6 min read",
      category: "Tutorials",
      href: "/blog/optimizing-vector-db",
      featured: false
    },
     {
      id: 9,
      title: "The Role of RAG in Modern Applications",
      excerpt: "Why Retrieval-Augmented Generation is becoming the standard for enterprise knowledge management applications.",
      author: "Product Team",
      date: "December 28, 2025",
      readTime: "8 min read",
      category: "Industry Insights",
      href: "/blog/role-of-rag",
      featured: false
    },
    {
      id: 10,
      title: "Migrating from Legacy Search to AI Search",
      excerpt: "A step-by-step guide to upgrading your search infrastructure to leverage semantic understanding.",
      author: "Solutions Engineering",
      date: "December 15, 2025",
      readTime: "10 min read",
      category: "Case Studies",
      href: "/blog/migrating-legacy-search",
      featured: false
    },
    {
      id: 11,
      title: "Introduction to AI Agents",
      excerpt: "What are AI Agents and how do they differ from standard chatbots? A primer for developers.",
      author: "Dev Team",
      date: "December 10, 2025",
      readTime: "7 min read",
      category: "Tutorials",
      href: "/blog/intro-ai-agents",
      featured: false
    },
    {
      id: 12,
      title: "Version 2.0 Release Notes",
      excerpt: "Detailed breakdown of all the new features and improvements in our major version 2.0 release.",
      author: "Product Team",
      date: "December 1, 2025",
      readTime: "5 min read",
      category: "Product Updates",
      href: "/blog/v2-release-notes",
      featured: false
    }
  ];

  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  const stats = [
    { number: "500K+", label: "Monthly Readers" },
    { number: "150+", label: "Articles Published" },
    { number: "50+", label: "Contributors" },
    { number: "25%", label: "Year-over-Year Growth" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            Knowledge Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Insights from the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> AI Frontier</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Stay ahead of the curve with expert insights, tutorials, and industry analysis
            from our team of AI researchers, engineers, and thought leaders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 w-full sm:w-80 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                Featured Article
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Link
                  href={featuredPost.href}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read Full Article
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="bg-slate-200 rounded-xl h-64 md:h-80 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-slate-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  setVisibleCount(6); // Reset pagination on filter change
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <AnimatePresence>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visiblePosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden ${
                    post.featured ? 'ring-2 ring-blue-200' : ''
                  }`}
                >
                  {post.featured && (
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                      <Link
                        href={post.href}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group"
                      >
                        Read more
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
             <div className="text-center py-12 text-slate-500">
               No articles found matching your criteria.
             </div>
          )}
        </motion.div>

        {/* Load More - Before CTA */}
        {hasMorePosts && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <button 
              onClick={() => setVisibleCount(prev => prev + 6)}
              className="px-8 py-4 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
            >
              Load More Articles
            </button>
          </motion.div>
        )}

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <Mail className="h-12 w-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights, tutorials, and industry news delivered directly to your inbox.
              Join our community of AI enthusiasts and stay ahead of the curve.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </button>
            </form>
            <p className="text-sm text-slate-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};