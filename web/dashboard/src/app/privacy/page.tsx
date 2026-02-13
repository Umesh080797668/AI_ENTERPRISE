import Link from 'next/link';
import { ArrowLeft, Shield, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8">
           <Link href="/login" className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Login
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-green-100 rounded-lg">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support or otherwise communicate with us.
              </p>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. How We Use Information</h2>
              <p className="text-slate-600 mb-4">
                We use the information we collect to provide, maintain, and improve our services, such as to administer your account, send you technical notices, updates, security alerts and support and administrative messages.
              </p>

               <div className="my-8 p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-4">
                <Lock className="h-5 w-5 text-slate-400 mt-1 flex-shrink-0" />
                <div>
                    <h3 className="font-medium text-slate-900 mb-1">Data Security</h3>
                    <p className="text-sm text-slate-600">
                        We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                    </p>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. Sharing of Information</h2>
              <p className="text-slate-600 mb-4">
                We may share information about you as follows or as otherwise described in this Privacy Policy:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4 text-slate-600">
                <li>With vendors, consultants and other service providers who need access to such information to carry out work on our behalf.</li>
                <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation or legal process.</li>
                <li>If we believe your actions are inconsistent with the spirit or language of our user agreements or policies, or to protect the rights, property and safety of the Company or others.</li>
              </ul>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Your Choices</h2>
              <p className="text-slate-600 mb-4">
                Account Information: You may update, correct or delete information about you at any time by logging into your online account or emailing us.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} AI Enterprise. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
