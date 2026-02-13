import Link from 'next/link';
import { ArrowLeft, FileText, CheckCircle2 } from 'lucide-react';

export default function TermsOfService() {
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
              <div className="p-2 bg-blue-100 rounded-lg">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
            </div>

            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing and using this platform (&quot;Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
              </p>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">2. Description of Service</h2>
              <p className="text-slate-600 mb-4">
                We provide users with access to a rich collection of resources, including various communications tools, search services, and personalized content through its network of properties which may be accessed through any various medium or device now known or hereafter developed.
              </p>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">3. User Account</h2>
              <p className="text-slate-600 mb-4">
                You are responsible for maintaining the security of your account and password. The Company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
              </p>
              <ul className="list-none space-y-2 mb-4 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>You must be a human. Accounts registered by &quot;bots&quot; are not permitted.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>You must provide your legal full name, a valid email address, and any other information requested in order to complete the signup process.</span>
                </li>
                 <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span>You are responsible for all Content posted and activity that occurs under your account.</span>
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">4. Cancellation and Termination</h2>
              <p className="text-slate-600 mb-4">
                You are solely responsible for properly canceling your account. An email or phone request to cancel your account is not considered cancellation. You can cancel your account at any time by clicking on the Account link in the global navigation bar at the top of the screen.
              </p>

              <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">5. Modifications to the Service and Prices</h2>
              <p className="text-slate-600 mb-4">
                We reserve the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice.
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center text-sm text-slate-500">
              <p>© {new Date().getFullYear()} AI Enterprise. All rights reserved.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
