import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, Award, ShieldCheck, Zap, User, Mail, Lock, BookOpenCheck, ListChecks, Hash, Sparkles } from 'lucide-react';

const PortalSignup = () => {
  const navigate = useNavigate();
  
  // Local state for required fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    className: '',
    section: '',
    rollNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Temporary temporary temporary Logic: onSubmit navigates to /portal/student
    // Add real firebase or API integration here in the future
    navigate('/portal/student');
  };

  // --- Animation Variants ---
  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const particleVariants = {
    animate: {
      y: [0, -50, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const cardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  // --- Particle Generation ---
  const particles = Array.from({ length: 20 }, (_, i) => {
    const size = Math.random() * 6 + 2;
    const initialY = Math.random() * 100 - 50;
    const speed = Math.random() * 5 + 3;
    const opacity = Math.random() * 0.3 + 0.1;
    const colorClass = Math.random() > 0.5 ? 'bg-blue-500' : 'bg-purple-500';

    return (
      <motion.div
        key={i}
        className={`absolute rounded-full ${colorClass}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity,
        }}
        variants={particleVariants}
        animate="animate"
        transition={{ duration: speed, delay: Math.random() * 5 }}
      />
    );
  });

  // --- Feature Card Component ---
  const FeatureCard = ({ icon: Icon, title, colorClass }) => (
    <div className="flex items-center gap-4 p-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
      <div className={`p-3 bg-slate-950 rounded-lg ${colorClass} border border-white/5`}>
        <Icon className="w-7 h-7" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white tracking-tight">{title}</span>
        <span className="text-sm text-slate-400">Join our Miracle community</span>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center bg-slate-950 text-white font-sans overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Glowing blobs & particles matching Login page style */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-purple-500/10 rounded-full blur-[140px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">{particles}</div>

      {/* Main Glassmorphism Signup Card */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
        initial="initial"
        animate="animate"
        variants={cardVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Side: Branding and Feature Cards */}
          <motion.div
            className="flex flex-col justify-between p-4 md:p-8 space-y-8 md:border-r md:border-white/10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <GraduationCap className="w-10 h-10 text-yellow-400" />
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-white">Scholars Miracle World</h1>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-2xl font-bold tracking-tight text-white/90">Create Student Account</motion.h2>
              <motion.p variants={fadeInUp} className="text-base text-slate-400 max-w-sm leading-relaxed">
                Join the Scholars Miracle World Student Portal and access your academic journey.
              </motion.p>
            </div>
            
            <motion.div variants={fadeInUp} className="space-y-6 pt-6">
              <FeatureCard icon={Award} title="Academic Excellence" colorClass="text-yellow-400" />
              <FeatureCard icon={ShieldCheck} title="Secure Portal" colorClass="text-blue-500" />
              <FeatureCard icon={Zap} title="Real-time Updates" colorClass="text-purple-500" />
            </motion.div>
          </motion.div>

          {/* Right Side: Signup Form matching Login page */}
          <motion.div
            className="flex flex-col justify-center p-4 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="space-y-4 mb-10 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Create Account <Sparkles className="inline-block w-8 h-8 text-yellow-400 mb-2"/></h2>
              <p className="text-lg text-slate-400 font-light max-w-md">Register with your Scholars Miracle student details.</p>
            </div>
            
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name field */}
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 transition-colors group-focus-within:text-blue-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-slate-900 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  />
                </div>
                {/* Email field */}
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 transition-colors group-focus-within:text-blue-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-slate-900 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Password field */}
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 transition-colors group-focus-within:text-blue-500" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create Password"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-slate-900 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                {/* Class field */}
                <div className="relative group">
                  <BookOpenCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 transition-colors group-focus-within:text-blue-500" />
                  <input
                    type="text"
                    name="className"
                    value={formData.className}
                    onChange={handleInputChange}
                    placeholder="Class"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-slate-900 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  />
                </div>
                {/* Section field */}
                <div className="relative group">
                  <ListChecks className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 transition-colors group-focus-within:text-blue-500" />
                  <input
                    type="text"
                    name="section"
                    value={formData.section}
                    onChange={handleInputChange}
                    placeholder="Section"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-slate-900 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  />
                </div>
                {/* Roll Number field - full width on mobile, col 3 on desktop */}
                <div className="relative group col-span-2 md:col-span-1">
                  <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 transition-colors group-focus-within:text-blue-500" />
                  <input
                    type="text"
                    name="rollNumber"
                    value={formData.rollNumber}
                    onChange={handleInputChange}
                    placeholder="Roll No"
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-slate-900 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              
              <div className="pt-8 space-y-4">
                {/* Submit / Create Account Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 text-lg font-bold rounded-full text-white bg-linear-to-r from-blue-500 to-purple-500 shadow-xl transition-all"
                >
                  Create Account <User className="w-5 h-5" />
                </motion.button>
                
                {/* Secondary: Login link */}
                <div className="text-center pt-2">
                  <span className="text-slate-400">Already have an account?</span>{' '}
                  <Link
                    to="/portal/login"
                    className="font-medium text-blue-500 hover:text-blue-400 transition-colors"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PortalSignup;