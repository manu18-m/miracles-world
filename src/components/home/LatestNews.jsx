import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const news = [
  {
    title: "Miracles World awarded 'Most Innovative Curriculum 2026'",
    category: "Award",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop",
    featured: true
  },
  {
    title: "Students launch satellite prototype with NASA scientists",
    category: "STEM",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Annual Arts Gala raises $100k for charity",
    category: "Community",
    image: "https://images.unsplash.com/photo-1460518451285-84b6214ed036?q=80&w=600&auto=format&fit=crop"
  }
];

export default function LatestNews() {
  return (
    <section className="py-24 lg:py-32 bg-black/50 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-4xl lg:text-5xl font-bold"
          >
            Latest <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-blue-500">News</span>
            <p className="text-slate-400 max-w-2xl mt-4 text-lg">
             Stay informed with the latest achievements, innovations, and milestones from Miracles World.
            </p>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {news.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group relative overflow-hidden rounded-3xl bg-slate-950 border border-white/10 ${item.featured ? 'lg:col-span-2' : 'col-span-1'} aspect-square lg:aspect-auto`}
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-white">
                    {item.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={20} className="text-white" />
                  </div>
                </div>
                <h3 className={`font-sora font-bold text-white ${item.featured ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}