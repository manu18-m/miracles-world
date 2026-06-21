import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-2", alt: "Students in lab" },
  { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop", span: "col-span-2 row-span-1", alt: "Campus exterior" },
  { url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1", alt: "Library" },
  { url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1", alt: "Graduation" },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sora text-4xl lg:text-5xl font-bold mb-4"
          >
            Life at <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Miracles World </span>
          </motion.h2>
          <p className="text-slate-400">Glimpses of excellence, everyday.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[200px] lg:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-3xl overflow-hidden group ${img.span}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}