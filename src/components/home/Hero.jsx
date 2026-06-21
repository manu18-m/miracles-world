import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Users, Award, BookOpenText, MousePointer, Sparkles, ArrowRight } from 'lucide-react';

// IMPORT YOUR ASSET HERE
import heroBg from "../../assets/hero.jpg";

// --- Utility: Animated Count Up Hook ---
const useCountUp = (end, duration = 2) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime;
    let animationFrameId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / (duration * 1000), 1);
      
      const easedCount = Math.floor(progressPercent * end);
      setCount(easedCount);

      if (progressPercent < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return end < 1 ? 0 : count;
};

// --- Sub-Component: Statistic Counter Card ---
const StatCard = ({ icon: Icon, endValue, label, isLast = false, isGWR = false }) => {
  const currentCount = useCountUp(endValue);
  const displayCount = isGWR && currentCount === endValue ? endValue : (endValue >= 10 && currentCount === endValue ? `${endValue}+` : currentCount);

  return (
    <motion.div
      className={`relative group px-6 py-8 border-b md:border-b-0 border-r-0 md:border-r border-neutral-800 backdrop-blur-md bg-black/40 ${isLast ? 'md:border-r-0' : ''}`}
      whileHover={{ scale: 1.05, translateY: -10, transition: { duration: 0.3 } }}
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur-xl z-0" />
      
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <Icon className={`w-8 h-8 ${isGWR ? 'text-amber-400' : 'text-blue-400'}`} />
        <div>
          <span className="font-sora font-extrabold text-4xl lg:text-5xl tracking-tighter text-white">
            {displayCount}
          </span>
          <p className="font-sora font-medium text-xs lg:text-sm text-neutral-400 mt-1 uppercase tracking-wider">
            {label}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// --- Sub-Component: Floating Particles ---
const FloatingParticle = ({ size, initialX, initialY, duration, delay, parallaxFactor }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, parallaxFactor]);

  return (
    <motion.div
      style={{ y }}
      className="absolute rounded-full bg-blue-500/30 blur-sm z-0 pointer-events-none"
      initial={{ x: initialX, y: initialY, scale: 0 }}
      animate={{ scale: size, y: [initialY, initialY - 100, initialY] }}
      transition={{ 
        delay: delay,
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        y: { repeat: Infinity, duration: duration, ease: "easeInOut" }
       }}
    />
  );
};

// --- Main Component: CinematicHero ---
const CinematicHero = () => {
  const heroRef = useRef(null);
  const { scrollY } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const bgY = useTransform(scrollY, [0, 1000], ['0%', '15%']); // Smooth vertical parallax
  const contentY = useTransform(scrollY, [0, 800], [0, 150]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: i => ({
      y: 0, opacity: 1, transition: { delay: 0.1 + i * 0.05, duration: 0.6, ease: "easeOut" }
    })
  };

  const headline = "Miracles World";
  const subHeading = "Excellence Beyond Limits";

  const statistics = [
    { icon: Award, endValue: 20, label: "Years of Excellence" },
    { icon: Users, endValue: 5000, label: "Students" },
    { icon: BookOpenText, endValue: 100, label: "Faculty" },
    { icon: Trophy, endValue: 3, label: "Guinness Records", isGWR: true }
  ];

  return (
    <motion.section 
      ref={heroRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white px-4 md:px-12 lg:px-24 pt-32 pb-24 lg:py-0"
    >
      {/* 1. IMMERSIVE CINEMATIC BACKGROUND (Parallax + Ken Burns Zoom) */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none bg-black"
        style={{ y: bgY, willChange: 'transform' }} // Scroll Parallax Effect
      >
        <motion.div 
          className="absolute inset-[-5%] w-[110%] h-[110%] bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${heroBg})` }}
          // Slow continuous Ken Burns zoom (25 seconds, infinitely reversing)
          animate={{ scale: [1, 1.08] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
      </motion.div>
      
      {/* 2. PREMIUM CINEMATIC OVERLAYS */}
      {/* Base darkening to ensure image quality is visible but text pops */}
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />
      
      {/* Soft Vignette (Darkens edges to draw focus to the center) */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
      
      {/* Vertical Gradients (Smooth blending with navbar at top, and stats/next section at bottom) */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/80 via-transparent to-black pointer-events-none" />
      
      {/* Ambient Glow (Blue & Purple Glassmorphism Lighting) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none z-10 mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none z-10 mix-blend-screen" />

      {/* 3. FLOATING ELEMENTS & PARTICLES */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle
          key={i}
          size={Math.random() * 4 + 1}
          initialX={`${Math.random() * 100}%`}
          initialY={`${Math.random() * 100}%`}
          duration={Math.random() * 8 + 5}
          delay={Math.random() * 2}
          parallaxFactor={Math.random() * 80 + 20}
        />
      ))}
      <Sparkles className="absolute top-1/4 left-1/4 text-purple-400/10 w-48 h-48 blur-lg pointer-events-none select-none" />
      <Sparkles className="absolute bottom-1/4 right-1/4 text-blue-400/10 w-48 h-48 blur-lg pointer-events-none select-none" />

      {/* 4. MAIN CONTENT CONTAINER (Parallaxed) */}
      <motion.div 
        style={{ y: contentY, opacity: contentOpacity, willChange: 'transform, opacity' }} 
        className="relative z-30 flex flex-col items-center space-y-12 lg:space-y-16 lg:mt-[-10vh] w-full"
      >
        <div className="flex flex-col items-center space-y-6 text-center">
            {/* HEADLINE */}
            <motion.h1 
                className="font-sora font-extrabold text-5xl md:text-7xl lg:text-9xl tracking-tighter leading-none select-none pointer-events-none flex flex-wrap justify-center"
            >
                {headline.split('').map((letter, i) => (
                    <motion.span
                        key={i}
                        variants={letterVariants}
                        custom={i}
                        className="bg-clip-text text-transparent bg-linear-to-r from-white via-white to-neutral-400"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.h1>

            {/* SUBHEADING */}
            <motion.p 
                className="font-sora font-medium text-base md:text-xl text-neutral-300 max-w-xl mx-auto opacity-90 select-none pointer-events-none flex overflow-hidden h-[1.3em]"
            >
                {subHeading.split('').map((letter, i) => (
                    <motion.span
                        key={i}
                        variants={letterVariants}
                        custom={i + headline.length}
                        className="relative block"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.p>
        </div>

        {/* 5. CTA BUTTONS */}
        <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-4"
        >
            <motion.button
                className="relative group w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 font-sora font-bold text-base lg:text-lg rounded-full backdrop-blur-md bg-white text-black transition-all duration-300 outline-none"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.96 }}
            >
                <div className="absolute inset-0 bg-blue-500 rounded-full group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 z-0" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Campus
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
            </motion.button>

            <motion.button
                className="relative group w-full sm:w-auto px-8 lg:px-12 py-4 lg:py-5 font-sora font-bold text-base lg:text-lg rounded-full border border-neutral-700 bg-black/50 hover:bg-black transition-colors duration-300 outline-none"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
            >
                 <div className="absolute -inset-px rounded-full bg-linear-to-r from-blue-700/60 to-purple-700/60 blur-lg transition-all duration-300 opacity-0 group-hover:opacity-100 z-0" />
                <span className="relative z-10 text-white block text-center">Admissions Open</span>
            </motion.button>
        </motion.div>

        {/* 6. GUINNESS SHOWCASE (Responsive: Block on mobile, Absolute on Desktop) */}
        <motion.div 
          variants={itemVariants}
          className="relative lg:absolute mt-8 lg:mt-0 lg:top-[30vh] lg:right-[5vw] z-50 w-full max-w-[320px] lg:max-w-none px-4 lg:px-0"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl backdrop-blur-2xl bg-black/40 border border-neutral-800 shadow-2xl flex flex-col items-center text-center space-y-4 group cursor-pointer"
          >
              {/* Prestigious Overlay */}
              <div className="absolute -inset-px rounded-2xl bg-linear-to-r from-amber-700/50 to-orange-800/50 blur-[80px] pointer-events-none" />

              <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 lg:w-10 lg:h-10 text-amber-400 group-hover:scale-110 transition-transform" />
                  <div>
                      <h4 className="font-sora font-bold text-lg lg:text-xl text-amber-100 tracking-tight leading-tight">Guinness World Records</h4>
                  </div>
              </div>
              
              <div className="bg-amber-400 px-8 py-2 rounded-full shadow-lg">
                  <span className="font-sora font-extrabold text-3xl lg:text-4xl tracking-tighter text-black">3</span>
              </div>
              <p className="font-sora font-semibold text-[10px] lg:text-xs text-black/60 uppercase tracking-widest bg-amber-400/80 px-4 py-1 rounded-full">World Record Holder</p>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* 7. STATISTICS SECTION */}
      <motion.div 
        variants={itemVariants}
        className="relative z-40 mt-16 lg:mt-[-5vh] max-w-300 w-full grid grid-cols-2 md:grid-cols-4 border border-neutral-800 rounded-xl overflow-hidden bg-black/20"
      >
        {statistics.map((stat, index) => (
          <StatCard 
            key={index}
            {...stat}
            isLast={index === statistics.length - 1}
          />
        ))}
      </motion.div>

      {/* 8. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: [0, 0, 10, 10] }}
        transition={{ delay: 1.8, duration: 4, repeat: Infinity, times: [0, 0.3, 0.7, 1] }}
        className="hidden md:flex absolute bottom-8 left-1/2 translate-x-[-50%] z-40 flex-col items-center space-y-2 pointer-events-none select-none"
      >
        <MousePointer className="w-5 h-5 text-neutral-500" />
        <p className="font-sora font-semibold text-[10px] text-neutral-500 uppercase tracking-widest">Scroll to Explore</p>
      </motion.div>

    </motion.section>
  );
};

export default CinematicHero;