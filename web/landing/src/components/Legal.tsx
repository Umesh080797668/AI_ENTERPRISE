import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, Scale, BookOpen, AlertTriangle, Users, Mail, MapPin, Phone, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { DocViewerModal } from './DocViewerModal';
import { ContactModal } from './ContactModal';

export const Legal = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedDoc, setSelectedDoc] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const legalCategories = [
    { name: "All", count: 6 },
    { name: "Terms & Conditions", count: 2 },
    { name: "Privacy & Data", count: 2 },
    { name: "Compliance", count: 1 },
    { name: "Policies", count: 1 }
  ];

  const legalDocs = [
    {
      icon: <FileText className="h-6 w-6 text-blue-600" />,
      title: "Terms of Service",
      description: "Complete terms and conditions for using AI Enterprise platform, including user responsibilities and service limitations.",
      href: "/legal/terms",
      category: "Terms & Conditions",
      lastUpdated: "Dec 2024",
      popular: true,
      articles: 12
    },
    {
      icon: <Shield className="h-6 w-6 text-green-600" />,
      title: "Privacy Policy",
      description: "Comprehensive privacy policy covering data collection, processing, storage, and user rights under GDPR and CCPA.",
      href: "/legal/privacy",
      category: "Privacy & Data",
      lastUpdated: "Nov 2024",
      popular: true,
      articles: 15
    },
    {
      icon: <Scale className="h-6 w-6 text-purple-600" />,
      title: "Acceptable Use Policy",
      description: "Guidelines for appropriate platform usage, prohibited activities, and content policies to ensure fair use.",
      href: "/legal/acceptable-use",
      category: "Policies",
      lastUpdated: "Oct 2024",
      popular: false,
      articles: 8
    },
    {
      icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
      title: "Data Processing Agreement",
      description: "Detailed agreement for data processing activities, security measures, and compliance with international standards.",
      href: "/legal/data-processing",
      category: "Privacy & Data",
      lastUpdated: "Dec 2024",
      popular: false,
      articles: 10
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-orange-600" />,
      title: "Security & Compliance",
      description: "Security measures, compliance certifications, and regulatory adherence documentation for enterprise customers.",
      href: "/legal/security",
      category: "Compliance",
      lastUpdated: "Nov 2024",
      popular: true,
      articles: 18
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "User Agreement",
      description: "User agreement terms, account responsibilities, and service level commitments for all platform users.",
      href: "/legal/user-agreement",
      category: "Terms & Conditions",
      lastUpdated: "Dec 2024",
      popular: false,
      articles: 6
    }
  ];

  const filteredDocs = activeCategory === "All" 
    ? legalDocs 
    : legalDocs.filter(doc => doc.category === activeCategory);

  const handleOpenDoc = (doc: any) => {
    setSelectedDoc({
      ...doc,
      type: 'article',
      readTime: '10 min read',
      content: `
        <h3>${doc.title}</h3>
        <p>This is a placeholder for the full content of the ${doc.title}. In a production environment, this would contain the complete legal text, clauses, and detailed information relevant to this document.</p>
        <h4>1. Introduction</h4>
        <p>Welcome to our ${doc.title}. This document outlines the key principles and rules regarding...</p>
        <h4>2. Scope</h4>
        <p>This policy applies to all users of our platform...</p>
        <h4>3. Key Provisions</h4>
        <ul>
          <li>Compliance with laws</li>
          <li>User responsibilities</li>
          <li>Data protection measures</li>
        </ul>
        <p>For any questions regarding this document, please contact our legal team.</p>
      `
    });
    setIsModalOpen(true);
  };


  const complianceStandards = [
    { name: "SOC 2 Type II", status: "Certified" },
    { name: "ISO 27001", status: "Certified" },
    { name: "GDPR", status: "Compliant" },
    { name: "CCPA", status: "Compliant" },
    { name: "HIPAA", status: "Ready" }
  ];

  const stats = [
    { number: "50+", label: "Legal Documents" },
    { number: "15+", label: "Compliance Standards" },
    { number: "24/7", label: "Legal Support" },
    { number: "99.9%", label: "Uptime SLA" }
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
            <Scale className="h-4 w-4" />
            Legal Center
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Transparent & Compliant
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Legal Framework</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Comprehensive legal documentation ensuring transparency, compliance, and trust.
            Access all terms, policies, and compliance information in one centralized location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#documents"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('documents')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Documents
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button
              onClick={() => document.getElementById('contact-legal')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
            >
              Contact Legal Team
              <Mail className="ml-2 h-5 w-5" />
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

        {/* Compliance Standards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Compliance Standards</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meeting the highest standards of security, privacy, and regulatory compliance
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center"
              >
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-900 mb-2">{standard.name}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  standard.status === 'Certified' ? 'bg-green-100 text-green-800' :
                  standard.status === 'Compliant' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {standard.status}
                </span>
              </motion.div>
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
            {legalCategories.map((category) => (
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
        {/* Legal Documents Grid */}
        <motion.div
          id="documents"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow group cursor-pointer"
                onClick={() => handleOpenDoc(doc)}
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
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Clock className="h-4 w-4" />
                    Updated {doc.lastUpdated}
                  </div>
                  {doc.popular && (
                    <div className="flex items-center gap-1 text-sm text-amber-600">
                      <Star className="h-4 w-4" />
                      Popular
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                    {doc.category}
                  </span>
                  <button
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                  >
                    Read Document
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Legal Team */}
        <motion.div
          id="contact-legal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="h-4 w-4" />
                Legal Support
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Legal Assistance?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Our legal team is available to help with questions about our terms,
                compliance requirements, or any legal matters related to our platform.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                  <Mail className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <button 
                    onClick={() => setIsContactModalOpen(true)}
                    className="text-blue-100 text-sm hover:text-white transition-colors underline"
                  >
                    Contact via Form
                  </button>
                  <p className="text-blue-200 text-xs mt-1">Response within 24 hours</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                  <Phone className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <a href="tel:1-800-AI-LEGAL" className="text-blue-100 text-sm hover:text-white transition-colors">1-800-AI-LEGAL</a>
                  <p className="text-blue-200 text-xs mt-1">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                  <MapPin className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Office Address</h3>
                  <p className="text-blue-100 text-sm">123 AI Street<br />Tech City, TC 12345</p>
                  <p className="text-blue-200 text-xs mt-1">United States</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Legal Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <DocViewerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doc={selectedDoc}
      />
      
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        initialTopic="legal"
      />
    </section>
  );
};