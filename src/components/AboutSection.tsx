'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
];

const team = [
  { name: 'Tommaso Pacchiarotti', role: 'CEO & Founder', initials: 'TP', color: 'from-[#00d9ff] to-[#0088cc]' },
  { name: 'Cosimo Strusi', role: 'Lead Developer', initials: 'CS', color: 'from-[#a855f7] to-[#9333ea]' },
  { name: 'Gabriele Strusi', role: 'Full Stack Developer', initials: 'GS', color: 'from-[#ff006e] to-[#d90058]' },
  { name: 'Carlo Tiriolo', role: 'UI/UX Designer', initials: 'CT', color: 'from-[#00d9ff] to-[#a855f7]' },
  { name: 'Yurii Matvieiev', role: 'Tech Lead', initials: 'YM', color: 'from-[#a855f7] to-[#ff006e]' },
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
              Our Mission
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
            Our mission is to transform your ideas into extraordinary digital realities, 
            creating websites that not only impress visually, but generate concrete results 
            for your business.
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

        {/* Why Choose Us */}
        <motion.div
          className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-20 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Dotted Pattern Background */}
          <div className="absolute inset-0 opacity-30 dotted-pattern" />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/10 via-transparent to-[#a855f7]/10" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Choose Us</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff] to-[#0088cc] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Innovation First</h4>
                <p className="text-gray-400">
                  We use cutting-edge technologies to create modern, future-proof websites.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#a855f7] to-[#9333ea] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Results Driven</h4>
                <p className="text-gray-400">
                  Your success is our priority. We focus on delivering measurable results.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff006e] to-[#d90058] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Partnership Approach</h4>
                <p className="text-gray-400">
                  We work closely with you, becoming an extension of your team.
                </p>
              </div>
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg`}>
                  {member.initials}
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
