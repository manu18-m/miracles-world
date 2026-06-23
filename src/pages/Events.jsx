import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { CalendarDays, MapPin, Clock3, Trophy, Users, Award, BookOpen, Cpu , Music, Target, Rocket, Star, ArrowRight } from 'lucide-react';

// --- Reusable Animated Counter for Countdown ---
const AnimatedCounter = ({ from = 0, to, duration = 1.5 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (to - from) + from);
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  // Ensure leading zero
  const displayCount = String(count).padStart(2, '0');
  
  return <>{displayCount}</>;
};


// --- Reusable Particle Component for Background ---
const FloatingParticles = ({ count = 20, color = 'rgba(59, 130, 246, 0.3)' }) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: Math.random() * 6 + 2 + 'px',
            height: Math.random() * 6 + 2 + 'px',
            background: color,
            filter: `blur(${Math.random() * 2}px)`,
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.1,
          }}
          animate={{
            y: [null, Math.random() * -100 - 50, null],
            opacity: [null, 0.6, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

// --- Main Events Page Component ---
const Events = () => {
  // --- Countdown Logic ---
  const targetDate = new Date('2026-12-20T10:00:00'); 
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);


  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const staggerContainer = {

hidden: {},

visible: {

transition: {

staggerChildren: 0.15

}

}

};

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const titleVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  // --- Sample Event Data ---
  const upcomingEvents = [
    { id: 1, title: 'Annual Day 2026', date: '20 Dec 2026', time: '10:00 AM', location: 'Main Auditorium', desc: 'A grand celebration showcasing student talents, performances, and artistic expressions.', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop', icon: <Music /> },
    { id: 2, title: 'Science & Innovation Fair', date: '15 Aug 2026', time: '09:00 AM', location: 'Robotics Lab', desc: 'Explore innovative projects and discoveries from our budding scientists.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', icon: <Rocket /> },
    { id: 3, title: 'Sports Meet 2027', date: '10 Jan 2027', time: '08:00 AM', location: 'School Grounds', desc: 'Join us for a day of sporting spirit, teamwork, and athletic competition.', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop', icon: <Target /> },
    { id: 4, title: 'Guinness World Record Celebration', date: '28 Feb 2027', time: '11:00 AM', location: 'Miracles Arena', desc: 'A momentous celebration of our historic achievement with special guests.', img: 'https://images.unsplash.com/photo-1496291851122-37ac3f4f2207?q=80&w=800&auto=format&fit=crop', icon: <Star /> },
  ];

  const pastEvents = [
    { year: 2026, title: 'Independence Day Celebration', desc: 'Patriotic performances, parade, and flag hoisting on the main campus.', icon: <Users /> },
    { year: 2025, title: 'Regional Robotics Championship', desc: 'Scholars Miracle World team secured the first place with innovative robotic design.', icon: <Cpu/> },
    { year: 2025, title: 'Cultural Fest 2025', desc: 'An evening of diverse cultural music, dance, and theater from around the world.', icon: <Music /> },
    { year: 2024, title: 'Olympiad Award Ceremony', desc: 'Recognizing academic excellence in Science and Mathematics Olympiads.', icon: <Award /> },
    { year: 2024, title: 'Historic Guinness World Record', desc: 'Achieved a record for the largest collective science experiment by students.', icon: <Star /> },
  ];

  const photos = [
    'https://images.unsplash.com/photo-1496291851122-37ac3f4f2207?q=80&w=600&auto=format&fit=crop', // Performance
    'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop', // Science fair
    'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop', // Sports
    'https://images.unsplash.com/photo-1460518451285-84b6214ed036?q=80&w=600&auto=format&fit=crop', // Cultural
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop', // Celebration
    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop', // Library activity
  ];


  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans overflow-hidden">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-4 overflow-hidden pt-24">
        {/* Cinematic Background with Gradient and Blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic Stage Background" 
            className="w-full h-full object-cover opacity-40 blur-[1px]"
          />
          <div className="absolute inset-0 bg-slate-950 opacity-90" />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950 opacity-80" />
        </div>

        {/* Floating Particles */}
        <FloatingParticles count={25} color="rgba(59, 130, 246, 0.4)" />

        {/* Content */}
        <motion.div 
          className="relative z-10 text-center max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="font-bold text-5xl md:text-7xl lg:text-8xl leading-tight tracking-tight mb-6 select-none bg-linear-to-r from-white via-slate-300 to-white bg-clip-text text-transparent"
            variants={titleVariants}
            animate="animate"
          >
            Events & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Celebrations</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium"
            variants={itemVariants}
          >
            Experience the vibrant life of Scholars Miracle World through our academic, cultural and sporting events.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 z-10 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <Clock3 className="text-white/40" size={36} strokeWidth={1}/>
        </motion.div>
      </section>

      {/* --- UPCOMING EVENTS --- */}
      <section className="py-24 px-4 bg-slate-950 border-y border-white/5 relative">
        <div className="absolute -top-48 left-0 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-350uto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 className="text-center font-bold text-5xl md:text-6xl text-white mb-16 tracking-tight" variants={itemVariants}>
              Upcoming <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">Highlights</span>
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
            >
              {upcomingEvents.map((event, idx) => (
                <motion.div 
                  key={event.id}
                  className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex flex-col backdrop-blur-md cursor-pointer shadow-lg"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.4 } }}
                >
                  {/* Floating Glow on Hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_60px_-10px_rgba(59,130,246,0.3)] pointer-events-none z-0" />

                  {/* Image */}
                  <div className="relative aspect-16/10verflow-hidden rounded-t-3xl z-10">
                    <img src={event.img} alt={event.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"/>
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 p-3 bg-white/10 backdrop-blur-lg rounded-2xl text-blue-500">
                      {React.cloneElement(event.icon, { size: 28, strokeWidth: 1.5 })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col growtive z-10">
                    <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-5 font-medium">
                      <span className="flex items-center gap-1.5"><CalendarDays size={18} className="text-purple-500"/> {event.date}</span>
                      <span className="flex items-center gap-1.5"><Clock3 size={18} className="text-purple-500"/> {event.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={18} className="text-purple-500"/> {event.location}</span>
                    </div>
                    <h3 className="font-bold text-2xl text-white mb-3 group-hover:text-blue-500 transition-colors">{event.title}</h3>
                    <p className="text-slate-400 mb-8 grow">{event.desc}</p>
                    <motion.button 
                      className="w-full mt-auto bg-linear-to-rrom-blue-600 to-purple-600 text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-inner group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Register Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- COUNTDOWN SECTION --- */}
      <section className="py-28 px-4 bg-black border-b border-white/5 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-400/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-300 mx-auto text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 className="font-bold text-5xl md:text-6xl text-white mb-16 tracking-tight" variants={itemVariants}>
              Next Major <span className="text-yellow-400">Celebration</span>
            </motion.h2>

            <motion.div className="relative p-12 md:p-16 rounded-[40px] bg-slate-950/40 border border-white/5 backdrop-blur-xl shadow-inner grid grid-cols-2 sm:grid-cols-4 gap-8" variants={itemVariants}>
              <FloatingParticles count={15} color="rgba(245, 158, 11, 0.3)" />
              
              <div className="absolute inset-0 bg-slate-950 opacity-70 rounded-[40px] z-0" />
              
              {[
                { label: 'Days', value: timeLeft.days, color: 'text-yellow-400' },
                { label: 'Hours', value: timeLeft.hours, color: 'text-blue-500' },
                { label: 'Minutes', value: timeLeft.minutes, color: 'text-purple-500' },
                { label: 'Seconds', value: timeLeft.seconds, color: 'text-yellow-400' },
              ].map((time, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center justify-center p-6 bg-slate-950/40 rounded-3xl border border-white/5 shadow-lg">
                  <div className={`font-mono font-black text-7xl md:text-9xl tracking-tighter ${time.color}`}>
                    {idx < 3 ? String(time.value).padStart(2, '0') : <AnimatedCounter to={time.value} duration={0.8} /> }
                  </div>
                  <div className="font-semibold text-lg text-slate-300 uppercase tracking-widest mt-3">{time.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.p className="text-3xl text-white mt-12 font-semibold tracking-tight" variants={itemVariants}>
              Annual Day 2026: <span className='text-yellow-400'>20 Dec</span>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- EVENT TIMELINE --- */}
      <section className="py-28 px-4 bg-slate-950 border-b border-white/5 relative">
        <div className="absolute right-0 top-1/2 w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-250uto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 className="text-center font-bold text-5xl md:text-6xl text-white mb-20 tracking-tight" variants={itemVariants}>
              Legacy of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Excellence</span>
            </motion.h2>

            <div className="relative">
              {/* Center Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5g-white/10 md:-translate-x-1/2 z-0" />

              {pastEvents.map((event, idx) => (
                <motion.div 
                  key={idx}
                  className={`relative flex items-center mb-16 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.6)] border-4 border-slate-950 md:-translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-slate-950"/>
                  </div>
                  
                  {/* Content Box */}
                  <div className={`w-full ml-12 md:ml-0 md:w-[45%] p-8 rounded-3xl bg-white/2 border border-white/5 backdrop-blur-md relative ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="absolute top-8 -left-4 md:left-auto md:-right-4 transform md:rotate-180 text-white/5">
                      {idx % 2 === 0 && <Clock3 className="hidden md:block" size={32} strokeWidth={1}/> }
                      {idx % 2 !== 0 && <Clock3 size={32} strokeWidth={1}/> }
                    </div>
                    
                    <div className={`mb-6 text-yellow-400 font-mono font-bold text-xl tracking-wider ${idx % 2 === 0 ? 'md:justify-end' : ''} flex items-center gap-3`}>
                      {idx % 2 !== 0 && <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">{React.cloneElement(event.icon, { size: 22, strokeWidth: 1.5 })}</div> }
                      {event.year}
                      {idx % 2 === 0 && <div className="hidden md:flex p-2.5 bg-blue-500/10 rounded-xl text-blue-500">{React.cloneElement(event.icon, { size: 22, strokeWidth: 1.5 })}</div> }
                    </div>
                    <h4 className="font-bold text-2xl text-white mb-3 tracking-tight">{event.title}</h4>
                    <p className="text-slate-400 text-base leading-relaxed">{event.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- PHOTO HIGHLIGHTS --- */}
      <section className="py-28 px-4 bg-black border-b border-white/5 relative">
        <div className="max-w-350 mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 className="text-center font-bold text-5xl md:text-6xl text-white mb-20 tracking-tight" variants={itemVariants}>
              Vibrant <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Visions</span>
            </motion.h2>

            <motion.div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8" variants={staggerContainer}>
              {photos.map((src, idx) => (
                <motion.div 
                  key={idx}
                  className="relative rounded-3xl overflow-hidden cursor-pointer group break-inside-avoid border border-white/5 shadow-lg"
                  variants={itemVariants}
                >
                  <img src={src} alt={`School Activity Highlight ${idx+1}`} className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"/>
                  <div className="absolute inset-0 bg-slate-950 opacity-0 group-hover:opacity-70 transition-opacity duration-500"/>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Users className="text-white/70" size={48} strokeWidth={1}/>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- REGISTER CTA --- */}
      <section className="relative py-32 lg:py-48 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/20 via-slate-950 to-slate-950 opacity-80" />
        <FloatingParticles count={20} color="rgba(168, 85, 247, 0.3)" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={containerVariants}
          >
            <motion.h2 className="font-bold text-5xl lg:text-7xl mb-6 text-white tracking-tight leading-none" variants={itemVariants}>
              Be Part of the <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Experience</span>
            </motion.h2>
            <motion.p className="text-2xl text-slate-300 mb-12 font-medium" variants={itemVariants}>
              Register for upcoming events or take a virtual tour to explore our world-class campus and facilities.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-6" variants={itemVariants}>
              <motion.button className="relative group w-full sm:w-auto px-10 py-5 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-white font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 duration-200">
                Register for Events
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(37,99,235,0.4)] pointer-events-none" />
              </motion.button>
              
              <motion.button className="w-full sm:w-auto px-10 py-5 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg flex items-center justify-center gap-2 shadow-inner group transition-shadow hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] active:scale-95 duration-200">
                Explore Campus <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Events;