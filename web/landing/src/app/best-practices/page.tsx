'use client';

import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Shield, Zap, Server, Database, X, ChevronRight } from 'lucide-react';

export default function BestPracticesPage() {
  const [selectedPractice, setSelectedPractice] = useState<any>(null);

  const practices = [
    {
      icon: Shield,
      title: "Security & Compliance",
      content: "Ensure your AI models are deployed securely with proper authentication, authorization, and data encryption. Follow SOC2 and GDPR guidelines.",
      color: "bg-red-100 text-red-600",
      details: [
        "Implement RBAC (Role-Based Access Control) for all API endpoints.",
        "Use encrypted connections (TLS 1.3) for data in transit.",
        "Enable auditing logs for all model inferences and data access.",
        "Regularly scan dependencies for vulnerabilities (CVEs).",
        "Sanitize all user inputs to prevent prompt injection attacks."
      ]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      content: "Techniques for reducing latency and throughput in LLM inference, including batching, caching, and model quantization.",
      color: "bg-yellow-100 text-yellow-600",
      details: [
        "Use 4-bit or 8-bit quantization for faster inference with minimal accuracy loss.",
        "Implement semantic caching (e.g., Redis) to serve repeated queries instantly.",
        "Utilize continuous batching strategies (like vLLM) to maximize GPU utilization.",
        "Deploy models on optimized runtimes (e.g., TensorRT-LLM, ONNX Runtime).",
        "Profile your application to identify bottlenecks in the pre/post-processing steps."
      ]
    },
    {
      icon: Server,
      title: "Infrastructure Scaling",
      content: "Guidelines for setting up auto-scaling rules in Kubernetes to handle varying loads efficiently while minimizing costs.",
      color: "bg-blue-100 text-blue-600",
      details: [
        "Configure HPA (Horizontal Pod Autoscaler) based on custom metrics like 'queue depth' or 'gpu utilization'.",
        "Use Node Auto-Provisioning (e.g., Karpenter) to rapidly spin up GPU nodes.",
        "Implement spot instance interruption handling for cost optimization.",
        "Separate control plane and data plane traffic.",
        "Use a global load balancer to distribute traffic across regions for high availability."
      ]
    },
    {
      icon: Database,
      title: "Data Management",
      content: "Best practices for vector database indexing, sharding strategies, and efficient retrieval for RAG applications.",
      color: "bg-green-100 text-green-600",
      details: [
        "Choose the right index type (HNSW, IVF) based on your recall/latency requirements.",
        "Implement hybrid search (combining dense vector and keyword search) for better accuracy.",
        "Regularly re-index your vector database to maintain performance.",
        "Use metadata filtering to narrow down search results before performing vector similarity check.",
        "Backup your vector data and embeddings regularly."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Lightbulb className="h-4 w-4" />
              Expert Guidance
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Best Practices</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Follow our recommended patterns and architectural decisions to build robust, scalable AI applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {practices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${practice.color}`}>
                  <practice.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">{practice.title}</h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {practice.content}
                </p>
                <button 
                  onClick={() => setSelectedPractice(practice)}
                  className="text-blue-600 font-medium hover:underline inline-flex items-center"
                >
                  Read complete guide <span className="ml-1">→</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedPractice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white w-full max-w-2xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedPractice.color}`}>
                        <selectedPractice.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{selectedPractice.title}</h3>
                </div>
                <button 
                    onClick={() => setSelectedPractice(null)}
                    className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-50 transition-colors"
                >
                    <X className="h-6 w-6" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto">
                <p className="text-slate-600 mb-6 text-lg">
                    {selectedPractice.content}
                </p>
                <h4 className="font-semibold text-slate-900 mb-4">Key Recommendations:</h4>
                <ul className="space-y-4">
                    {selectedPractice.details.map((detail: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                            <ChevronRight className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
              </div>
              <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end">
                <button 
                    onClick={() => setSelectedPractice(null)}
                    className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                >
                    Close Guide
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
