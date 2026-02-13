import Link from 'next/link';
import { Bot, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                            <Bot className="h-6 w-6" />
                            <span>AI Enterprise</span>
                        </Link>
                        <p className="text-sm text-slate-400 mb-4">
                            Empowering teams with instant knowledge and automated workflows.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5"/></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Github className="h-5 w-5"/></Link>
                            <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5"/></Link>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/features" className="hover:text-blue-400 transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                            <li><Link href="/integration" className="hover:text-blue-400 transition-colors">Integrations</Link></li>
                            <li><Link href="/changelog" className="hover:text-blue-400 transition-colors">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/documentation" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
                            <li><Link href="/api-reference" className="hover:text-blue-400 transition-colors">API Reference</Link></li>
                            <li><Link href="/community" className="hover:text-blue-400 transition-colors">Community</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                     <div>
                        <h4 className="font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about-us" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                            <li><Link href="/legal" className="hover:text-blue-400 transition-colors">Legal</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
                    &copy; {new Date().getFullYear()} AI Enterprise Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
