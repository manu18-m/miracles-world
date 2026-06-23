import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock,Camera,Globe,Play,Briefcase, Send } from 'lucide-react';

const Contact = () => {
  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const floatingParticleVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      lines: ['Saraswati Scholars Miracle World', 'Goutham Nagar' ,'Malkajgiri', 'Secunderabad','Telangana - 500047'],
      color: 'text-blue-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['+91 79816 77284', '+91 93928 35869'],
      color: 'text-purple-500',
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['info@miraclesworld.com', 'admissions@miraclesworld.com'],
      color: 'text-yellow-400',
    },
    {
      icon: Clock,
      title: 'Timings',
      lines: ['Mon - Sat', '8:00 AM - 5:00 PM'],
      color: 'text-blue-500',
    },
  ];

  const socialMedias = [

  { icon: Camera, url: '#' },

  { icon: Globe, url: '#' },

  { icon: Play, url: '#' },

  { icon: Briefcase, url: '#' },

];

  const InputField = ({ label, id, type = 'text', rows }) => (
    <div className="relative z-0 w-full group">
      {rows ? (
        <textarea
          name={id}
          id={id}
          rows={rows}
          className="block py-3 px-4 w-full text-sm text-white bg-slate-900 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-slate-500"
          placeholder={label}
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          className="block py-3 px-4 w-full text-sm text-white bg-slate-900 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-slate-500"
          placeholder={label}
        />
      )}
    </div>
  );

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans antialiased overflow-x-hidden">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden px-6">
        {/* Deep background overlay */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,#0f172a,#020617)] opacity-90"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full opacity-30 ${i % 2 === 0 ? 'bg-blue-500' : 'bg-purple-500'}`}
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={floatingParticleVariants}
              animate="animate"
              transition={{ delay: Math.random() * 2 }}
            />
          ))}
        </div>

        {/* Content */}
        <motion.div 
          className="relative z-20 text-center max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-white via-slate-300 to-white leading-tight"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mt-6 font-medium leading-relaxed"
            variants={itemVariants}
          >
            We would love to hear from you. Visit our campus, ask questions, or begin your journey at Scholars Miracle World.
          </motion.p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-950 to-transparent"></div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="relative py-12 px-6 lg:px-12 max-w-screen-2xl mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Info Cards */}
          <motion.div 
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="relative group p-7 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-xl shadow-2xl transition-all hover:border-slate-700 hover:-translate-y-1"
                variants={itemVariants}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                <div className={`p-3 inline-block rounded-lg ${info.color} bg-slate-900/50 mb-6 border border-slate-700`}>
                  <info.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-4">{info.title}</h3>
                {info.lines.map((line, lIdx) => (
                  <p key={lIdx} className="text-slate-400 text-sm leading-relaxed">{line}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7 bg-slate-900 p-10 rounded-3xl border border-slate-800 backdrop-blur-2xl shadow-[0_0_80px_rgba(37,99,235,0.05)] relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            {/* Border glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 opacity-60"></div>

            <h2 className="text-4xl font-bold tracking-tighter text-white mb-6">Send Us A Message</h2>
            <p className="text-slate-400 mb-10">We respond promptly to all inquiries.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Name" id="name" />
                <InputField label="Email" id="email" type="email" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Phone" id="phone" type="tel" />
                <InputField label="Subject" id="subject" />
              </div>
              <InputField label="Message" id="message" rows={6} />
              
              <div className="flex items-center justify-start pt-6">
                <motion.button 
                  type="submit" 
                  className="group flex items-center gap-3 px-8 py-4 text-sm font-semibold rounded-full text-white bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 shadow-xl transition-all transform hover:scale-105 hover:shadow-blue-500/20 active:scale-95"
                >
                  Submit Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 lg:px-12 max-w-screen-2xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="md:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MapPin className="w-12 h-12 text-yellow-400 mb-8" strokeWidth={1}/>
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white leading-tight">Visit Our Campus</h2>
            <p className="text-slate-300 mt-6 text-lg leading-relaxed max-w-sm">
              Explore our world-class facilities first-hand. We welcome visitors during school hours. Located in the heart of Telangana.
            </p>
          </motion.div>

          <motion.div 
            className="md:col-span-8 relative aspect-video md:aspect-21/10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group p-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-transparent to-purple-500/10 rounded-[22px] blur-3xl group-hover:opacity-100 opacity-60 transition-opacity"></div>
            {/* Google Map Placeholder Box */}
            <iframe
    src="https://www.google.com/maps?q=FG2G%2BXW7,+Gowtham+Nagar,+Malkajgiri,+Secunderabad,+Telangana+500047&output=embed"
    className="w-full h-full rounded-[20px]"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 relative bg-slate-900 border-t border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#1e293b,#0f172a)] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h2 
            className="text-4xl font-bold tracking-tighter text-white mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Connect With Us
          </motion.h2>
          <div className="flex items-center justify-center gap-10">
            {socialMedias.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full border border-slate-700 bg-slate-950 text-slate-400 shadow-xl transition-all hover:text-white hover:border-slate-500 hover:shadow-slate-700/30 active:scale-95"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <social.icon className="w-9 h-9" strokeWidth={1.5} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 lg:py-48 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,#3b82f633,#020617)]"></div>
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-5xl lg:text-7xl font-extrabold mb-6 text-white tracking-tight leading-none"
            variants={itemVariants}
          >
            Your Future Starts Here
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-slate-300 mb-12 font-medium"
            variants={itemVariants}
          >
            Join a community where excellence meets innovation.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={itemVariants}
          >
            <motion.a 
              href="#" 
              className="relative group w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg text-slate-950 transition-transform active:scale-95 duration-200 overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              {/* Button Gradient */}
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-blue-500 transition-opacity"></div>
              {/* Button text */}
              <span className="relative z-10 text-white">Apply Now</span>
              {/* Shine effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-white/10 via-white/50 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity blur-lg pointer-events-none"></div>
            </motion.a>

            <motion.a 
              href="#" 
              className="relative group w-full sm:w-auto px-10 py-5 rounded-full border border-slate-700 bg-slate-900 font-bold text-lg text-white backdrop-blur-md shadow-inner transition-transform active:scale-95 duration-200"
              whileHover={{ scale: 1.05, borderColor: '#475569' }}
            >
              Explore Campus
              {/* Floating glow */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;