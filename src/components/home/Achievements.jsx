import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Target, Globe } from 'lucide-react';

// Counter hook for numbers
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return <>{count}{suffix}</>;
};

const stats = [

  {

    icon: Trophy,

    value: 3,

    suffix: "",

    label: "Guinness World Records"

  },

  {

    icon: Medal,

    value: 250,

    suffix: "+",

    label: "Awards & Recognitions"

  },

  {

    icon: Target,

    value: 100,

    suffix: "%",

    label: "Academic Excellence"

  }

];

export default function Achievements() {
  return (
    <section className="relative py-24 lg:py-32 bg-black border-y border-white/5 overflow-hidden">
      {/* Gold Ambient Glow for Prestige */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] lg:w-[40vw] lg:h-[40vw] bg-yellow-400/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* GUINNESS WORLD RECORD HERO CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-px bg-linear-to-brom-yellow-400/50 to-transparent overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-linear-to-r from-amber-900/40 via-yellow-900/20 to-amber-900/40" />
          <div className="relative bg-slate-950/80 backdrop-blur-2xl rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left border border-yellow-400/20">
            
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 shrink-0inear-to-br from-yellow-300 via-yellow-400 to-yellow-600 rounded-full flex items-center justify-center p-1 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
            >
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <Trophy size={48} className="text-yellow-400" />
              </div>
            </motion.div>

            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400 text-sm font-bold tracking-widest uppercase mb-4">
                World Record Holder
              </div>
              <h2 className="font-sora text-3xl lg:text-5xl font-bold mb-4 text-white">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-yellow-400">3x</span> Guinness World Records
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl">
                Recognized globally for unprecedented achievements in student mass participation, innovative robotics assembly, and continuous reading marathons. We set benchmarks the world follows.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Other Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
            >
              <stat.icon size={36} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="font-sora text-4xl lg:text-5xl font-bold text-white mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}