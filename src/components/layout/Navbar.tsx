import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { Button } from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Fitur', href: '#features' },
    { name: 'Cara Kerja', href: '#how-it-works' },
    { name: 'Teknologi', href: '#tech-stack' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Tim', href: '#team' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled && !isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md border-b border-[#d2d2d7]/50 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-50 relative group">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            src="/images/echomind-logo.png" 
            alt="EchoMind Icon" 
            className="h-8 w-auto" 
          />
          <img src="/images/echomind-wordmark.jpeg" alt="EchoMind" className="h-6 w-auto object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-[15px] text-[#171717] hover:text-[#2DBE60] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a href="/app-release.apk" download="EchoMind-App.apk">
            <Button variant="primary" className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download APK
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-[#171717] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link, idx) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  className="text-[24px] font-bold text-[#171717] hover:text-[#2DBE60] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                href="/app-release.apk"
                download="EchoMind-App.apk"
                onClick={() => setIsMobileMenuOpen(false)} 
                className="mt-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button variant="primary" className="px-8 py-4 text-[18px] flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download APK
                </Button>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
