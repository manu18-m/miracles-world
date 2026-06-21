import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

const events = [

{

day: "15",

month: "AUG",

title: "Guinness World Record Celebration",

location: "Miracles World Campus",

time: "09:00 AM"

},

{

day: "05",

month: "SEP",

title: "Annual Sports Meet",

location: "School Grounds",

time: "08:00 AM"

},

{

day: "14",

month: "NOV",

title: "Children's Day Celebrations",

location: "Main Auditorium",

time: "10:00 AM"

}

]

export default function UpcomingEvents() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-sora text-4xl lg:text-5xl font-bold mb-4">Upcoming <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Events</span></h2>
            <p className="text-slate-300 max-w-xl">Join us in our continuous pursuit of knowledge. Discover what's happening at Miracles World this month.</p>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-blue-500 font-bold hover:text-white transition-colors group"
          >
            View Calendar <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/3 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/6 transition-all duration-300"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                
                {/* Date Block */}
                <div className="flex flex-col items-center justify-center min-w-25 h-25 bg-slate-950 rounded-2xl border border-white/5 shadow-inner">
                  <span className="font-sora text-3xl font-bold text-white">{event.day}</span>
                  <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">{event.month}</span>
                </div>

                {/* Info Block */}
                <div className="flex-1">
                  <h3 className="font-sora text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1.5"><Calendar size={16} className="text-purple-500"/> {event.time}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={16} className="text-purple-500"/> {event.location}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="px-8 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-black font-bold transition-colors w-full md:w-auto">
                  Register
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}