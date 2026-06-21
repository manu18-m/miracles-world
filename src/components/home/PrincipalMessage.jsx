import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

export default function PrincipalMessage() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-[-10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image & Floating Cards */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 lg:aspect-square border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-10" />
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                alt="Principal of Miracles World" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Glass Card 1 */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 lg:-right-12 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/20 text-blue-500 rounded-xl">
                  <Award size={28} />
                </div>
                <div>
                  <h4 className="font-sora font-bold text-2xl">20+</h4>
                  <p className="text-sm text-slate-400">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="flex flex-col space-y-8"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 text-yellow-400">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-bold tracking-widest uppercase">Message from the Chairman</span>
            </motion.div>
            
             <motion.h2  variants={fadeUp}  className="font-sora text-4xl lg:text-5xl font-bold leading-tight text-white">
              Shaping the leaders of tomorrow, <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">today.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                At Miracles World, education transcends the boundaries of traditional classrooms. We believe in nurturing not just academic brilliance, but the emotional and social intelligence required to thrive in a rapidly evolving world.
              </p>
              <p>
                Our commitment to excellence is reflected in everything we do—from our Guinness World Record-holding programs to our state-of-the-art facilities. We don't just teach; we ignite curiosity and inspire greatness.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-8 border-t border-white/10">
              <h4 className="font-sora font-bold text-xl text-white">Mrs.Annapurna Devi</h4>
              <p className="text-slate-500 text-sm mt-1">Chairman & Founder, Miracles World</p>
              {/* Signature placeholder (Stylized font) */}
              <div className="mt-4 font-sora italic text-3xl opacity-50 text-blue-500">
                ~ Annapurna Devi
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}