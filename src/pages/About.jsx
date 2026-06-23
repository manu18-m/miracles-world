import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Globe, Quote, Award, ShieldCheck, 
  Lightbulb, TrendingUp, Palette, BookOpen, 
  Microscope, Monitor, Bus, Coffee, Trophy, Medal, ArrowRight 
} from 'lucide-react';

// --- Utility: Animated Counter ---
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

// --- Utility: Floating Particles ---
const FloatingParticles = ({ count = 15 }) => (
  <>
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full blur-[2px]"
        initial={{
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.3 + 0.1
        }}
        animate={{
          y: [null, Math.random() * -100 - 50],
          opacity: [null, 0.6, 0]
        }}
        transition={{
          duration: Math.random() * 10 + 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </>
);

// --- Main Page Component ---
export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="bg-slate-950 min-h-screen text-white font-jakarta overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/40 z-10" />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/60 to-slate-950 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop" 
            alt="Scholars Miracle World Campus"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        {/* Ambient Glow & Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div className="w-[60vw] h-[60vw] bg-blue-500/10 rounded-full blur-[150px]" />
          <FloatingParticles count={25} />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sora text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            About <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Scholars Miracle World</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            Shaping minds, inspiring innovation, and creating leaders for tomorrow.
          </motion.p>
        </div>
      </section>

      {/* 2. SCHOOL STORY */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <h2 className="font-sora text-4xl lg:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  Founded with a vision to redefine education, Scholars Miracle World stands as a premier institution committed to academic excellence, innovation, leadership, and holistic education.
                </p>
                <p>
                  We believe that every child holds a miracle within. Our environment is meticulously designed to nurture that potential, combining world-class infrastructure with an internationally acclaimed curriculum.
                </p>
                <p>
                  From setting Guinness World Records to launching student-led innovations, we don't just prepare students for the future—we empower them to create it.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-4/3">
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" alt="Students collaborating" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. VISION & MISSION */}
      <section className="py-12 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="group relative p-10 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-colors" />
              <Target size={48} className="text-blue-500 mb-8" />
              <h3 className="font-sora text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                "To inspire every student to achieve excellence and become responsible global citizens."
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
              className="group relative p-10 lg:p-12 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] group-hover:bg-purple-500/20 transition-colors" />
              <Globe size={48} className="text-purple-500 mb-8" />
              <h3 className="font-sora text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                "To provide world-class education that nurtures creativity, innovation, leadership, and lifelong learning."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CHAIRMAN MESSAGE */}
      <section className="py-24 lg:py-32 relative border-y border-white/5 bg-black/40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
              className="w-full lg:w-1/3"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-3/4 border border-white/10">
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" alt="Chairman" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="w-full lg:w-2/3"
            >
              <Quote size={64} className="text-white/10 mb-8" />
              <h2 className="font-sora text-4xl lg:text-5xl font-bold mb-8">Message from the Chairman</h2>
              <p className="text-2xl text-slate-300 font-light leading-relaxed mb-10 italic">
                "Education is not merely about acquiring facts; it's about awakening the mind to its infinite possibilities. At Scholars Miracle World, we don't build schools, we build ecosystems of brilliance where the leaders of tomorrow find their voice today."
              </p>
              <div>
                <h4 className="font-sora font-bold text-2xl text-white">Mrs.Annapurna Devi</h4>
                <p className="text-blue-500 font-medium tracking-wide uppercase text-sm mt-2">Chairman & Founder</p>
                <div className="mt-6 font-sora italic text-4xl opacity-50 text-white">Annapurna Devi</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="font-sora text-4xl lg:text-5xl font-bold">Journey of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Excellence</span></h2>
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

            {[
              { year: "2010", title: "School Founded", desc: "Scholars Miracle World opens its doors with 500 students and a vision for the future." },
              { year: "2015", title: "Expansion of Campus", desc: "Inauguration of the advanced sports complex and Olympic-sized swimming pool." },
              { year: "2020", title: "Technology & Smart Classrooms", desc: "Complete digitization of the campus with Apple-integrated learning environments." },
              { year: "2024", title: "Guinness World Records", desc: "Achieved 3 distinct Guinness World Records for student innovation and collaboration." },
              { year: "2026", title: "Leading International School", desc: "Continuing our journey as one of the region's leading institutions, committed to excellence and innovation." }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center justify-between md:justify-normal w-full mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] border-4 border-slate-950 md:-translate-x-1/2 z-10" />
                
                {/* Content Box */}
                <div className={`w-full ml-12 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                    <span className="font-sora text-3xl font-bold text-yellow-400 mb-2 block">{item.year}</span>
                    <h4 className="font-sora text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CORE VALUES */}
      <section className="py-24 lg:py-32 bg-black/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora text-4xl lg:text-5xl font-bold">Our Core Values</h2>
          </div>
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Trophy, title: "Excellence", desc: "Striving for the highest standards in academics and life." },
              { icon: ShieldCheck, title: "Integrity", desc: "Building character through honesty and strong moral principles." },
              { icon: Lightbulb, title: "Innovation", desc: "Encouraging original thinking and creative problem-solving." },
              { icon: TrendingUp, title: "Leadership", desc: "Empowering students to take initiative and guide others." },
              { icon: Palette, title: "Creativity", desc: "Fostering artistic expression and out-of-the-box thinking." },
              { icon: Globe, title: "Global Citizenship", desc: "Cultivating respect and understanding across cultures." }
            ].map((val, idx) => (
              <motion.div 
                key={idx} variants={fadeUp}
                className="p-8 rounded-3xl bg-white/2er border-white/5 hover:border-blue-500/30 hover:bg-white/5 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                  <val.icon size={28} className="text-blue-500" />
                </div>
                <h4 className="font-sora text-2xl font-bold text-white mb-3">{val.title}</h4>
                <p className="text-slate-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. INFRASTRUCTURE */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-sora text-4xl lg:text-5xl font-bold mb-4">World-Class <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">Infrastructure</span></h2>
            <p className="text-slate-400">Environments designed to maximize potential.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop", title: "Smart Classrooms", icon: Monitor },
              { img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop", title: "Library", icon: BookOpen },
              { img: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop", title: "Laboratories", icon: Microscope },
              { img: "https://images.unsplash.com/photo-1574629810360-7efbb1b240eb?q=80&w=800&auto=format&fit=crop", title: "Sports Complex", icon: Trophy },
              { img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop", title: "Transportation", icon: Bus },
              { img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop", title: "Cafeteria", icon: Coffee }
            ].map((infra, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-80 rounded-3xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent z-10" />
                <img src={infra.img} alt={infra.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                
                <div className="absolute bottom-0 left-0 p-8 z-20 flex items-center gap-4">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white">
                    <infra.icon size={24} />
                  </div>
                  <h4 className="font-sora text-2xl font-bold text-white">{infra.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AWARDS & RECOGNITION */}
      <section className="py-24 lg:py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-sora text-4xl lg:text-5xl font-bold">Awards & <span className="text-yellow-400">Recognition</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, count: 150, suffix: "+", label: "Academic Awards" },
              { icon: Medal, count: 250, suffix: "+", label: "Olympiad Medals" },
              { icon: Trophy, count: 100, suffix: "+", label: "Sports Championships" },
              { icon: Globe, count: 3, suffix: "", label: "Guinness World Records", highlight: true }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-3xl backdrop-blur-md border border-white/10 text-center ${stat.highlight ? 'bg-yellow-400/10 border-yellow-400/30' : 'bg-white/5'}`}
              >
                <stat.icon size={40} className={`mx-auto mb-6 ${stat.highlight ? 'text-yellow-400' : 'text-blue-500'}`} />
                <h3 className="font-sora text-5xl font-bold text-white mb-2">
                  <Counter end={stat.count} suffix={stat.suffix} />
                </h3>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/20 via-slate-950 to-slate-950 opacity-80" />
        <FloatingParticles count={20} />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-sora text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
          >
            Join the Scholars Miracle World Family
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-slate-300 mb-12 font-medium"
          >
            Take the first step towards a future of excellence without limits.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="relative group w-full sm:w-auto px-10 py-5 rounded-full bg-white text-slate-950 font-sora font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center justify-center gap-2">Apply Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>

            <button className="relative group w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-sora font-bold text-lg transition-transform hover:scale-105 active:scale-95 hover:bg-white/10 hover:border-white/40">
              Explore Campus
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}