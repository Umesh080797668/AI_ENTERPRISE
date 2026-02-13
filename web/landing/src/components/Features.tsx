import { Search, Bot, Layers, FileText, Shield, Zap, Globe, Cpu, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';

export const Features = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Semantic Search",
      description: "Go beyond keywords. Our vector-based search understands the intent behind your questions to find the most relevant answers."
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Intelligent Assistant",
      description: "A 24/7 AI companion that cites sources from your internal documents, ensuring accuracy and reducing hallucinations."
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Automated Workflows",
      description: "Trigger multi-step actions based on document content. Approve invoices, route contracts, and more automatically."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Universal Ingestion",
      description: "Connect PDF, DOCX, CSV, Notion, Jira, and Slack. We handle the parsing, chunking, and embedding."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC 2 compliance, and granular Role-Based Access Control (RBAC) to keep data safe."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Real-time Sync",
      description: "Changes in your data sources are reflected instantly. Your knowledge base is always up-to-date."
    },
     {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-language Support",
      description: "Query in one language, get answers from documents in another. Break down global communication barriers."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Custom LLM Support",
      description: "Bring your own model (BYOM) or use our fine-tuned industry specific models for better performance."
    },
     {
      icon: <BarChart className="h-6 w-6" />,
      title: "Usage Analytics",
      description: "Track what your team is searching for and identify knowledge gaps in your organization."
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            Platform Capabilities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Features</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Everything you need to turn your documents into actionable intelligence.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
