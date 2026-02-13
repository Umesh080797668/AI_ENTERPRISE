import { motion } from 'framer-motion';
import { UploadCloud, Cpu, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: <UploadCloud className="h-8 w-8 text-white" />,
    title: "Connect Your Data",
    description: "Securely link your data sources like Google Drive, Slack, or upload files directly. We process everything in private, isolated environments.",
    color: "bg-blue-600"
  },
  {
    icon: <Cpu className="h-8 w-8 text-white" />,
    title: "AI Processing",
    description: "Our engine chunks, embeds, and indexes your content. It builds a semantic map of your organization's knowledge.",
    color: "bg-indigo-600"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    title: "Ask & Automate",
    description: "Start asking questions or running workflows. Get instant, cited answers and turn insights into action.",
    color: "bg-violet-600"
  }
];

export const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">How It Works</h2>
                    <p className="mt-4 text-lg text-slate-600">From raw data to intelligent insights in three simple steps.</p>
                </motion.div>

                <div className="relative grid gap-8 md:grid-cols-3 md:gap-12">
                     {/* Connecting Line (Desktop) */}
                    <div className="absolute top-12 left-0 w-full hidden md:block" aria-hidden="true">
                         <div className="h-0.5 w-full bg-slate-100 relative">
                             <div className="absolute top-1/2 left-1/6 w-2/3 -translate-y-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200"></div>
                         </div>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center z-10">
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`flex h-20 w-20 items-center justify-center rounded-2xl shadow-xl ${step.color} mb-6 transform transition-transform hover:scale-105`}
                            >
                                {step.icon}
                            </motion.div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
