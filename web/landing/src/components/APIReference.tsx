import { motion } from 'framer-motion';
import {
  Code,
  Terminal,
  FileText,
  Zap,
  Key,
  BookOpen,
  Download,
  Play,
  Copy,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Search,
  Filter,
  ExternalLink,
  Shield,
  Clock,
  Database
} from 'lucide-react';

export const APIReference = () => {
  const categories = [
    { name: "All", count: 24, active: true },
    { name: "Core API", count: 8, active: false },
    { name: "AI Models", count: 6, active: false },
    { name: "Data Processing", count: 5, active: false },
    { name: "Analytics", count: 3, active: false },
    { name: "Administration", count: 2, active: false }
  ];

  const endpoints = [
    {
      method: "POST",
      path: "/api/v1/process",
      description: "Process documents and extract insights using advanced AI models",
      category: "Data Processing",
      auth: "Bearer Token",
      rateLimit: "1000/hour",
      responseTime: "< 2s"
    },
    {
      method: "GET",
      path: "/api/v1/models",
      description: "List all available AI models with their capabilities and status",
      category: "AI Models",
      auth: "Bearer Token",
      rateLimit: "100/hour",
      responseTime: "< 500ms"
    },
    {
      method: "POST",
      path: "/api/v1/embeddings",
      description: "Generate high-dimensional vector embeddings for text analysis",
      category: "AI Models",
      auth: "Bearer Token",
      rateLimit: "500/hour",
      responseTime: "< 1s"
    },
    {
      method: "GET",
      path: "/api/v1/status",
      description: "Check system health and service availability",
      category: "Administration",
      auth: "None",
      rateLimit: "60/minute",
      responseTime: "< 100ms"
    },
    {
      method: "POST",
      path: "/api/v1/analyze",
      description: "Perform comprehensive analysis on structured and unstructured data",
      category: "Core API",
      auth: "Bearer Token",
      rateLimit: "200/hour",
      responseTime: "< 3s"
    },
    {
      method: "GET",
      path: "/api/v1/jobs/{job_id}",
      description: "Retrieve the status and results of an asynchronous processing job",
      category: "Core API",
      auth: "Bearer Token",
      rateLimit: "300/hour",
      responseTime: "< 200ms"
    }
  ];

  const sdks = [
    {
      language: "Python",
      version: "2.1.0",
      downloads: "2.5M+",
      icon: "🐍",
      features: ["Async Support", "Type Hints", "Auto Retry"]
    },
    {
      language: "JavaScript",
      version: "2.0.1",
      downloads: "1.8M+",
      icon: "🟨",
      features: ["Promise-based", "Browser Support", "NPM Package"]
    },
    {
      language: "Java",
      version: "1.9.2",
      downloads: "950K+",
      icon: "☕",
      features: ["Spring Boot", "Reactive", "Maven Central"]
    },
    {
      language: "Go",
      version: "1.8.0",
      downloads: "680K+",
      icon: "🔵",
      features: ["Context Support", "Goroutines", "Go Modules"]
    }
  ];

  const codeExample = `import ai_enterprise

# Initialize client
client = ai_enterprise.Client(api_key='your-api-key')

# Process a document
result = client.process({
    "document": "Your document text here...",
    "options": {
        "extract_entities": True,
        "sentiment_analysis": True
    }
})

print(result.insights)`;

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
            <Code className="h-4 w-4" />
            Developer Portal
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Complete
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> API Reference</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Everything you need to integrate AI Enterprise into your applications.
            From authentication to advanced AI models, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search endpoints..."
                className="pl-10 pr-4 py-3 w-full sm:w-80 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <a
              href="http://localhost:3001/login?mode=signup"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "Uptime", icon: CheckCircle },
              { number: "< 500ms", label: "Avg Response", icon: Zap },
              { number: "24/7", label: "Support", icon: Shield },
              { number: "50M+", label: "API Calls/Month", icon: Database }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* SDKs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Official SDKs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get started quickly with our official SDKs for popular programming languages
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk, index) => (
              <motion.div
                key={sdk.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{sdk.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-900">{sdk.language}</h3>
                  <p className="text-sm text-slate-500">v{sdk.version}</p>
                </div>
                <div className="text-center mb-4">
                  <div className="text-lg font-semibold text-blue-600">{sdk.downloads}</div>
                  <div className="text-sm text-slate-600">downloads</div>
                </div>
                <div className="space-y-2 mb-4">
                  {sdk.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Authentication Section */}
        <motion.div
          id="quick-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <Key className="h-12 w-12 text-blue-600" />
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Authentication</h2>
                <p className="text-lg text-slate-600">Secure access to our API endpoints</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Bearer Token Authentication</h3>
                <p className="text-slate-600 mb-4">
                  Include your API key in the Authorization header for all authenticated requests.
                </p>
                <div className="bg-slate-800 text-slate-100 p-4 rounded-lg font-mono text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400">Header</span>
                    <Copy className="h-4 w-4 text-slate-400 cursor-pointer hover:text-slate-200" />
                  </div>
                  Authorization: Bearer your-api-key-here
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Getting Your API Key</h3>
                <ol className="list-decimal list-inside text-slate-600 space-y-2">
                  <li>Sign up for an AI Enterprise account</li>
                  <li>Navigate to your dashboard</li>
                  <li>Go to API Keys section</li>
                  <li>Generate a new API key</li>
                  <li>Copy and securely store your key</li>
                </ol>
              </div>
            </div>
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
        {/* API Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">API Endpoints</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive documentation for all available API endpoints
            </p>
          </div>

          {/* Base URL */}
          <div className="bg-slate-50 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="h-6 w-6 text-blue-600" />
              <h3 className="text-xl font-semibold text-slate-900">Base URL</h3>
            </div>
            <div className="flex items-center justify-between bg-slate-100 px-4 py-3 rounded-lg">
              <code className="text-slate-800 font-mono">https://api.ai-enterprise.com</code>
              <Copy className="h-5 w-5 text-slate-400 cursor-pointer hover:text-slate-600" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className={`px-3 py-1 rounded text-sm font-mono font-semibold whitespace-nowrap ${
                    endpoint.method === 'GET' ? 'bg-green-100 text-green-800' :
                    endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {endpoint.method}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <code className="text-slate-800 font-mono text-lg">{endpoint.path}</code>
                      <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                        {endpoint.category}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">{endpoint.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Key className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">Auth: {endpoint.auth}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">Rate: {endpoint.rateLimit}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-slate-400" />
                        <span className="text-slate-600">Response: {endpoint.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors">
                    Try It Out
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-6">
              <Play className="h-8 w-8 text-blue-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Quick Start Example</h2>
            </div>
            <p className="text-slate-300 mb-8 text-lg">
              Get started with our Python SDK in minutes. Here's a complete example of document processing.
            </p>
            <div className="bg-slate-800 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 text-sm">Python</span>
                <Copy className="h-5 w-5 text-slate-400 cursor-pointer hover:text-slate-200" />
              </div>
              <pre className="text-slate-100 font-mono text-sm overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="/docs/python-sdk"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Python SDK Docs
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/docs"
                className="inline-flex items-center px-6 py-3 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:bg-slate-700 transition-colors"
              >
                Full Documentation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Support CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <BookOpen className="h-12 w-12 text-blue-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our comprehensive documentation and developer community are here to support your integration journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Browse Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/community/forum"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Join Developer Forum
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};