import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, CheckCircle, Zap, UserCheck, Mail, Lock, LogIn, ChevronRight, CornerDownRight } from 'lucide-react';

const PortalLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com") {
      navigate("/portal/admin");
    } else {
      navigate("/portal/student");
    }
  };

  const handleCreateAccount = () => navigate("/portal/signup");

  // Animations variants
  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
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
    animate: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const inputFocusVariants = {
    focus: {
      boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
      transition: { duration: 0.3 },
    },
  };

  // Generate varied particles
  const particles = Array.from({ length: 25 }, (_, i) => {
    const size = Math.random() * 6 + 2;
    const initialY = Math.random() * 100 - 50;
    const initialX = Math.random() * 100 - 50;
    const speed = Math.random() * 5 + 3;
    const opacity = Math.random() * 0.3 + 0.1;
    const colorClass = Math.random() > 0.5 ? 'bg-blue-500' : 'bg-purple-500';

    return (
      <motion.div
        key={i}
        className={`absolute rounded-full opacity-${Math.floor(opacity * 100)} ${colorClass}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        variants={particleVariants}
        animate="animate"
        transition={{ duration: speed, delay: Math.random() * 5 }}
      />
    );
  });

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center bg-slate-950 text-white font-sans overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0 bg-linear-to-brrom-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 z-0 bg-[repeating-linear-gradient(90deg,#FFFFFF01,transparent_1px_40px),repeating-linear-gradient(180deg,#FFFFFF01,transparent_1px_40px)]"></div>
      
      {/* Soft Glowing Blobs */}
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

      {/* Main Glassmorphism Login Card */}
      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto p-4 md:p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        initial="initial"
        animate="animate"
        variants={cardVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left Side: Branding and Stats */}
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
              <motion.h2 variants={fadeInUp} className="text-2xl font-bold tracking-tight text-white/90">Student Portal</motion.h2>
              <motion.p variants={fadeInUp} className="text-base text-slate-400 max-w-sm">Access your academic journey, attendance, marks and announcements.</motion.p>
            </div>
            
            <motion.div variants={fadeInUp} className="space-y-6 pt-6">
              <div className="flex items-center gap-4 p-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
                <div className="p-3 bg-slate-900 rounded-lg text-blue-500 border border-white/5"><CheckCircle className="w-7 h-7" /></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">94% Attendance Rate</span>
                  <span className="text-sm text-slate-400">Your presence matters</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
                <div className="p-3 bg-slate-900 rounded-lg text-purple-500 border border-white/5"><UserCheck className="w-7 h-7" /></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">100% Secure Portal</span>
                  <span className="text-sm text-slate-400">Data protection guaranteed</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg">
                <div className="p-3 bg-slate-900 rounded-lg text-yellow-400 border border-white/5"><Zap className="w-7 h-7" /></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">Real-time Updates</span>
                  <span className="text-sm text-slate-400">Instant access to information</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Login Form */}
          <motion.div
            className="flex flex-col justify-center p-4 md:p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="space-y-4 mb-10">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white">Welcome Back 👋</h2>
              <p className="text-lg text-slate-400 font-light">Login to access your Scholars Miracle World portal.</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors group-focus-within:text-blue-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                 placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-slate-900 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors group-focus-within:text-blue-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl backdrop-blur-md bg-slate-900 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
              </div>
              
              <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
                <label className="flex items-center gap-2.5 cursor-pointer select-none">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="peer h-5 w-5 rounded-md backdrop-blur-sm bg-slate-900 border border-slate-700 focus:ring-0 focus:ring-offset-0 focus:outline-none checked:bg-blue-500 transition-colors"
                    />
                    <CheckCircle className="absolute h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                  Remember Me
                </label>
                <button type="button" className="text-blue-500 hover:text-blue-400 transition-colors">Forgot Password?</button>
              </div>
              
              <div className="pt-6 space-y-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 text-lg font-bold rounded-full text-white bg-linear-to-r from-blue-500 to-purple-500 shadow-xl transition-all"
                >
                  Login <LogIn className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  type="button"
                  onClick={handleCreateAccount}
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-3 py-4 text-lg font-semibold rounded-full text-slate-300 backdrop-blur-sm bg-white/0 border border-white/10 transition-all hover:text-white"
                >
                  Create Account <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PortalLogin;