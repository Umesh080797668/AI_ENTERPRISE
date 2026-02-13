import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Heart,
  Zap,
  Coffee,
  Home,
  Award,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Briefcase,
  Globe
} from 'lucide-react';

export const Careers = () => {
  const jobs = [
    {
      title: "Senior AI Engineer",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "Join our AI team to build next-generation machine learning models and systems.",
      department: "Engineering",
      experience: "5+ years",
      skills: ["Python", "TensorFlow", "PyTorch", "MLOps"]
    },
    {
      title: "Full Stack Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$100k - $140k",
      description: "Build scalable web applications and APIs for our enterprise platform.",
      department: "Engineering",
      experience: "3+ years",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"]
    },
    {
      title: "DevOps Engineer",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $150k",
      description: "Design and maintain our cloud infrastructure and deployment pipelines.",
      department: "Engineering",
      experience: "4+ years",
      skills: ["Kubernetes", "Docker", "AWS", "Terraform"]
    },
    {
      title: "Product Manager",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Drive product strategy and work closely with engineering teams.",
      department: "Product",
      experience: "5+ years",
      skills: ["Product Strategy", "Analytics", "Agile", "User Research"]
    },
    {
      title: "UX/UI Designer",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $130k",
      description: "Create intuitive and beautiful user experiences for our platform.",
      department: "Design",
      experience: "3+ years",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "Data Scientist",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$115k - $155k",
      description: "Analyze complex datasets to drive insights and model improvements.",
      department: "Data",
      experience: "4+ years",
      skills: ["Python", "R", "SQL", "Statistics"]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance. Mental health support and wellness programs."
    },
    {
      icon: Home,
      title: "Remote Work",
      description: "Flexible remote work options with stipends for home office setup and coworking spaces."
    },
    {
      icon: TrendingUp,
      title: "Professional Development",
      description: "Annual learning budget, conference attendance, and career development opportunities."
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Unlimited PTO, flexible hours, and generous parental leave policies."
    },
    {
      icon: Award,
      title: "Equity Package",
      description: "Competitive equity compensation with performance-based vesting schedules."
    },
    {
      icon: Zap,
      title: "Latest Technology",
      description: "Access to cutting-edge tools, cloud credits, and the latest hardware."
    }
  ];

  const culture = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "We believe in the power of teamwork and cross-functional collaboration to solve complex problems."
    },
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Every team member is aligned with our mission to democratize access to advanced AI capabilities."
    },
    {
      icon: Star,
      title: "Innovation Focus",
      description: "We encourage creative thinking and provide the space to experiment with new ideas."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our work touches millions of users worldwide, creating real positive change."
    }
  ];

  const stats = [
    { number: "150+", label: "Team Members" },
    { number: "12", label: "Countries" },
    { number: "95%", label: "Employee Satisfaction" },
    { number: "50+", label: "Open Positions" }
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
            <Briefcase className="h-4 w-4" />
            Join Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Shape the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Enterprise AI</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            We're building the next generation of AI-powered enterprise solutions.
            Join a team of passionate innovators, researchers, and engineers who are
            transforming how businesses leverage artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#openings"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#culture"
              className="inline-flex items-center px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
            >
              Learn About Our Culture
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

        {/* Culture Section */}
        <motion.div
          id="culture"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Culture</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We're more than just a workplace – we're a community of innovators
              united by a shared vision and values
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {culture.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Join Us?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer competitive compensation and benefits designed to support your
              professional and personal growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <benefit.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{benefit.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions Section */}
        <motion.div
          id="openings"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Find your next opportunity to make an impact in the world of enterprise AI
            </p>
          </div>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-slate-900">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 lg:ml-8">
                    <div className="flex items-center gap-2 text-slate-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Users className="h-4 w-4" />
                      <span className="text-sm">{job.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                  <button className="px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Hiring Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We believe in a thorough yet efficient process that allows us to find the best fit for both you and our team
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application Review",
                description: "We carefully review your application and portfolio to understand your background and experience."
              },
              {
                step: "02",
                title: "Initial Interview",
                description: "A conversation with our recruiting team to learn more about your career goals and experience."
              },
              {
                step: "03",
                title: "Technical Assessment",
                description: "Depending on the role, you may complete a technical assessment or coding challenge."
              },
              {
                step: "04",
                title: "Final Interview",
                description: "Meet with team members and leadership to discuss your fit with our culture and vision."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{process.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't see a position that matches your skills? We're always interested in hearing from talented individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:careers@ai-enterprise.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Send Us Your Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};