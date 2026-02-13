import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from './ui/Button'; // reusing cn utility

const testimonials = [
  {
    quote: "This platform transformed how we handle internal documentation. The semantic search is incredibly accurate.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Inc.",
    initials: "SC"
  },
  {
    quote: "We reduced our onboarding time by 40% using the automated workflows. It's truly a game changer for HR.",
    author: "Michael Ross",
    role: "VP of Operations, DataScale",
    initials: "MR"
  },
  {
    quote: "The ability to ask questions against our Jira and Slack history in one place is something we didn't know we needed.",
    author: "Jessica Li",
    role: "Product Manager, Innovate",
    initials: "JL"
  }
];

export const Testimonials = () => {
    return (
        <section className="py-20 bg-slate-50 border-y border-slate-200">
             <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl font-bold mb-4 text-slate-900">Trusted by Forward-Thinking Teams</h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Join thousands of companies already transforming their knowledge management
                  </p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          whileHover={{ y: -5 }}
                          className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-lg transition-shadow"
                        >
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: i * 0.1 + 0.2 }}
                              className="flex gap-1 mb-4 text-amber-400"
                            >
                                {[...Array(5)].map((_, starIndex) => (
                                  <motion.div
                                    key={starIndex}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: i * 0.1 + 0.3 + starIndex * 0.05 }}
                                  >
                                    <Star className="fill-current w-4 h-4" />
                                  </motion.div>
                                ))}
                            </motion.div>
                            <blockquote className="flex-1 text-lg text-slate-700 leading-relaxed mb-6">
                                "{t.quote}"
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <motion.div
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: i * 0.1 + 0.4, type: "spring", stiffness: 200 }}
                                  className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500"
                                >
                                    {t.initials}
                                </motion.div>
                                <div>
                                    <div className="font-semibold text-slate-900">{t.author}</div>
                                    <div className="text-sm text-slate-500">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
             </div>
        </section>
    );
};
