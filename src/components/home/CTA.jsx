import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Immersive CTA Background */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/30 via-slate-950 to-slate-950 opacity-80" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            y: [0, Math.random() * -100 - 50, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute w-2 h-2 bg-white rounded-full blur-[2px]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sora text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
        >
          Join Miracles World
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl lg:text-2xl text-slate-300 mb-12 font-medium"
        >
          Where Excellence Meets Innovation
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary Button */}
          <button className="relative group w-full sm:w-auto px-10 py-5 rounded-full bg-white text-black font-sora font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>

          {/* Secondary Outline Button */}
          <button className="relative group w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-sora font-bold text-lg transition-transform hover:scale-105 active:scale-95 hover:bg-white/10 hover:border-white/40">
            Explore Campus
          </button>
        </motion.div>
      </div>
    </section>
  );
}