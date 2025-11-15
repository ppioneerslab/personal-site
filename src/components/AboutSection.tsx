'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

const team = [
  { name: 'Alex Rivera', role: 'CEO & Founder', emoji: '👨‍💼' },
  { name: 'Sarah Chen', role: 'Lead Designer', emoji: '👩‍🎨' },
  { name: 'Marcus Johnson', role: 'Tech Lead', emoji: '👨‍💻' },
  { name: 'Emily Park', role: 'Project Manager', emoji: '👩‍💼' },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
              About Us
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
            We are a team of passionate developers, designers, and innovators dedicated to creating 
            exceptional digital experiences. Our mission is to transform your ideas into reality 
            using cutting-edge technology and creative solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#a855f7] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Our Approach */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Approach</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="text-xl font-semibold text-white mb-2">Strategy First</h4>
              <p className="text-gray-400">
                We begin by understanding your goals and crafting a tailored strategy.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="text-xl font-semibold text-white mb-2">Agile Development</h4>
              <p className="text-gray-400">
                Fast iterations and continuous feedback ensure optimal results.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-xl font-semibold text-white mb-2">Launch & Grow</h4>
              <p className="text-gray-400">
                We support you beyond launch with maintenance and growth strategies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-[#00d9ff] to-[#a855f7] rounded-full flex items-center justify-center text-4xl">
                  {member.emoji}
                </div>
                <h4 className="font-semibold text-white mb-1">{member.name}</h4>
                <p className="text-sm text-gray-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
