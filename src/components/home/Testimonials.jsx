import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Manoj Kumar",
    role: "Parent of Grade 10 Student",
    text: "The holistic development approach at Scholars Miracle World transformed my son. He's not just excelling academically, but has grown into a confident leader.",
  },
  {
    name: "Steven Anthony",
    role: "Alumnus, Class of 2020",
    text: "The facilities and faculty here are unmatched. The Robotics lab alone gave me the foundation I needed to secure my spot at MIT.",
  },
  {
    name: "Miss. Madhuri",
    role: "Head of Science Department",
    text: "I've taught worldwide, but the environment of innovation and pure curiosity fostered here makes this institution truly one of a kind.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-black border-y border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-sora text-4xl lg:text-5xl font-bold mb-4">Voices of <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Excellence</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Hear from our students, parents, alumni, and educators who have experienced the Scholars Miracle World journey.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/2 backdrop-blur-sm border border-white/10 rounded-3xl p-8 relative group hover:bg-white/5 transition-colors"
            >
              <Quote size={40} className="text-blue-500/20 absolute top-8 right-8" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 relative z-10">
                "{test.text}"
              </p>
              <div>
                <h4 className="font-sora font-bold text-white">{test.name}</h4>
                <p className="text-sm text-blue-500 font-medium">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}