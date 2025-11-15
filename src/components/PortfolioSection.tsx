'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

const packages = [
  {
    title: 'Starter',
    category: 'Sito Web Base',
    description: 'Perfetto per startup e piccole imprese che vogliono iniziare online.',
    tags: ['Landing Page', 'Responsive', 'SEO Base'],
    color: 'from-[#00d9ff] to-[#0088cc]',
    price: 'Da €999',
    features: ['Design moderno', 'Mobile responsive', 'Ottimizzazione SEO', 'Form contatti'],
    icon: 'rocket',
  },
  {
    title: 'Professional',
    category: 'Sito Web Completo',
    description: 'Soluzione completa con funzionalità avanzate e design personalizzato.',
    tags: ['Multi-pagina', 'CMS', 'Analytics'],
    color: 'from-[#a855f7] to-[#7c3aed]',
    price: 'Da €2.499',
    features: ['CMS integrato', 'Dashboard analytics', 'Blog dinamico', 'Multilingua'],
    icon: 'code',
  },
  {
    title: 'E-Commerce',
    category: 'Negozio Online',
    description: 'Piattaforma completa per vendere online con pagamenti integrati.',
    tags: ['Shop Online', 'Pagamenti', 'Gestione'],
    color: 'from-[#10b981] to-[#059669]',
    price: 'Da €3.999',
    features: ['Catalogo prodotti', 'Pagamenti sicuri', 'Gestione ordini', 'Email automation'],
    icon: 'cart',
  },
  {
    title: 'Enterprise',
    category: 'Soluzione Aziendale',
    description: 'Sistema completo per grandi aziende con requisiti specifici.',
    tags: ['Custom', 'Scalabile', 'Support 24/7'],
    color: 'from-[#f59e0b] to-[#d97706]',
    price: 'Su Misura',
    features: ['Architettura custom', 'Integrazioni API', 'Team dedicato', 'SLA garantito'],
    icon: 'building',
  },
  {
    title: 'Redesign',
    category: 'Rinnovo Completo',
    description: 'Trasformiamo il tuo sito esistente in una piattaforma moderna e performante.',
    tags: ['Modernizzazione', 'UX/UI', 'Performance'],
    color: 'from-[#ff006e] to-[#d90058]',
    price: 'Da €1.999',
    features: ['Analisi UX', 'Redesign completo', 'Migrazione dati', 'Performance boost'],
    icon: 'sparkles',
  },
  {
    title: 'Manutenzione',
    category: 'Assistenza Continua',
    description: 'Pacchetto di manutenzione mensile per il tuo sito web.',
    tags: ['Aggiornamenti', 'Backup', 'Supporto'],
    color: 'from-[#8b5cf6] to-[#6d28d9]',
    price: 'Da €299/mese',
    features: ['Backup giornalieri', 'Aggiornamenti sicurezza', 'Supporto prioritario', 'Report mensili'],
    icon: 'tools',
  },
];

const PackageCard = ({ pkg, index }: { pkg: typeof packages[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        perspective: 1000,
      }}
    >
      <motion.div
        className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden group cursor-pointer h-full flex flex-col shadow-xl"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Dotted pattern background */}
        <div className="absolute inset-0 opacity-20 dotted-pattern pointer-events-none" />

        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
          animate={{
            scale: isHovered ? 1.5 : 1,
            rotate: isHovered ? 180 : 0,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Glowing orb effect */}
        <motion.div
          className={`absolute w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 bg-gradient-to-r ${pkg.color}`}
          style={{
            x: useTransform(mouseX, [-0.5, 0.5], [-50, 50]),
            y: useTransform(mouseY, [-0.5, 0.5], [-50, 50]),
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative p-8 transform-3d flex-1 flex flex-col">
          {/* Animated gradient circle with different icons */}
          <motion.div
            className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${pkg.color} flex items-center justify-center shadow-lg`}
            animate={{
              y: isHovered ? [-3, 3, -3] : 0,
              rotate: isHovered ? [0, 5, -5, 0] : 0,
              scale: isHovered ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            {pkg.icon === 'rocket' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            )}
            {pkg.icon === 'code' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            )}
            {pkg.icon === 'cart' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )}
            {pkg.icon === 'building' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            )}
            {pkg.icon === 'sparkles' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            )}
            {pkg.icon === 'tools' && (
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )}
          </motion.div>

          {/* Category badge */}
          <motion.div
            className={`inline-block px-4 py-1 mb-4 rounded-full text-xs font-semibold bg-gradient-to-r ${pkg.color} text-white w-fit`}
            whileHover={{ scale: 1.05 }}
          >
            {pkg.category}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d9ff] group-hover:to-[#a855f7] transition-all duration-300">
            {pkg.title}
          </h3>

          {/* Price */}
          <motion.div
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent text-left"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {pkg.price}
          </motion.div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">{pkg.description}</p>

          {/* Features list - visible on hover */}
          <motion.div
            className="mb-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              height: isHovered ? 'auto' : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            {pkg.features.map((feature, i) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2 text-xs text-gray-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  x: isHovered ? 0 : -10 
                }}
                transition={{ delay: i * 0.05 }}
              >
                <svg className="w-4 h-4 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </motion.div>
            ))}
          </motion.div>

          {/* Tags with stagger animation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {pkg.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                  scale: isHovered ? 1 : 0.95,
                }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 217, 255, 0.2)' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className={`w-full py-3 px-6 rounded-xl font-semibold text-white bg-gradient-to-r ${pkg.color} opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg`}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0, 217, 255, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              Scopri di più
              <motion.span
                animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </div>

        {/* Corner accent */}
        <motion.div
          className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pkg.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20`}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-[#00d9ff] rounded-full blur-[100px] opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#a855f7] rounded-full blur-[120px] opacity-10"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-[#00d9ff] via-[#a855f7] to-[#ff006e] bg-clip-text text-transparent animate-gradient">
              Our Packages
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Modular and customizable solutions for all your digital needs.
          </motion.p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.title} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
