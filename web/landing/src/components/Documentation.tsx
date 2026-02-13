import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Users, Settings, Search, Filter, Clock, Star, TrendingUp, ArrowRight, Play, FileText, Zap, Shield } from 'lucide-react';
import Link from 'next/link';
import { ContactModal } from './ContactModal';

export const Documentation = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const categories = [
    { name: "All", count: 150, active: true },
    { name: "Getting Started", count: 12, active: false },
    { name: "Tutorials", count: 45, active: false },
    { name: "API Guides", count: 28, active: false },
    { name: "Best Practices", count: 18, active: false },
    { name: "Troubleshooting", count: 15, active: false },
    { name: "Security", count: 10, active: false },
    { name: "Integrations", count: 22, active: false }
  ];

  const featuredArticles = [
    {
      title: "Complete Platform Overview",
      description: "A comprehensive guide to all AI Enterprise features and capabilities",
      readTime: "15 min read",
      category: "Getting Started",
      href: "/docs/platform-overview",
      featured: true
    },
    {
      title: "Building Your First AI Workflow",
      description: "Step-by-step tutorial for creating automated AI processing pipelines",
      readTime: "25 min read",
      category: "Tutorials",
      href: "/docs/first-workflow",
      featured: true
    },
    {
      title: "Security Best Practices",
      description: "Essential security measures for deploying AI in enterprise environments",
      readTime: "12 min read",
      category: "Security",
      href: "/docs/security-best-practices",
      featured: true
    }
  ];

  const docs = [
    {
      icon: <Book className="h-8 w-8 text-blue-600" />,
      title: "Getting Started",
      description: "Learn the basics and get up and running quickly with our platform.",
      href: "/documentation/getting-started",
      articles: 12,
      category: "Beginner",
      popular: true
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "API Reference",
      description: "Complete API documentation for developers integrating with our platform.",
      href: "/api-reference",
      articles: 28,
      category: "Developer",
      popular: true
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "User Guides",
      description: "Step-by-step guides for common tasks and advanced workflows.",
      href: "/documentation/guides",
      articles: 45,
      category: "Intermediate",
      popular: false
    },
    {
      icon: <Settings className="h-8 w-8 text-orange-600" />,
      title: "Configuration",
      description: "Learn how to configure and customize your AI Enterprise setup.",
      href: "/documentation/configuration",
      articles: 18,
      category: "Advanced",
      popular: false
    },
    {
      icon: <Shield className="h-8 w-8 text-red-600" />,
      title: "Security & Compliance",
      description: "Security measures, compliance standards, and data protection guides.",
      href: "/documentation/security",
      articles: 10,
      category: "Enterprise",
      popular: true
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Integrations",
      description: "Connect AI Enterprise with your existing tools and platforms.",
      href: "/documentation/integrations",
      articles: 22,
      category: "Integration",
      popular: false
    }
  ];

  const quickStarts = [
    {
      title: "Deploy Your First Model",
      description: "Get a pre-trained AI model running in production in under 10 minutes",
      difficulty: "Beginner",
      time: "10 min",
      href: "/docs/quick-start/deploy-model"
    },
    {
      title: "Set Up Automated Processing",
      description: "Create a workflow that automatically processes incoming data",
      difficulty: "Intermediate",
      time: "15 min",
      href: "/docs/quick-start/automated-processing"
    },
    {
      title: "Build a Custom Integration",
      description: "Connect AI Enterprise with your existing business systems",
      difficulty: "Advanced",
      time: "30 min",
      href: "/docs/quick-start/custom-integration"
    }
  ];

  const stats = [
    { number: "150+", label: "Documentation Articles" },
    { number: "50+", label: "Video Tutorials" },
    { number: "25+", label: "Code Examples" },
    { number: "99%", label: "Accuracy Rate" }
  ];

  return (
    <section className="py-20 bg-slate-50">
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
            <Book className="h-4 w-4" />
            Knowledge Base
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Documentation</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Everything you need to master AI Enterprise, from beginner tutorials to advanced
            integration guides. Find answers, learn best practices, and build with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="pl-10 pr-4 py-3 w-full sm:w-80 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <a
              href="#quick-start"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Quick Start
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
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

        {/* Featured Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Articles</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Essential reading to get the most out of AI Enterprise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{article.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Clock className="h-4 w-4" />
                    {article.readTime}
                  </div>
                  <Link
                    href={article.href}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Start Guides */}
        <motion.div
          id="quick-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Quick Start Guides</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get up and running quickly with these hands-on tutorials
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {quickStarts.map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Play className="h-6 w-6 text-blue-600" />
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {guide.difficulty}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{guide.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Clock className="h-4 w-4" />
                    {guide.time}
                  </div>
                  <Link
                    href={guide.href}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                  >
                    Start Guide
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>
        {/* Documentation Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docs.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {doc.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-slate-600">{doc.articles} articles</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Star className="h-4 w-4" />
                    {doc.popular ? 'Popular' : 'Essential'}
                  </div>
                  <Link
                    href={doc.href}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              24/7 Support
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Help?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our expert support team is here to help you succeed. Get personalized assistance
              with implementation, troubleshooting, and best practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Support
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
              <Link
                href="/community"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Join Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
        </div>
    </section>
  );
};