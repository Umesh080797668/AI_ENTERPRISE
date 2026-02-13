import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900 transition-opacity hover:opacity-90">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="p-1.5 bg-blue-600 rounded-lg text-white"
            >
              <Bot className="h-5 w-5" />
            </motion.div>
            <span>AI Enterprise</span>
          </Link>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600"
        >
          {[
            { href: "/features", label: "Features" },
            { href: "/pricing", label: "Pricing" },
            { href: "/integration", label: "Integration" },
            { href: "/documentation", label: "Docs" },
            { href: "/blog", label: "Blog" },
            { href: "/about-us", label: "About" }
          ].map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`transition-colors hover:text-blue-600 relative group ${
                  pathname === link.href ? 'text-blue-600' : ''
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full ${
                  pathname === link.href ? 'w-full' : ''
                }`}></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <Link href="http://localhost:3001/login" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Login
          </Link>
          <Link href="http://localhost:3001/login?mode=signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
};
