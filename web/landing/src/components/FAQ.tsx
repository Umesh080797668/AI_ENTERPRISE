import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ContactModal } from './ContactModal';

const faqs = [
  {
    question: "How secure is my data?",
    answer: "Your data is encrypted at rest and in transit using industry-standard AES-256 encryption. We maintain SOC 2 Type II compliance and never use your data to train our models. All processing happens in isolated, secure environments."
  },
  {
    question: "Can I integrate with my existing tools?",
    answer: "Yes! We support integrations with Google Drive, OneDrive, Slack, Teams, Jira, Notion, Confluence, and many more. Our API also allows for custom integrations with your internal systems."
  },
  {
    question: "How accurate is the AI search?",
    answer: "Our semantic search achieves 95%+ accuracy for most use cases. The AI understands context, intent, and can search across multiple file types including PDFs, documents, images, and videos."
  },
  {
    question: "What file types are supported?",
    answer: "We support all major file formats: PDF, DOCX, XLSX, PPTX, TXT, images (JPG, PNG, GIF), videos (MP4, MOV), and even scanned documents via OCR. We can also connect to databases and APIs."
  },
  {
    question: "Can I try it before committing?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all Pro features. No credit card required to get started. You can upload your own data and test the search capabilities."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can export all your data at any time. Upon cancellation, your data is securely deleted from our systems within 30 days, unless you request immediate deletion."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our AI-powered knowledge platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-5 w-5 text-slate-500" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setIsContactOpen(true)}
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            Contact our support team →
          </button>
          <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </motion.div>
      </div>
    </section>
  );
};