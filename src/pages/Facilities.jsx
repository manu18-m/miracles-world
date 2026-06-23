import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Baby, Trophy, MonitorCheck, Beaker, LibraryBig, Bus, Utensils, HeartPulse, Sparkles, MoveRight } from 'lucide-react';

// strictly adhered colors
const colors = {
  bg: 'bg-slate-950',
  textMain: 'text-white',
  textMuted: 'text-slate-300',
  textDark: 'text-slate-400',
  primary: 'text-blue-500',
  secondary: 'text-purple-500',
  accent: 'text-yellow-400',
  border: 'border-white/10',
  glass: 'bg-white/5 backdrop-blur-xl',
};

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

// --- Data ---
const facilitiesData = [
  {
    icon: Baby,
    title: 'Playschool Zone',
    color: colors.primary,
    features: ['Electronic cars', 'Electronic bikes', 'Indoor play area', 'Safe learning environment', 'Interactive activities'],
  },
  {
    icon: Trophy,
    title: 'Play Arena',
    color: colors.accent,
    features: ['Cricket Ground', 'Football Field', 'Basketball Court', 'Outdoor sports activities'],
  },
  {
    icon: MonitorCheck,
    title: 'Smart Classrooms',
    color: colors.secondary,
    features: ['Digital Boards', 'Projectors', 'Interactive Learning', 'Comfortable Seating'],
  },
  {
    icon: Beaker,
    title: 'Science & Computer Labs',
    color: colors.primary,
    features: ['Physics Lab', 'Chemistry Lab', 'Biology Lab', 'Computer Lab'],
  },
  {
    icon: LibraryBig,
    title: 'Library',
    color: colors.accent,
    features: ['Thousands of books', 'Digital learning resources', 'Reading spaces'],
  },
  {
    icon: Bus,
    title: 'Transportation',
    color: colors.secondary,
    features: ['GPS-enabled buses', 'Safe pickup & drop'],
  },
  {
    icon: Utensils,
    title: 'Cafeteria',
    color: colors.primary,
    features: ['Hygienic food', 'Healthy meals'],
  },
  {
    icon: HeartPulse,
    title: 'Medical Room',
    color: colors.accent,
    features: ['First Aid', 'Emergency Care'],
  },
];

const statsData = [
  { value: 50, label: 'Smart Classrooms', suffix: '+' },
  { value: 10, label: 'Laboratories', suffix: '+' },
  { value: 5000, label: 'Books in Library', suffix: '+' },
  { value: 25, label: 'Sports Activities', suffix: '+' },
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop', title: 'Playschool Zone', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop', title: 'Cricket Arena', span: 'col-span-2 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop', title: 'Modern Classrooms', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=600&auto=format&fit=crop', title: 'Library Resource Center', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=600&auto=format&fit=crop', title: 'Advanced Computer Lab', span: 'col-span-1 row-span-2' },
  { url: 'https://images.unsplash.com/photo-1626241857906-8d6f903a7465?q=80&w=600&auto=format&fit=crop', title: 'School Bus Fleet', span: 'col-span-1 row-span-1' },
  { url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop', title: 'Biology Lab', span: 'col-span-1 row-span-1' },
];

// --- Helper Components ---

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            opacity: Math.random() * 0.5 + 0.2,
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            y: [null, Math.random() * -200 - 100 + "%"],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            },
          }}
        />
      ))}
    </div>
  );
};

const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = (totalMiliseconds / end);

      let timer = setInterval(() => {
        start += 1;
        // Adjust increment for larger numbers to maintain duration
        if (end > 1000) start += 19; 
        else if (end > 100) start += 2;

        setCount(start);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// --- Main Component ---
const Facilities = () => {
  return (
    <div className={`${colors.bg} ${colors.textMain} min-h-screen font-sans antialiased overflow-x-hidden`}>
      
      {/* 1. HERO SECTION */}
      <section className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden border-b ${colors.border}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0)_70%)]" />
        <FloatingParticles />
        
        <motion.div 
          className="container mx-auto px-6 text-center z-10"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className={`inline-flex items-center gap-2 ${colors.glass} px-4 py-1 rounded-full border ${colors.border} mb-6`}>
            <Sparkles className={`w-4 h-4 ${colors.accent}`} />
            <span className={`text-sm font-medium ${colors.accent}`}>Scholars Miracle World Campus</span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className={`text-5xl md:text-7xl font-extrabold tracking-tighter bg-linear-to-rrom-blue-500 via-white to-purple-500 bg-clip-text text-transparent mb-6`}
          >
            World-Class Facilities
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className={`text-xl md:text-2xl ${colors.textMuted} max-w-3xl mx-auto font-light leading-relaxed`}
          >
            Designed to inspire learning, creativity, sportsmanship and innovation in a safe and premium environment.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-950 to-transparent"></div>
      </section>

      {/* 2. FACILITIES GRID */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.1 }}
            variants={staggerContainer}
          >
            {facilitiesData.map((facility, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`${colors.glass} ${colors.border} p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden group border`}
              >
                {/* Spotlight effect */}
                <div className="absolute inset-0 bg-linear-to-brrom-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
                
                <div className="relative z-10 flex items-center gap-4">
                  <div className={`p-3 rounded-2xl bg-white/5 ${colors.border} border`}>
                    <facility.icon className={`w-8 h-8 ${facility.color}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white">{facility.title}</h3>
                </div>
                
                <ul className="relative z-10 space-y-3 grow">
                  {facility.features.map((feature, fIndex) => (
                    <li key={fIndex} className={`text-slate-300 flex items-center gap-3 font-light`}>
                      <div className={`w-1.5 h-1.5 rounded-full ${facility.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="absolute -bottom-5 -right-5 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <facility.icon className={`w-24 h-24 ${facility.color}`} strokeWidth={1} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CAMPUS STATISTICS */}
      <section className={`py-24 relative border-t border-b ${colors.border} bg-slate-900/50`}>
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.5 }}
            variants={staggerContainer}
          >
            {statsData.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="p-6">
                <p className="text-5xl md:text-6xl font-extrabold tracking-tighter mb-2">
                  <span className={index % 2 === 0 ? colors.primary : colors.secondary}>
                    <AnimatedCounter value={stat.value} />
                  </span>
                  <span className={`${colors.textMain}`}>
                    {stat.suffix}
                  </span>
                </p>
                <p className={`text-lg ${colors.textDark} font-medium uppercase tracking-wider`}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. IMAGE GALLERY (MASONRY) */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.1 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className={`text-sm font-semibold uppercase tracking-widest ${colors.primary} mb-3`}>
              Campus Glimpses
            </h2 >
            <p className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-5">
              Infrastructure in Action
            </p>
            <p className={`text-lg ${colors.textMuted} max-w-2xl mx-auto font-light`}>
              Explore our vibrant campus through a visual journey showcasing our state-of-the-art infrastructure.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 grid-flow-row-dense gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.05 }}
            variants={staggerContainer}
          >
            {galleryImages.map((img, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, zIndex: 1 }}
                className={`relative overflow-hidden rounded-3xl ${colors.border} border group ${img.span}`}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-trom-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-xl font-bold text-white tracking-tight">{img.title}</p>
                </div>
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className={`py-32 relative border-t ${colors.border} bg-slate-950`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(168,85,247,0.15)_0%,rgba(0,0,0,0)_60%)]" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, threshold: 0.5 }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white mb-8"
            >
              Experience Excellence at <br/> <span className={`bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent`}>Scholars Miracle World</span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className={`text-xl ${colors.textMuted} max-w-2xl mx-auto mb-12 font-light leading-relaxed`}
            >
              Take a virtual tour or schedule a visit to see our incredible facilities first-hand. Your journey to innovation begins here.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className={`group flex items-center gap-2 px-8 py-4 rounded-full ${colors.glass} ${colors.border} border text-white font-semibold transition-all hover:bg-white/10`}>
                Explore Campus
                <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="relative group">
                {/* Floating glow */}
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 anim-pulse-slow"></div>
                
                <button className="relative flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg transition-all transform active:scale-95">
                  Apply Now
                  <MoveRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* -- Footer spacer -- */}
      <footer className={`py-6 border-t ${colors.border} bg-slate-950`}>
        <p className={`text-sm ${colors.textDark}`}>© 2024 Scholars Miracle World. All rights reserved.</p>
      </footer>

      {/* Custom slow pulse animation for CTA */}
      <style>
{`

@keyframes pulse-slow {

0%,100% {

opacity:0.7;

filter: blur(10px);

}

50% {

opacity:1;

filter: blur(15px);

}

}

.anim-pulse-slow {

animation:

pulse-slow 4s

cubic-bezier(0.4,0,0.6,1)

infinite;

}

`}
</style>
    </div>
  );
};

export default Facilities;