import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, Globe, Library, Award, 
  Calculator, FlaskConical, Monitor, Languages, Briefcase, Map, 
  Cpu, Activity, Users, Lightbulb, Microscope, GraduationCap, 
  CheckCircle2, ArrowRight, Download, Atom
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
const FloatingParticles = ({ count = 20 }) => (
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

export default function Academics() {
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
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/50 z-10" />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/70 to-slate-950 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop" 
            alt="Academic Excellence"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div className="w-[60vw] h-[60vw] bg-purple-500/15 rounded-full blur-[150px]" />
          <FloatingParticles count={30} />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sora text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            Academic <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            Empowering students through innovation, knowledge, and world-class education.
          </motion.p>
        </div>
      </section>

      {/* 2. CURRICULUM */}
      <section id="curriculum" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="font-sora text-4xl lg:text-5xl font-bold"
            >
              Curriculum Offered
            </motion.h2>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: BookOpen, title: "CBSE", desc: "A robust national curriculum focusing on holistic development and competitive readiness." },
              { icon: Award, title: "State Board", desc: "Regional curriculum balanced with modern teaching methodologies and core concepts." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} variants={fadeUp}
                className="group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-colors" />
                <item.icon size={40} className="text-blue-500 mb-6" />
                <h3 className="font-sora text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. GRADES OFFERED */}
      <section className="py-24 lg:py-32 bg-black/40 border-y border-white/5 relative">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="font-sora text-4xl lg:text-5xl font-bold">Grades <span className="text-purple-500">Offered</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {["Pre Primary", "Primary School", "Middle School", "Secondary School", "Senior Secondary"].map((grade, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-white/2 border border-white/10 text-center flex flex-col items-center justify-center relative overflow-hidden group hover:border-purple-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4 text-purple-500 font-bold group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  {idx + 1}
                </div>
                <h4 className="font-sora font-bold text-lg">{grade}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEPARTMENTS */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-sora text-4xl lg:text-5xl font-bold">
              Academic Departments
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Calculator, title: "Mathematics", desc: "Fostering analytical thinking and problem-solving skills." },
              { icon: Atom, title: "Science", desc: "Exploring the universe through Physics, Chemistry, and Biology." },
              { icon: Monitor, title: "Computer Science", desc: "Coding, algorithms, and software development fundamentals." },
              { icon: Languages, title: "Languages", desc: "Mastering English, regional languages, and foreign linguistics." },
              { icon: Briefcase, title: "Commerce", desc: "Economics, accountancy, and modern business studies." },
              { icon: Map, title: "Social Studies", desc: "History, geography, and global political frameworks." }
            ].map((dept, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="p-4 rounded-xl bg-slate-950 border border-white/5 group-hover:border-blue-500/50 transition-colors">
                  <dept.icon size={28} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="font-sora font-bold text-xl mb-2 text-white group-hover:text-blue-500 transition-colors">{dept.title}</h4>
                  <p className="text-sm text-slate-400">{dept.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEACHING METHODOLOGY & SMART CLASSROOMS */}
      <section id="smart-classrooms" className="py-24 lg:py-32 bg-black border-y border-white/5 relative">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-sora text-4xl lg:text-5xl font-bold mb-6">Teaching <span className="text-blue-500">Methodology</span></h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                We blend traditional wisdom with modern innovation. Our pedagogy is designed to nurture critical thinking, creativity, and practical application.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Monitor, title: "Smart Learning" },
                  { icon: Activity, title: "Project Based" },
                  { icon: Cpu, title: "AI & Robotics" },
                  { icon: Users, title: "Experiential" }
                ].map((method, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                    <method.icon size={20} className="text-purple-500" />
                    <span className="font-sora font-bold text-sm">{method.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop" alt="Smart Classroom" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-sora text-2xl font-bold mb-2">Smart Classrooms</h3>
                <p className="text-slate-300">Interactive digital boards and immersive learning environments.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. LABORATORIES */}
      <section id="laboratories" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-sora text-4xl lg:text-5xl font-bold">
              State-of-the-art <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Laboratories</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: Atom, title: "Physics Lab" },
              { icon: FlaskConical, title: "Chemistry Lab" },
              { icon: Microscope, title: "Biology Lab" },
              { icon: Monitor, title: "Computer Lab" },
              { icon: Cpu, title: "Robotics Lab" }
            ].map((lab, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative p-8 rounded-2xl bg-white/2er border-white/10 text-center hover:bg-white/6 transition-all hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500/20 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <lab.icon size={40} className="mx-auto mb-4 text-slate-400 group-hover:text-white transition-colors" />
                  <h4 className="font-sora font-bold">{lab.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EXAMINATION SYSTEM */}
      <section id="examination-system" className="py-24 lg:py-32 bg-black border-y border-white/5 relative">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="font-sora text-4xl lg:text-5xl font-bold">
              Continuous Assessment
            </motion.h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {["Unit Tests", "Quarterly Exams", "Half Yearly", "Pre Finals", "Final Exams"].map((exam, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-full h-0.5 bg-blue-500 scale-x-0 origin-left transition-transform duration-500 delay-300" />
                  <div className="w-16 h-16 rounded-full bg-slate-950 border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center mb-6 relative z-10">
                    <CheckCircle2 size={24} className="text-blue-500" />
                  </div>
                  <h4 className="font-sora font-bold text-lg">{exam}</h4>
                  {/* Down arrow for mobile layout */}
                  {idx !== 4 && <ArrowRight size={24} className="md:hidden text-white/20 mt-6 rotate-90" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. ACADEMIC ACHIEVEMENTS */}
      <section id="results" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div id="olympiads" className="absolute -top-24" />

<div id="student-excellence" className="absolute -top-24" />  
          <div className="text-center mb-16">
            <h2 className="font-sora text-4xl lg:text-5xl font-bold">Academic <span className="text-yellow-400">Achievements</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { count: 100, suffix: "%", label: "Board Results pass rate" },
              { count: 250, suffix: "+", label: "Olympiad Medals" },
              { count: 500, suffix: "+", label: "Top University Placements" },
              { count: 50, suffix: "+", label: "National Awards" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 text-center"
              >
                <h3 className="font-sora text-5xl font-bold text-white mb-2">
                  <Counter end={stat.count} suffix={stat.suffix} />
                </h3>
                <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-500/20 via-slate-950 to-slate-950 opacity-80" />
        <FloatingParticles count={15} />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-sora text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
          >
            Discover Excellence at Miracles World
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-slate-300 mb-12 font-medium"
          >
            Begin your journey of academic brilliance today.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="relative group w-full sm:w-auto px-10 py-5 rounded-full bg-white text-slate-950 font-sora font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center justify-center gap-2">Admissions Open <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>

            <button className="relative group w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-sora font-bold text-lg transition-transform hover:scale-105 active:scale-95 hover:bg-white/10 hover:border-white/40">
              <span className="flex items-center justify-center gap-2">Download Brochure <Download size={20} /></span>
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}