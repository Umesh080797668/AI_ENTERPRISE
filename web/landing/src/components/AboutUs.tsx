import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Globe, TrendingUp, Heart, Lightbulb, Rocket, ArrowRight, User } from 'lucide-react';
import { ContactModal } from './ContactModal';

export const AboutUs = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Pushing the boundaries of AI technology to solve real-world problems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with our users and the broader community."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering high-quality solutions that exceed expectations."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making AI accessible and beneficial for organizations worldwide."
    }
  ];

  const stats = [
    { number: "500+", label: "Enterprise Customers" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "50M+", label: "Documents Processed" },
    { number: "24/7", label: "Support Available" }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "AI Enterprise was founded with a vision to democratize AI for enterprises."
    },
    {
      year: "2021",
      title: "First Product Launch",
      description: "Released our flagship AI knowledge platform with document processing capabilities."
    },
    {
      year: "2022",
      title: "Series A Funding",
      description: "Raised $15M in Series A funding to accelerate product development and expansion."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded to 20+ countries with enterprise customers across various industries."
    },
    {
      year: "2024",
      title: "AI Model Integration",
      description: "Integrated GPT-4 and other advanced AI models for enhanced capabilities."
    },
    {
      year: "2025",
      title: "Platform Evolution",
      description: "Launched v2.0 with advanced workflow automation and multi-modal AI features."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "👩‍💼",
      bio: "Former AI researcher at Google Brain with 10+ years in enterprise AI."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      bio: "Ex-Microsoft engineer specializing in scalable AI infrastructure."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      image: "👩‍🔬",
      bio: "PhD in Machine Learning from Stanford, published 50+ research papers."
    },
    {
      name: "James Park",
      role: "VP of Engineering",
      image: "👨‍🏫",
      bio: "Led engineering teams at Uber and Airbnb, expert in distributed systems."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Enterprise</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're building the future of enterprise AI, empowering organizations to harness
              the power of artificial intelligence for better decision-making and innovation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="h-12 w-12 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              To democratize access to advanced AI capabilities, making them accessible,
              reliable, and secure for enterprises of all sizes. We believe that AI should
              augment human capabilities, not replace them, and we're committed to building
              tools that empower teams to achieve more.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Innovation First</h3>
                  <p className="text-slate-600 text-sm">Constantly pushing boundaries with cutting-edge AI research</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">User-Centric</h3>
                  <p className="text-slate-600 text-sm">Every feature designed with our users' needs in mind</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Scalable Solutions</h3>
                  <p className="text-slate-600 text-sm">Built to grow with your business from day one</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
      {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{value.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From concept to industry leader: key milestones in our evolution
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-blue-200 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                     <div className={`bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300 relative group
                        ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}
                     `}>
                        {/* Mobile: Year Badge inside card */}
                        <div className="md:hidden mb-4">
                           <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                              {item.year}
                           </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                        
                        {/* Decorative arrow for desktop */}
                        <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-slate-100 transform rotate-45
                           ${index % 2 === 0 ? '-right-2 border-r-slate-100 border-t-slate-100 border-l-transparent border-b-transparent' : '-left-2 border-l-slate-100 border-b-slate-100 border-t-transparent border-r-transparent'}
                        `}></div>
                     </div>
                  </div>

                  {/* Center Year/Dot */}
                  <div className="relative flex items-center justify-center flex-shrink-0 z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs md:text-sm">
                       <span className="md:hidden block w-3 h-3 bg-white rounded-full"></span>
                       <span className="hidden md:block">{item.year}</span>
                    </div>
                  </div>

                  {/* Empty Side for alignment */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The brilliant minds behind our mission to revolutionize enterprise AI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of companies already leveraging our AI platform to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:3001'}/login?mode=signup`}
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Sales
              </button>
              <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
            </div>
          </div>
        </motion.div>
        </div>
      </section>
      </div>
  );
};
