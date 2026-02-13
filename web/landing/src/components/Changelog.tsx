import { motion } from 'framer-motion';
import { Calendar, CheckCircle, AlertTriangle, Zap, Bug, Star, TrendingUp, ArrowRight, Filter, Download, Bell } from 'lucide-react';
import Link from 'next/link';

export const Changelog = () => {
  const changelogCategories = [
    { name: "All Updates", count: 24, active: true },
    { name: "Features", count: 12, active: false },
    { name: "Improvements", count: 8, active: false },
    { name: "Bug Fixes", count: 4, active: false }
  ];

  const changes = [
    {
      version: "v2.1.0",
      date: "December 2024",
      type: "major",
      title: "AI Model Revolution",
      description: "Introducing GPT-4 Turbo support and advanced AI capabilities",
      changes: [
        { type: "feature", text: "Added support for GPT-4 Turbo with enhanced reasoning capabilities", icon: <Zap className="h-4 w-4" /> },
        { type: "improvement", text: "Improved file processing speed by 40% with optimized algorithms", icon: <TrendingUp className="h-4 w-4" /> },
        { type: "feature", text: "New dashboard analytics with real-time metrics and insights", icon: <Star className="h-4 w-4" /> },
        { type: "improvement", text: "Enhanced security protocols with end-to-end encryption", icon: <AlertTriangle className="h-4 w-4" /> }
      ],
      breaking: false,
      downloads: 1250
    },
    {
      version: "v2.0.5",
      date: "November 2024",
      type: "patch",
      title: "Stability & Performance",
      description: "Critical bug fixes and performance optimizations",
      changes: [
        { type: "bug", text: "Fixed memory leak in file processing pipeline", icon: <Bug className="h-4 w-4" /> },
        { type: "improvement", text: "Reduced API response times by 25%", icon: <TrendingUp className="h-4 w-4" /> },
        { type: "bug", text: "Resolved authentication issues with SSO providers", icon: <Bug className="h-4 w-4" /> }
      ],
      breaking: false,
      downloads: 890
    },
    {
      version: "v2.0.0",
      date: "October 2024",
      type: "major",
      title: "Complete Platform Redesign",
      description: "Major UI overhaul with enhanced collaboration features",
      changes: [
        { type: "feature", text: "Complete UI redesign with modern design system", icon: <Star className="h-4 w-4" /> },
        { type: "feature", text: "Added multi-language support (15+ languages)", icon: <Zap className="h-4 w-4" /> },
        { type: "feature", text: "Introduced team collaboration with real-time editing", icon: <Star className="h-4 w-4" /> },
        { type: "improvement", text: "Performance optimizations across all microservices", icon: <TrendingUp className="h-4 w-4" /> }
      ],
      breaking: true,
      downloads: 2100
    },
    {
      version: "v1.9.2",
      date: "September 2024",
      type: "minor",
      title: "File Format Expansion",
      description: "Support for additional file formats and improved processing",
      changes: [
        { type: "feature", text: "Added support for PDF, DOCX, and PPTX processing", icon: <Zap className="h-4 w-4" /> },
        { type: "improvement", text: "Increased API rate limits for enterprise customers", icon: <TrendingUp className="h-4 w-4" /> },
        { type: "bug", text: "Fixed file upload issues with large documents", icon: <Bug className="h-4 w-4" /> }
      ],
      breaking: false,
      downloads: 675
    }
  ];

  const stats = [
    { number: "24+", label: "Total Releases" },
    { number: "50+", label: "New Features" },
    { number: "99.9%", label: "Uptime" },
    { number: "15k+", label: "Active Users" }
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
            <Calendar className="h-4 w-4" />
            Release Notes
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Product
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Changelog</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest features, improvements, and bug fixes.
            See what's new and what's improved in each release of AI Enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#releases"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Latest Release
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
              <Bell className="mr-2 h-5 w-5" />
              Subscribe to Updates
            </button>
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

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {changelogCategories.map((category) => (
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
        {/* Releases Section */}
        <motion.div
          id="releases"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {changes.map((version, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 bg-white rounded-xl p-8 shadow-sm border border-slate-200"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${
                    version.type === 'major' ? 'bg-purple-100' :
                    version.type === 'minor' ? 'bg-blue-100' : 'bg-green-100'
                  }`}>
                    <Calendar className={`h-6 w-6 ${
                      version.type === 'major' ? 'text-purple-600' :
                      version.type === 'minor' ? 'text-blue-600' : 'text-green-600'
                    }`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold text-slate-900">{version.version}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        version.type === 'major' ? 'bg-purple-100 text-purple-800' :
                        version.type === 'minor' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {version.type}
                      </span>
                      {version.breaking && (
                        <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">
                          Breaking Changes
                        </span>
                      )}
                    </div>
                    <p className="text-slate-600">{version.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500 mb-1">{version.downloads} downloads</div>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{version.title}</h4>
                <p className="text-slate-600">{version.description}</p>
              </div>

              <div className="space-y-3">
                {version.changes.map((change, changeIndex) => (
                  <div key={changeIndex} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <div className={`p-1 rounded ${
                      change.type === 'feature' ? 'bg-blue-100' :
                      change.type === 'improvement' ? 'bg-green-100' : 'bg-red-100'
                    }`}>
                      {change.icon}
                    </div>
                    <span className="text-slate-700 leading-relaxed">{change.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-2xl mx-auto">
            <Bell className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our changelog and get notified about new releases,
              features, and important updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-blue-300"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};