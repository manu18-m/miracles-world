import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, X, ChevronLeft, ChevronRight, 
  ImageIcon, Calendar, ArrowRight, Video 
} from 'lucide-react';

// --- Mock Data ---
const FILTERS = ['All', 'Campus', 'Academics', 'Sports', 'Events', 'Guinness Records', 'Cultural Activities'];

const GALLERY_IMAGES = [
  { id: 1, category: 'Campus', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop', title: 'Main University Building' },
  { id: 2, category: 'Guinness Records', url: 'https://images.unsplash.com/photo-1523580494112-071d4581a59c?q=80&w=800&auto=format&fit=crop', title: 'Record Breaking Assembly' },
  { id: 3, category: 'Sports', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop', title: 'Annual Athletic Meet' },
  { id: 4, category: 'Academics', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop', title: 'Advanced Robotics Lab' },
  { id: 5, category: 'Events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop', title: 'Annual Tech Symposium' },
  { id: 6, category: 'Cultural Activities', url: 'https://images.unsplash.com/photo-1460518451285-84b6214ed036?q=80&w=800&auto=format&fit=crop', title: 'Spring Arts Festival' },
  { id: 7, category: 'Academics', url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop', title: 'Central Library' },
  { id: 8, category: 'Guinness Records', url: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop', title: 'Largest Reading Marathon' },
  { id: 9, category: 'Campus', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop', title: 'Smart Classrooms' },
  { id: 10, category: 'Sports', url: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800&auto=format&fit=crop', title: 'Swimming Championship' },
];

const FEATURED_ALBUMS = [
  { id: 1, title: 'Annual Day 2026', count: 124, url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Sports Meet', count: 86, url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Science Exhibition', count: 52, url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Guinness World Record', count: 210, url: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?q=80&w=800&auto=format&fit=crop' },
];

const VIDEOS = [
  { id: 1, title: 'Campus Tour', duration: '3:45', url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Annual Day Highlights', duration: '5:20', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Record Celebration', duration: '2:15', url: 'https://images.unsplash.com/photo-1523580846011-d3a5ce25c281?q=80&w=800&auto=format&fit=crop' },
];

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

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter Images
  const filteredImages = GALLERY_IMAGES.filter(img => activeFilter === 'All' || img.category === activeFilter);

  // Lightbox Handlers
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [lightboxIndex]);

  // Handle Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <main className="bg-slate-950 min-h-screen text-white font-jakarta overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/60 z-10" />
          <div className="absolute inset-0 bg-linear-to-b from-slate-950/20 via-slate-950/60 to-slate-950 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop" 
            alt="Moments of Excellence"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div className="w-[60vw] h-[60vw] bg-purple-500/10 rounded-full blur-[150px]" />
          <FloatingParticles count={25} />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="font-sora text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            Moments of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Excellence</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium"
          >
            Explore the vibrant life, achievements, and unforgettable moments at Scholars Miracle World.
          </motion.p>
        </div>
      </section>

      {/* 2. GALLERY SECTION WITH FILTERS & MASONRY */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="max-w-350 mx-auto px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-bold transition-colors ${
                  activeFilter === filter ? 'text-white' : 'text-slate-400 hover:text-white bg-white/5 border border-white/10'
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filteredImages.map((img, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={img.id}
                  onClick={() => openLightbox(index)}
                  className="relative group rounded-3xl overflow-hidden cursor-pointer break-inside-avoid border border-white/10"
                >
                  <img src={img.url} alt={img.title} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-80" />
                    <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-2 block">{img.category}</span>
                      <h3 className="font-sora text-xl font-bold text-white">{img.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED ALBUMS */}
      <section className="py-24 bg-black border-y border-white/5 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-350 mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-sora text-4xl lg:text-5xl font-bold">
              Featured <span className="text-purple-500">Albums</span>
            </motion.h2>
            <motion.button initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group font-bold">
              View All Albums <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_ALBUMS.map((album, idx) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer border border-white/10"
              >
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img src={album.url} alt={album.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />
                
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                  <h3 className="font-sora text-2xl font-bold text-white mb-2">{album.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                    <ImageIcon size={16} className="text-blue-500" />
                    <span>{album.count} Photos</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. VIDEO SHOWCASE */}
      <section className="py-24 relative">
        <div className="max-w-350 mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-sora text-4xl lg:text-5xl font-bold">
              Video <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Showcase</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VIDEOS.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-video rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-slate-900"
              >
                <img src={video.url} alt={video.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                    <Play size={24} className="text-white fill-white ml-1" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 p-6 z-20 w-full bg-linear-to-t from-black/90 to-transparent">
                  <div className="flex items-center justify-between">
                    <h3 className="font-sora text-xl font-bold text-white">{video.title}</h3>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs font-bold text-white">
                      <Video size={14} className="text-purple-500" /> {video.duration}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="relative py-32 lg:py-48 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-blue-500/20 via-slate-950 to-slate-950 opacity-80" />
        <FloatingParticles count={20} />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-sora text-5xl lg:text-7xl font-bold mb-6 text-white tracking-tight"
          >
            Experience Scholars Miracle World
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-xl lg:text-2xl text-slate-300 mb-12 font-medium"
          >
            See the excellence for yourself. Plan your visit or start your application.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="relative group w-full sm:w-auto px-10 py-5 rounded-full bg-white text-slate-950 font-sora font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center justify-center gap-2">Schedule a Visit <Calendar size={20} /></span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>

            <button className="relative group w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white font-sora font-bold text-lg transition-transform hover:scale-105 active:scale-95 hover:bg-white/10 hover:border-white/40">
              Explore Admissions
            </button>
          </motion.div>
        </div>
      </section>

      {/* 6. FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-8"
          >
            {/* Close Button */}
            <button onClick={closeLightbox} className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50">
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button onClick={prevImage} className="absolute left-4 md:left-12 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden md:block">
              <ChevronLeft size={32} />
            </button>

            {/* Image Container */}
            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <img 
                src={filteredImages[lightboxIndex].url} 
                alt={filteredImages[lightboxIndex].title} 
                className="w-auto max-w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">{filteredImages[lightboxIndex].category}</span>
                <h3 className="text-white font-sora text-2xl font-bold mt-1">{filteredImages[lightboxIndex].title}</h3>
                <p className="text-slate-400 mt-2 text-sm">{lightboxIndex + 1} / {filteredImages.length}</p>
              </div>
            </motion.div>

            {/* Next Button */}
            <button onClick={nextImage} className="absolute right-4 md:right-12 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50 hidden md:block">
              <ChevronRight size={32} />
            </button>

            {/* Mobile Navigation Area (Tap left/right sides) */}
            <div className="absolute inset-y-0 left-0 w-1/3 z-40 md:hidden" onClick={prevImage} />
            <div className="absolute inset-y-0 right-0 w-1/3 z-40 md:hidden" onClick={nextImage} />
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}