'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with the latest technologies.',
    icon: '💻',
    features: ['React & Next.js', 'E-commerce', 'Progressive Web Apps', 'API Integration'],
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    features: ['React Native', 'Flutter', 'App Store Deploy', 'Push Notifications'],
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
    icon: '🎨',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Branding'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable infrastructure and automated deployment pipelines.',
    icon: '☁️',
    features: ['AWS & Azure', 'CI/CD', 'Docker', 'Monitoring'],
  },
  {
    title: 'Consulting',
    description: 'Strategic guidance to help your business grow with technology.',
    icon: '💡',
    features: ['Tech Strategy', 'Code Review', 'Team Training', 'Architecture'],
  },
  {
    title: 'Maintenance',
    description: 'Ongoing support and updates to keep your project running smoothly.',
    icon: '🔧',
    features: ['Bug Fixes', 'Updates', 'Performance', '24/7 Support'],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00d9ff] to-[#a855f7] opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
              
              <div className="relative">
                {/* Icon */}
                <div className="text-5xl mb-4">{service.icon}</div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                
                {/* Description */}
                <p className="text-gray-400 mb-4">{service.description}</p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-[#00d9ff] rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <motion.div
                  className="mt-4 text-[#00d9ff] font-semibold flex items-center gap-2"
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
