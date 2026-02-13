import { Check, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import Link from 'next/link';

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
             <CreditCard className="h-4 w-4" />
             Flexible Plans
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Pricing</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">Choose the plan that's right for your team size.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-slate-900">Starter</h3>
            <div className="mt-4 flex items-baseline text-slate-900">
              <span className="text-4xl font-bold tracking-tight">$0</span>
              <span className="ml-1 text-xl font-semibold text-slate-500">/month</span>
            </div>
            <p className="mt-2 text-slate-500 text-sm">Free for small teams up to 5 users.</p>
            <ul className="mt-6 space-y-4 flex-1">
               {['5 Users', '1GB Storage', 'Basic Semantic Search', 'Community Support'].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex"
                  >
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mr-3" />
                    <span className="text-slate-600">{feature}</span>
                  </motion.li>
               ))}
            </ul>
             <Link href="http://localhost:3001/login?mode=signup">
               <Button variant="outline" className="mt-8 w-full">Get Started</Button>
             </Link>
          </motion.div>

          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="relative rounded-2xl border border-blue-600 bg-slate-900 text-white p-8 shadow-xl flex flex-col transform md:-translate-y-4 hover:shadow-2xl transition-all"
          >
             <motion.div
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }}
               className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide"
             >
                 Most Popular
             </motion.div>
            <h3 className="text-xl font-semibold">Pro</h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-4xl font-bold tracking-tight">$49</span>
              <span className="ml-1 text-xl font-semibold text-slate-400">/month</span>
            </div>
            <p className="mt-2 text-slate-400 text-sm">For growing teams needing automation.</p>
            <ul className="mt-6 space-y-4 flex-1">
               {['Unlimited Users', '100GB Storage', 'Advanced AI Workflows', 'Slack & Teams Integration', 'Priority Email Support'].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    className="flex"
                  >
                    <Check className="h-5 w-5 text-blue-400 shrink-0 mr-3" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.li>
               ))}
            </ul>
             <Link href="http://localhost:3001/login?mode=signup">
               <Button className="mt-8 w-full bg-blue-600 hover:bg-blue-500 border-none text-white">Start Free Trial</Button>
             </Link>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-slate-900">Enterprise</h3>
            <div className="mt-4 flex items-baseline text-slate-900">
              <span className="text-4xl font-bold tracking-tight">Custom</span>
            </div>
            <p className="mt-2 text-slate-500 text-sm">For large organizations with strict compliance.</p>
            <ul className="mt-6 space-y-4 flex-1">
               {['Custom Deployment (VPC)', 'SSO & SAML', 'Audit Logs', 'Dedicated Success Manager', '24/7 Phone Support', 'SLA'].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex"
                  >
                    <Check className="h-5 w-5 text-blue-600 shrink-0 mr-3" />
                    <span className="text-slate-600">{feature}</span>
                  </motion.li>
               ))}
            </ul>
             <Link href="/contact">
               <Button variant="outline" className="mt-8 w-full">Contact Sales</Button>
             </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
