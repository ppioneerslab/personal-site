'use client';

import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        {/* Outer hexagon */}
        <motion.path
          d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Inner P shape with pixels */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <rect x="14" y="12" width="2" height="2" fill="#00d9ff" />
          <rect x="14" y="15" width="2" height="2" fill="#00d9ff" />
          <rect x="14" y="18" width="2" height="2" fill="#00d9ff" />
          <rect x="14" y="21" width="2" height="2" fill="#00d9ff" />
          <rect x="14" y="24" width="2" height="2" fill="#00d9ff" />
          <rect x="17" y="12" width="2" height="2" fill="#a855f7" />
          <rect x="20" y="12" width="2" height="2" fill="#a855f7" />
          <rect x="23" y="15" width="2" height="2" fill="#ff006e" />
          <rect x="23" y="18" width="2" height="2" fill="#ff006e" />
          <rect x="20" y="18" width="2" height="2" fill="#a855f7" />
          <rect x="17" y="18" width="2" height="2" fill="#a855f7" />
        </motion.g>

        {/* Glitch effect lines */}
        <motion.line
          x1="8"
          y1="20"
          x2="12"
          y2="20"
          stroke="#00d9ff"
          strokeWidth="1"
          opacity="0"
          animate={{
            opacity: [0, 1, 0],
            x1: [8, 6, 8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        />
        
        <defs>
          <linearGradient id="gradient1" x1="5" y1="2" x2="35" y2="38">
            <stop offset="0%" stopColor="#00d9ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ff006e" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="flex flex-col">
        <motion.span
          className="text-xl font-bold bg-gradient-to-r from-[#00d9ff] via-[#a855f7] to-[#ff006e] bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Pixel Pioneers
        </motion.span>
        <motion.span
          className="text-xs text-gray-400 tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          LAB
        </motion.span>
      </div>
    </motion.div>
  );
}
