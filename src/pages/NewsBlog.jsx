import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, ArrowRight, ArrowRightCircle, Eye, Clock3, Mail } from 'lucide-react';

// Animation Variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

// Sample Data
const categories = ['All', 'Academics', 'Achievements', 'Sports', 'Events', 'Guinness Records'];

const newsGridData = [
  { id: 1, category: 'Sports', date: 'Oct 15, 2026', title: 'Annual Sports Meet 2026', desc: 'A grand celebration of athleticism and sportsmanship at the main stadium.', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop' },
  { id: 2, category: 'Achievements', date: 'Oct 12, 2026', title: 'Olympiad Winners', desc: 'Celebrating our brilliant minds who secured top ranks in the National Science Olympiad.', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop' },
  { id: 3, category: 'Academics', date: 'Oct 08, 2026', title: 'Science Exhibition', desc: 'Innovative projects showcasing the next generation of scientific leaders.', img: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=800&auto=format&fit=crop' },
  { id: 4, category: 'Guinness Records', date: 'Sep 28, 2026', title: 'Guinness Record Celebration', desc: 'A ceremony honoring the students and staff involved in our recent record achievement.', img: 'https://images.unsplash.com/photo-1496291851122-37ac3f4f2207?q=80&w=800&auto=format&fit=crop' },
  { id: 5, category: 'Academics', date: 'Sep 22, 2026', title: 'Smart Classroom Launch', desc: 'Revolutionizing learning with state-of-the-art interactive digital technology.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop' },
  { id: 6, category: 'Events', date: 'Sep 15, 2026', title: 'Admissions Open 2026', desc: 'Join the Miracles World family. Applications for the next academic year are now live.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop' },
];

const trendingStoriesData = [
  { id: 1, title: 'Inside our Robotics Lab', views: '2.1k', readTime: '5 min', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop' },
  { id: 2, title: 'Alumni Spotlight: Career Journeys', views: '1.9k', readTime: '8 min', img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop' },
  { id: 3, title: 'Student Leadership Program Overview', views: '1.5k', readTime: '6 min', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop' },
];

// Utility: Floating Particles
const FloatingParticles = ({ count = 20 }) => (
  <>
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
        initial={{
          x: `${Math.random() * 100}%`,
          y: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.4 + 0.1
        }}
        animate={{
          y: [null, Math.random() * -100 - 50],
          opacity: [null, 0.7, 0]
        }}
        transition={{
          duration: Math.random() * 15 + 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    ))}
  </>
);

const NewsBlog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredNews = activeCategory === 'All'
    ? newsGridData
    : newsGridData.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/60 z-10" />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/10 via-slate-950/80 to-slate-950 z-10" />
          <motion.img 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div className="w-[80vw] h-[80vw] bg-blue-500/10 rounded-full blur-[180px]" />
          <FloatingParticles count={30} />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-bold text-6xl md:text-8xl tracking-tighter leading-none mb-6"
          >
            Latest News & <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            Stay updated with achievements, events, and milestones from Miracles World.
          </motion.p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="group relative rounded-3xl overflow-hidden aspect-21/10g-slate-900 border border-white/10 shadow-2xl flex items-end"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1496291851122-37ac3f4f2207?q=80&w=1200&auto=format&fit=crop" 
                alt="Featured News" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/50 to-transparent z-10" />
            </div>

            <div className="relative z-20 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-yellow-400/20 backdrop-blur-md text-yellow-400 text-xs font-bold uppercase tracking-widest">
                    Guinness Records
                  </span>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <CalendarDays size={16} className="text-purple-500" /> Sep 28, 2026
                  </div>
                </div>
                <h2 className="font-bold text-white text-3xl lg:text-5xl tracking-tight mb-4 max-w-3xl">
                  Miracles World achieves Guinness World Record
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
                  Recognized globally for setting a new benchmark in student collaborative robotics and sustainable innovation.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 text-sm font-semibold rounded-full text-white bg-linear-to-r from-blue-600 to-purple-600 shadow-lg"
              >
                Read More <ArrowRightCircle size={20} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-3 border border-white/5 bg-slate-950 p-1.5 rounded-full shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-3 rounded-full text-sm font-bold transition-colors ${
                  activeCategory === cat ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[1fr]"
          >
            <AnimatePresence>
              {filteredNews.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  layout
                  className="group relative overflow-hidden rounded-3xl bg-slate-950 border border-white/10 h-full flex flex-col"
                >
                  {/* Background Image with Hover Zoom */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-40"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-8 flex-1 flex flex-col justify-end">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white">
                        {item.category}
                      </span>
                      <div className="flex items-center gap-2 text-slate-300 text-xs">
                        <CalendarDays size={14} className="text-purple-500" /> {item.date}
                      </div>
                    </div>
                    <h3 className="font-bold text-white text-2xl tracking-tight mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 flex-1">
                      {item.desc}
                    </p>
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 group-hover:bg-blue-600">
                      <ArrowRight size={20} className="text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Trending Stories */}
      <section className="py-24 bg-black border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.h2 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="font-bold text-white text-4xl lg:text-5xl tracking-tight mb-16"
          >
            Trending <span className="text-blue-500">Stories</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[1fr]">
            {trendingStoriesData.map((story) => (
              <motion.div
                key={story.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
                className="group p-6 rounded-3xl bg-slate-950 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-colors flex items-start gap-4 h-full"
              >
                <img src={story.img} alt={story.title} className="w-24 h-24 rounded-xl object-cover" />
                <div className="flex-1 flex flex-col justify-between h-full">
                  <h4 className="font-bold text-white text-lg tracking-tight leading-tight max-w-50">
                    {story.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-slate-400 pt-3">
                    <span className="flex items-center gap-1.5"><Eye size={14} className="text-purple-500"/> {story.views} Views</span>
                    <span className="flex items-center gap-1.5"><Clock3 size={14} className="text-blue-500"/> {story.readTime}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-32 lg:py-48 overflow-hidden z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))]from-blue-500/20 via-slate-950 to-slate-950 opacity-80" />
        <FloatingParticles count={25} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl p-10 md:p-16 rounded-3xl backdrop-blur-xl border border-white/10 bg-white/5 flex flex-col md:flex-row items-center gap-8 justify-between shadow-[0_0_80px_rgba(37,99,235,0.1)]"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-500">
                <Mail size={24} />
              </div>
              <h2 className="font-bold text-white text-3xl md:text-5xl tracking-tighter mb-4 leading-none">Never Miss an Update</h2>
              <p className="text-xl text-slate-300 max-w-xl font-medium">
                Subscribe to our newsletter and get the latest insights and news.
              </p>
            </div>
            
            <div className="w-full md:w-auto flex flex-col gap-3 min-w-75">
              <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 rounded-full bg-slate-950 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 text-sm font-semibold rounded-full text-white bg-linear-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-600/20"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 lg:py-48 overflow-hidden z-10 border-t border-white/5">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/10 via-slate-950 to-slate-950 opacity-80" />
        <FloatingParticles count={20} />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} variants={fadeUp}
            className="font-bold text-white text-5xl lg:text-7xl mb-6 tracking-tight leading-none"
          >
            Become a Part of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Miracles World</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-slate-300 mb-12 font-medium"
          >
            Your journey towards excellence starts here.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full sm:w-auto px-10 py-5 rounded-full bg-white text-slate-950 font-bold text-lg overflow-hidden"
            >
              <span className="relative z-10">Apply Now</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-lg transition-transform hover:bg-white/10 hover:border-white/40"
            >
              Explore Campus
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default NewsBlog;