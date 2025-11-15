'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    features: ['React & Next.js', 'E-commerce', 'Progressive Web Apps', 'API Integration'],
    gradient: 'from-[#00d9ff] to-[#0088cc]',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    features: ['User Research', 'Prototyping', 'Design Systems', 'Branding'],
    gradient: 'from-[#ff006e] to-[#d90058]',
  },
  {
    title: 'Consulting',
    description: 'Strategic guidance to help your business grow with technology.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    features: ['Tech Strategy', 'Code Review', 'Team Training', 'Architecture'],
    gradient: 'from-[#a855f7] to-[#9333ea]',
  },
  {
    title: 'Maintenance',
    description: 'Ongoing support and updates to keep your project running smoothly.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Bug Fixes', 'Updates', 'Performance', '24/7 Support'],
    gradient: 'from-[#ff006e] to-[#ff3385]',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end solutions for your digital needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative">
                {/* Icon with Gradient Background */}
                <motion.div 
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} mb-6 text-white`}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center text-sm text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                    >
                      <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <motion.div
                  className={`mt-6 font-semibold flex items-center gap-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <span>→</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
