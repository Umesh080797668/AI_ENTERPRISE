import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Database, Cloud, Shield, ArrowRight, Code, Webhook, Settings, CheckCircle, Star, ExternalLink, Play, FileText, Globe, X, Terminal, Copy, Check } from 'lucide-react';
import Link from 'next/link';

export const Integration = () => {
  const [activeCategory, setActiveCategory] = useState("All Integrations");
  const [selectedGuide, setSelectedGuide] = useState<any>(null);

  const integrationCategories = [
    { name: "All Integrations", count: 25 },
    { name: "API", count: 12 },
    { name: "Database", count: 8 },
    { name: "Cloud Services", count: 5 },
    { name: "Automation", count: 2 }
  ];

  const featuredIntegrations = [
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "PostgreSQL",
      description: "Native PostgreSQL integration with advanced querying and real-time sync capabilities.",
      category: "Database",
      popularity: 95,
      setupTime: "5 min",
      docs: "/integrations/postgresql"
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-600" />,
      title: "AWS S3",
      description: "Seamless integration with Amazon S3 for file storage and processing workflows.",
      category: "Cloud Services",
      popularity: 88,
      setupTime: "3 min",
      docs: "/integrations/aws-s3"
    },
    {
      icon: <Code className="h-8 w-8 text-green-600" />,
      title: "REST API",
      description: "Comprehensive REST API with OpenAPI specification and SDKs for all major languages.",
      category: "API",
      popularity: 92,
      setupTime: "10 min",
      docs: "/integrations/rest-api"
    },
    {
      icon: <Webhook className="h-8 w-8 text-purple-600" />,
      title: "Webhooks",
      description: "Real-time event notifications with customizable webhooks and retry mechanisms.",
      category: "Automation",
      popularity: 78,
      setupTime: "2 min",
      docs: "/integrations/webhooks"
    }
  ];

  const integrationGuides = [
    {
      title: "Getting Started with APIs",
      description: "Learn the basics of integrating with our REST and GraphQL APIs",
      type: "Tutorial",
      duration: "15 min",
      level: "Beginner",
      href: "/integrations/api-getting-started"
    },
    {
      title: "Database Migration Guide",
      description: "Step-by-step guide to migrating your existing database to AI Enterprise",
      type: "Guide",
      duration: "30 min",
      level: "Intermediate",
      href: "/integrations/database-migration"
    },
    {
      title: "Webhook Security Best Practices",
      description: "Secure your webhook integrations with authentication and validation",
      type: "Best Practices",
      duration: "20 min",
      level: "Advanced",
      href: "/integrations/webhook-security"
    }
  ];

  const partnerLogos = [
    { name: "AWS", logo: "🟡" },
    { name: "Azure", logo: "🔵" },
    { name: "Google Cloud", logo: "🟢" },
    { name: "Slack", logo: "🟣" },
    { name: "Microsoft Teams", logo: "🔷" },
    { name: "Salesforce", logo: "🔴" }
  ];

  const stats = [
    { number: "25+", label: "Integrations" },
    { number: "50+", label: "API Endpoints" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support" }
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
            <Zap className="h-4 w-4" />
            Integrations Hub
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Connect & Extend
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> AI Enterprise</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Seamlessly integrate AI Enterprise with your existing tools, databases, and workflows.
            From APIs to cloud services, we make connectivity simple and powerful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#featured"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Explore Integrations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/api-reference"
              className="inline-flex items-center px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
            >
              <Code className="mr-2 h-5 w-5" />
              API Documentation
            </Link>
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

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Trusted by Industry Leaders</h2>
            <p className="text-slate-600">Integrate with the tools and platforms you already use</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partnerLogos.map((partner, index) => (
              <div key={index} className="text-4xl" title={partner.name}>
                {partner.logo}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {integrationCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
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
        {/* Featured Integrations */}
        <motion.div
          id="featured"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Integrations</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Most popular integrations that power thousands of workflows
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredIntegrations
              .filter(integration => activeCategory === "All Integrations" || integration.category === activeCategory)
              .map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {integration.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {integration.title}
                    </h3>
                    <p className="text-sm text-slate-600">{integration.category}</p>
                  </div>
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed">{integration.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {integration.popularity}%
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings className="h-4 w-4" />
                      {integration.setupTime}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedGuide({ type: 'integration', ...integration })}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                  >
                    View Docs
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Guides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Integration Guides</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Step-by-step tutorials to help you integrate AI Enterprise with your stack
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {integrationGuides.map((guide, index) => (
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
                    guide.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    guide.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {guide.level}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{guide.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <FileText className="h-4 w-4" />
                    {guide.duration}
                  </div>
                  <button
                    onClick={() => setSelectedGuide({ ...guide })}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1"
                  >
                    Start Guide
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Resources CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              Developer Resources
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Access comprehensive developer resources, SDKs, and community support
              to integrate AI Enterprise into your applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/api-reference"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                API Reference
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/documentation"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
              >
                Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedGuide && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedGuide(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-2xl w-full max-w-4xl shadow-2xl my-8"
              >
                <div className="p-6 md:p-8 border-b border-slate-100 flex justify-between items-start sticky top-0 bg-white/95 backdrop-blur z-10 rounded-t-2xl">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {selectedGuide.category || selectedGuide.level || 'Guide'}
                      </span>
                      {selectedGuide.setupTime && (
                        <span className="flex items-center text-slate-500 text-sm">
                          <Settings className="w-4 h-4 mr-1" /> {selectedGuide.setupTime} setup
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900">{selectedGuide.title}</h2>
                    <p className="text-slate-600 mt-2 max-w-2xl">{selectedGuide.description}</p>
                  </div>
                  <button onClick={() => setSelectedGuide(null)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                    <X className="w-6 h-6 text-slate-400" />
                  </button>
                </div>
                
                <div className="p-6 md:p-8 space-y-8">
                  {/* Enhanced Content Placeholder */}
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                      <section>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500" /> Prerequisites
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <Check className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                            <span className="text-slate-700 text-sm">Active AI Enterprise account with administrative privileges</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <Check className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                            <span className="text-slate-700 text-sm">API Key with <code>write</code> access scope generated from dashboard</span>
                          </li>
                          <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                            <Check className="w-4 h-4 mt-1 text-blue-500 shrink-0" />
                            <span className="text-slate-700 text-sm">{selectedGuide.type !== 'integration' ? 'Development environment (Node.js v18+ or Python 3.10+)' : 'Valid HTTPS endpoint for receiving webhook payloads'}</span>
                          </li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Terminal className="w-5 h-5 text-blue-600" /> Quick Start
                        </h3>
                        <div className="bg-slate-900 rounded-lg overflow-hidden ring-1 ring-slate-900/5">
                          <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
                            <div className="flex gap-1.5">
                              <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                              <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                              <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                            </div>
                            <span className="text-xs text-slate-400 font-mono">bash</span>
                          </div>
                          <div className="p-4 font-mono text-sm text-blue-300">
                            <span className="text-slate-500"># Install the SDK</span><br/>
                            <span className="text-purple-400">npm</span> install @ai-enterprise/{selectedGuide.title?.toLowerCase().replace(/\s+/g, '-')}
                            <br/><br/>
                            <span className="text-slate-500"># Initialize configuration</span><br/>
                            <span className="text-purple-400">npx</span> ai-ent init --key=$API_KEY
                          </div>
                        </div>
                      </section>

                      <section>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                          <Settings className="w-5 h-5 text-purple-600" /> Integration Steps
                        </h3>
                        <div className="relative border-l-2 border-slate-200 pl-8 ml-3 space-y-8">
                          <div className="relative">
                            <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-sm ring-4 ring-white">1</span>
                            <h4 className="font-semibold text-slate-900 mb-1">Authenticate Client</h4>
                            <p className="text-slate-600 text-sm">Initialize the client with your secret key. Ensure you don't expose this key in client-side code.</p>
                          </div>
                          <div className="relative">
                            <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 font-bold text-sm ring-4 ring-white">2</span>
                            <h4 className="font-semibold text-slate-900 mb-1">Configure Webhooks (Optional)</h4>
                            <p className="text-slate-600 text-sm">Set up an endpoint to receive real-time updates about your data processing pipeline.</p>
                          </div>
                          <div className="relative">
                            <span className="absolute -left-[41px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-slate-600 font-bold text-sm ring-4 ring-white">3</span>
                            <h4 className="font-semibold text-slate-900 mb-1">Test Connection</h4>
                            <p className="text-slate-600 text-sm">Run the verification script to ensure all permissions are correctly configured.</p>
                          </div>
                        </div>
                      </section>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
                        <ul className="space-y-3 text-sm">
                          <li>
                            <Link href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                              <FileText className="w-4 h-4" /> Full Documentation
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                              <Code className="w-4 h-4" /> API Reference
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                              <Globe className="w-4 h-4" /> Example Repo
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
                        <h4 className="font-bold mb-2">Need Help?</h4>
                        <p className="text-blue-100 text-sm mb-4">Our support team is available 24/7 to assist with your integration.</p>
                        <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm py-2 rounded-lg text-sm font-medium transition-colors">
                          Contact Support
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};