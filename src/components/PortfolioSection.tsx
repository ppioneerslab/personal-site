'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern online shopping experience with real-time inventory.',
    image: '/placeholder-project.jpg',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
    color: 'from-[#00d9ff] to-[#a855f7]',
  },
  {
    title: 'Fitness Mobile App',
    category: 'Mobile Development',
    description: 'Track workouts, nutrition, and progress with AI recommendations.',
    image: '/placeholder-project.jpg',
    tags: ['React Native', 'Firebase', 'ML'],
    color: 'from-[#a855f7] to-[#ff006e]',
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Analytics platform with real-time data visualization.',
    image: '/placeholder-project.jpg',
    tags: ['Figma', 'React', 'D3.js'],
    color: 'from-[#ff006e] to-[#00d9ff]',
  },
  {
    title: 'Banking App',
    category: 'Web Development',
    description: 'Secure financial management with biometric authentication.',
    image: '/placeholder-project.jpg',
    tags: ['Next.js', 'Plaid', 'Auth0'],
    color: 'from-[#00d9ff] to-[#a855f7]',
  },
  {
    title: 'Social Network',
    category: 'Full Stack',
    description: 'Connect creators with their audience in real-time.',
    image: '/placeholder-project.jpg',
    tags: ['React', 'WebSocket', 'Redis'],
    color: 'from-[#a855f7] to-[#ff006e]',
  },
  {
    title: 'AI Content Generator',
    category: 'AI/ML',
    description: 'Generate marketing content with advanced AI models.',
    image: '/placeholder-project.jpg',
    tags: ['Python', 'OpenAI', 'FastAPI'],
    color: 'from-[#ff006e] to-[#00d9ff]',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              Our Work
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered for clients worldwide.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br ${project.color} opacity-20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl opacity-50">🎨</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-[#00d9ff] font-semibold mb-2 uppercase tracking-wider">
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="mt-4 text-[#00d9ff] font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  View Case Study
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
