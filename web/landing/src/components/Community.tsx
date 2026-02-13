import { motion } from 'framer-motion';
import {
  Users,
  MessageCircle,
  Github,
  Twitter,
  Calendar,
  BookOpen,
  Award,
  Heart,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  ExternalLink,
  Zap,
  Globe,
  Code,
  Lightbulb
} from 'lucide-react';

export const Community = () => {
  const communityLinks = [
    {
      icon: <Github className="h-8 w-8 text-slate-900" />,
      title: "GitHub",
      description: "Contribute to our open source projects and help build the future of AI",
      href: "https://github.com/ai-enterprise",
      members: "2.5K+ contributors",
      color: "hover:bg-slate-50"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-600" />,
      title: "Discord",
      description: "Join real-time discussions with developers, researchers, and AI enthusiasts",
      href: "https://discord.gg/ai-enterprise",
      members: "15K+ members",
      color: "hover:bg-blue-50"
    },
    {
      icon: <Twitter className="h-8 w-8 text-blue-400" />,
      title: "Twitter",
      description: "Follow us for the latest updates, insights, and AI industry news",
      href: "https://twitter.com/ai_enterprise",
      members: "50K+ followers",
      color: "hover:bg-blue-50"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Forum",
      description: "Get help, share knowledge, and connect with fellow developers",
      href: "/community/forum",
      members: "8K+ discussions",
      color: "hover:bg-green-50"
    }
  ];

  const upcomingEvents = [
    {
      title: "AI Developer Meetup - San Francisco",
      date: "March 15, 2026",
      time: "6:00 PM PST",
      location: "Tech Hub SF",
      type: "In-Person",
      attendees: 120,
      description: "Monthly meetup featuring talks on the latest AI developments and networking opportunities."
    },
    {
      title: "Virtual AI Workshop: Building with LLMs",
      date: "March 22, 2026",
      time: "2:00 PM EST",
      location: "Online",
      type: "Virtual",
      attendees: 500,
      description: "Hands-on workshop covering advanced techniques for integrating large language models."
    },
    {
      title: "AI Ethics & Governance Conference",
      date: "April 5, 2026",
      time: "9:00 AM PST",
      location: "Convention Center",
      type: "Hybrid",
      attendees: 300,
      description: "Exploring the ethical implications and governance frameworks for responsible AI development."
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides, API references, and tutorials",
      href: "/docs",
      category: "Learning"
    },
    {
      icon: Code,
      title: "Code Examples",
      description: "Ready-to-use code snippets and sample projects",
      href: "/examples",
      category: "Development"
    },
    {
      icon: Lightbulb,
      title: "Best Practices",
      description: "Industry standards and recommended approaches",
      href: "/best-practices",
      category: "Guidance"
    },
    {
      icon: Award,
      title: "Case Studies",
      description: "Real-world implementations and success stories",
      href: "/case-studies",
      category: "Inspiration"
    }
  ];

  const testimonials = [
    {
      quote: "The AI Enterprise community has been instrumental in my journey as a developer. The support and knowledge sharing here is unparalleled.",
      author: "Sarah Chen",
      role: "Senior AI Engineer",
      company: "TechCorp",
      avatar: "/api/placeholder/40/40"
    },
    {
      quote: "I've learned more about AI implementation in the past 6 months here than in 2 years of self-study. This community is a game-changer.",
      author: "Marcus Rodriguez",
      role: "Full Stack Developer",
      company: "StartupXYZ",
      avatar: "/api/placeholder/40/40"
    },
    {
      quote: "The collaborative spirit and willingness to help newcomers is what makes this community truly special.",
      author: "Dr. Emily Watson",
      role: "AI Researcher",
      company: "University of Tech",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const stats = [
    { number: "25K+", label: "Community Members", icon: Users },
    { number: "500+", label: "Contributors", icon: Github },
    { number: "100K+", label: "Forum Posts", icon: MessageCircle },
    { number: "50+", label: "Countries", icon: Globe }
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
            <Heart className="h-4 w-4" />
            Community Driven
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Where AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Innovation Happens</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Join a vibrant community of developers, researchers, and AI enthusiasts.
            Share knowledge, collaborate on projects, and shape the future of enterprise AI together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/ai-enterprise"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join Discord
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/community/forum"
              className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Visit Forum
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
                className="text-center bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Connect With Us</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose your preferred platform to engage with our community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 ${link.color} transition-all duration-300 text-center group`}
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{link.title}</h3>
                <p className="text-slate-600 mb-3 text-sm leading-relaxed">{link.description}</p>
                <div className="text-xs text-slate-500 font-medium">{link.members}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join us for workshops, meetups, and conferences to learn and network
            </p>
          </div>
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-slate-900">{event.title}</h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        event.type === 'In-Person' ? 'bg-green-100 text-green-800' :
                        event.type === 'Virtual' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Register
                    </button>
                    <button className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Community Resources</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to succeed with AI Enterprise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <resource.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Community Says</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from developers who have found success in our community
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-600 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <Zap className="h-12 w-12 text-blue-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Community?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Whether you're a seasoned AI expert or just getting started, there's a place for you here.
              Let's build the future of AI together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg/ai-enterprise"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Join Discord Server
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/community/forum"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Forum
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};