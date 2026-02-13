'use client';

import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Terminal, ArrowRight, Copy, X, Check } from 'lucide-react';

export default function ExamplesPage() {
  const [selectedExample, setSelectedExample] = useState<any>(null);
  const [isCopied, setIsCopied] = useState<string | null>(null);

  const examples = [
    {
      title: "Chatbot Implementation",
      description: "A complete RAG-based chatbot using Next.js and Python backend.",
      language: "TypeScript",
      difficulty: "Intermediate",
      tags: ["RAG", "Next.js", "Python"],
      code: `
// Chatbot implementation example
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function chat(message: string) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    model: 'gpt-3.5-turbo',
  });

  return completion.choices[0].message;
}
      `
    },
    {
      title: "Image Generation API",
      description: "How to integrate Stable Diffusion for on-demand image generation.",
      language: "Python",
      difficulty: "Advanced",
      tags: ["Computer Vision", "API"],
      code: `
# Image Generation API using Stable Diffusion
from diffusers import StableDiffusionPipeline
import torch

model_id = "runwayml/stable-diffusion-v1-5"
pipe = StableDiffusionPipeline.from_pretrained(
    model_id, torch_dtype=torch.float16
)
pipe = pipe.to("cuda")

def generate_image(prompt):
    image = pipe(prompt).images[0]
    return image
      `
    },
    {
      title: "Sentiment Analysis Pipeline",
      description: "Real-time sentiment analysis of customer feedback streams.",
      language: "Python",
      difficulty: "Beginner",
      tags: ["NLP", "Data Engineering"],
      code: `
# Sentiment Analysis Pipeline
from transformers import pipeline

classifier = pipeline("sentiment-analysis")

def analyze_sentiment(texts):
    results = classifier(texts)
    return results

data = ["I love this product!", "This is terrible."]
print(analyze_sentiment(data))
      `
    }
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(id);
    setTimeout(() => setIsCopied(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Code Examples</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Jumpstart your development with our collection of production-ready code examples and boilerplates.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {example.language}
                    </span>
                    <span className="text-sm font-medium text-slate-500 border border-slate-200 px-2 py-0.5 rounded ml-auto">
                      {example.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{example.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm">
                    {example.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {example.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                 <button 
                    onClick={() => setSelectedExample(example)}
                    className="w-full flex items-center justify-center gap-2 py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors"
                  >
                    View Code <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="bg-slate-900 p-4 border-t border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
                    <span>Terminal</span>
                    <button 
                        onClick={() => handleCopy("git clone https://github.com/ai-enterprise/examples", `clone-${index}`)}
                        className="hover:text-white transition-colors"
                    >
                        {isCopied === `clone-${index}` ? <Check className="h-3 w-3 text-green-400" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                  <div className="text-green-400 font-mono text-sm break-all">
                    git clone https://github.com/ai-enterprise/examples
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatePresence>
        {selectedExample && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
             <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 w-full max-w-3xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
                <div className="flex items-center justify-between p-4 border-b border-slate-700">
                    <h3 className="text-white font-semibold text-lg">{selectedExample.title} - Code Snippet</h3>
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => handleCopy(selectedExample.code, 'modal-code')}
                            className="text-slate-400 hover:text-white flex items-center gap-2 text-sm"
                        >
                            {isCopied === 'modal-code' ? (
                                <>
                                    <Check className="h-4 w-4 text-green-400" />
                                    <span className="text-green-400">Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="h-4 w-4" />
                                    <span>Copy</span>
                                </>
                            )}
                        </button>
                        <button 
                            onClick={() => setSelectedExample(null)}
                            className="text-slate-400 hover:text-white p-1"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                </div>
                <div className="p-6 overflow-auto custom-scrollbar">
                    <pre className="text-sm font-mono text-slate-300">
                        {selectedExample.code}
                    </pre>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
