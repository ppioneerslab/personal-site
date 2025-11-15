'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
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

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] transform scale-x-0 group-hover:scale-x-100 transition-transform" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden md:block px-6 py-2 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00d9ff]/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[10001]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="w-7 h-0.5 bg-white"
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-7 h-0.5 bg-white"
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="w-7 h-0.5 bg-white"
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Mobile Menu - Outside nav */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[10000] md:hidden bg-[#0a0a0f]/98"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-[10002] w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Content */}
            <div 
              className="relative w-full h-full flex flex-col items-center justify-center px-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Logo at top */}
              <div className="absolute top-16 w-full flex justify-center">
                <Image
                  src="/logo.svg"
                  alt="Pixel Pioneers LAB"
                  width={250}
                  height={75}
                  className="w-[200px] h-auto"
                  priority
                />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col items-center space-y-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-3xl font-bold text-white active:text-[#00d9ff] transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.05,
                      ease: 'easeOut'
                    }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className="mt-12 px-8 py-4 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] rounded-lg font-semibold text-lg active:scale-95 transition-transform duration-150"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4, ease: 'easeOut' }}
              >
                Get Started
              </motion.a>

              {/* Decorative gradient orbs - simplified */}
              <div className="absolute top-1/4 left-0 w-48 h-48 bg-[#00d9ff]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-[#a855f7]/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
