import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, School, MapPin, Building2, UserCheck, CalendarDays, BookOpenCheck, ShieldCheck, Mail, Phone, MessageSquare, ArrowRight, X } from 'lucide-react';

const admissionsData = {
  hero: {
    heading: "Admissions Open 2026",
    subheading: "Begin your journey at Miracles World — where excellence, innovation, and character shape future leaders."
  },
  whyChoose: [
    { icon: <Award className="w-10 h-10 text-yellow-400" />, title: "Guinness World Records", description: "Consistently setting benchmarks in educational achievements." },
    { icon: <BookOpenCheck className="w-10 h-10 text-purple-500" />, title: "Academic Excellence", description: "Our alumni consistently rank among the top percentile in competitive exams." },
    { icon: <Building2 className="w-10 h-10 text-blue-500" />, title: "World Class Facilities", description: "State-of-the-art labs, sports complexes, and digital learning environments." },
    { icon: <School className="w-10 h-10 text-slate-300" />, title: "Holistic Development", description: "Nurturing sportsmanship, creativity, and leadership beyond academics." }
  ],
  process: [
    { step: "01", title: "Enquiry", description: "Submit an online enquiry form to begin the process." },
    { step: "02", title: "Campus Visit", description: "Schedule a guided tour to explore our premium facilities." },
    { step: "03", title: "Assessment / Interaction", description: "Age-appropriate interaction for holistic evaluation." },
    { step: "04", title: "Document Verification", description: "Submit all required documents for formal review." },
    { step: "05", title: "Admission Confirmation", description: "Receive official confirmation and welcome package." }
  ],
  eligibility: [
    { level: "👶 Play School", grades: "Toddler - Prep", age: "2.5 - 5 Years", description: "Play-based learning in a nurturing and safe environment." },
    { level: "📚 Primary School", grades: "I - V", age: "6 - 10 Years", description: "Focus on fundamental concepts and skill development." },
    { level: "🧑 Middle School", grades: "VI - VIII", age: "11 - 13 Years", description: "Transition to analytical thinking and multi-disciplinary approach." },
    { level: "🎓 High School", grades: "IX - XII", age: "14 - 17 Years", description: "Rigorous academic program preparing for tertiary education." }
  ],
  documents: [
    "Birth Certificate", "Aadhaar Card", "Passport Size Photos (6 Nos)", "Previous School Records", "Transfer Certificate"
  ],
  faqs: [
    { q: "When do admissions open?", a: "Typically, admissions for the academic year starting in June open in November of the previous year." },
    { q: "Is transport available?", a: "Yes, we operate a fleet of modern, safe, GPS-tracked buses with attendants across major city routes." },
    { q: "Is there an entrance exam?", a: "For Play School and Primary levels, we have a general interaction. Middle and High school levels involve age-appropriate assessments." },
    { q: "What curriculum is followed?", a: "We are affiliated with the Central Board of Secondary Education (CBSE) and offer holistic learning programs." }
  ]
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const AdmissionCard = ({ item }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -8, scale: 1.02 }}
    className="bg-slate-900/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 shadow-2xl flex flex-col gap-5 hover:border-purple-500/20 transition-all duration-300 relative group overflow-hidden"
  >
    <div className="absolute inset-0 bg-linear-to-brrom-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="bg-slate-950 p-4 rounded-full border border-white/5 w-fit relative z-10">{item.icon}</div>
    <h3 className="text-2xl font-semibold text-white tracking-tight relative z-10">{item.title}</h3>
    <p className="text-slate-400 font-light relative z-10 leading-relaxed">{item.description}</p>
  </motion.div>
);

const TimelineNode = ({ step, title, description }) => (
  <motion.div
    variants={fadeInUp}
    whileInView="visible"
    initial="hidden"
    viewport={{ once: true, amount: 0.8 }}
    className="flex gap-6 items-start relative pb-12 last:pb-0 last:after:content-[''] last:after:absolute last:after:left-4.75 last:after:top-10  last:after:w-px last:after:bg-slate-950 after:content-[''] after:absolute after:left-4.75fter:top-10 after:h-full after:w-px after:bg-slate-800"
  >
    <div className="z-10 bg-slate-950 rounded-full w-10 h-10 border-2 border-slate-700 flex items-center justify-center font-bold text-lg text-blue-500">{step}</div>
    <div>
      <h4 className="text-2xl font-semibold text-white tracking-tight">{title}</h4>
      <p className="text-slate-400 mt-2 font-light leading-relaxed max-w-lg">{description}</p>
    </div>
  </motion.div>
);

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    {[...Array(25)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        initial={{ opacity: 0.1, x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
        animate={{
          opacity: [0.1, 0.6, 0.1],
          y: ["+0%", `-${200 + Math.random() * 300}px`],
          transition: {
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5
          }
        }}
      />
    ))}
  </div>
);

const Accordion = ({ faqs }) => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <motion.div
          key={idx}
          variants={fadeInUp}
          className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
        >
          <button
            onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <h4 className="text-lg font-medium text-white tracking-tight">{faq.q}</h4>
            <X className={`w-5 h-5 text-slate-500 transition-transform ${activeIdx === idx ? 'rotate-0' : 'rotate-45'}`} />
          </button>
          <AnimatePresence>
            {activeIdx === idx && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
                exit={{ height: 0, opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-slate-400 font-light leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

const Admissions = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans antialiased overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col justify-center items-center px-6 overflow-hidden border-b border-slate-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0)_70%)]" />
        <FloatingParticles />
        
        <motion.div
          className="z-10 text-center max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="font-bold text-5xl md:text-7xl leading-[1.1] tracking-tighter select-none bg-linear-to-r from-white via-white/80 to-slate-200 bg-clip-text text-transparent">
            {admissionsData.hero.heading}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            {admissionsData.hero.subheading}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 group transition-shadow hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Apply for Admission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* 2. WHY CHOOSE MIRACLES WORLD */}
      <section className="py-24 px-6 relative bg-slate-950">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {admissionsData.whyChoose.map((item, idx) => (
              <AdmissionCard key={idx} item={item} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ADMISSION PROCESS */}
      <section className="py-24 px-6 border-y border-slate-800/40 bg-slate-950/50">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Seamless <br /> <span className="text-transparent bg-clip-text bg-linear-to-rrom-blue-500 to-purple-500">Admission Process</span>
            </motion.h2>
            <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{delay: 0.2}} className="text-xl text-slate-400 mt-6 leading-relaxed font-light max-w-lg">
              Follow these simple steps to secure your child's place in our community of learners.
            </motion.p>
          </div>
          
          <div className="relative pl-6 lg:pl-10">
            {admissionsData.process.map((node, idx) => (
              <TimelineNode key={idx} {...node} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. ELIGIBILITY */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(168,85,247,0.06)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="container mx-auto relative z-10">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">Eligibility Criteria</motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {admissionsData.eligibility.map((criteria, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-900 border border-slate-800 p-8 rounded-3xl group"
              >
                <div className="w-12 h-12 bg-slate-950/60 backdrop-blur-md rounded-xl border border-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">{criteria.level.split(' ')[0]}</div>
                <h4 className="text-2xl font-semibold text-white tracking-tight">{criteria.level.split(' ').slice(1).join(' ')}</h4>
                <div className="mt-4 flex flex-col gap-2 font-light">
                  <p className="text-slate-300"><span className="font-semibold text-white/90">Grades:</span> {criteria.grades}</p>
                  <p className="text-slate-300"><span className="font-semibold text-white/90">Age:</span> {criteria.age}</p>
                  <p className="text-slate-400 mt-3 border-t border-slate-800/60 pt-4 leading-relaxed">{criteria.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. REQUIRED DOCUMENTS */}
      <section className="py-24 px-6 border-y border-slate-800/40 bg-slate-950/50">
        <div className="container mx-auto">
          <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-white tracking-tight max-w-lg mb-12">Essential Documents for Enrollment</motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {admissionsData.documents.map((doc, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-slate-900/60 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex items-center gap-4 group hover:border-blue-500/30 transition-colors"
              >
                <div className="bg-slate-950 p-3 rounded-xl border border-white/5 text-blue-500 group-hover:scale-105 transition-transform"><BookOpenCheck className="w-6 h-6"/></div>
                <p className="text-lg font-medium text-white tracking-tight">{doc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. FEE STRUCTURE */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0)_70%)]" />
            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight relative z-10">Fee Information</h3>
            <p className="text-xl text-slate-300 mt-6 font-light leading-relaxed relative z-10 max-w-lg mx-auto">
              Please contact the Admissions Office or visit the campus for a detailed fee structure and payment terms.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 mt-10 bg-slate-950/80 border border-slate-700 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-medium flex items-center gap-2.5 mx-auto group hover:border-white/20 transition-all"
            >
              Contact Admissions
              <Mail className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform"/>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-950 border-t border-slate-800/40">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-[2fr,3fr] gap-16">
          <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">Common <br/> Questions</h2>
            <p className="text-xl text-slate-400 mt-6 font-light leading-relaxed max-w-md">Find answers to frequently asked questions about our admissions and policies.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
            <Accordion faqs={admissionsData.faqs} />
          </motion.div>
        </div>
      </section>

      {/* 8. ENQUIRY FORM */}
      <section className="py-24 px-6 relative border-y border-slate-800/40 bg-slate-950/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(59,130,246,0.06)_0%,rgba(0,0,0,0)_50%)]" />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          <div className="lg:col-span-5 self-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">Admissions <br/> Enquiry</h2>
            <p className="text-xl text-slate-400 mt-6 font-light leading-relaxed">Fill out the form below to receive more information. Our admissions team will connect with you shortly.</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-10 md:p-12 shadow-[0_0_60px_-10px_rgba(59,130,246,0.05)]"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
              <input type="text" placeholder="Your Name" className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-light text-slate-300 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none" />
              <input type="email" placeholder="Email Address" className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-light text-slate-300 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none" />
              <input type="tel" placeholder="Phone Number" className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-light text-slate-300 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none" />
              <select className="bg-slate-950 border border-slate-800 rounded-lg p-4 font-light text-slate-400 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none appearance-none">
                <option value="">Class Applying For</option>
                <option value="Play School">Play School</option>
                <option value="Primary School">Primary School</option>
                <option value="Middle School">Middle School</option>
                <option value="High School">High School</option>
              </select>
              <textarea placeholder="Your Message (Optional)" rows={4} className="md:col-span-2 bg-slate-950 border border-slate-800 rounded-lg p-4 font-light text-slate-300 placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 transition-all outline-none resize-none" />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="md:col-span-2 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 px-8 py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-2 group transition-shadow hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                Submit Enquiry
                <MessageSquare className="w-5 h-5 text-white/70" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.15)_0%,rgba(0,0,0,0)_70%)]" />
        <FloatingParticles />
        
        <motion.div
          className="z-10 text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tighter text-white">Your Future <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">Starts Here</span></h2>
          <p className="mt-8 text-xl lg:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">Join a vibrant community where excellence meets innovation and learning is a lifelong adventure.</p>
          
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 group transition-shadow hover:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#fff' }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900/60 backdrop-blur-sm border border-slate-700 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2.5 transition-all"
            >
              Contact Admissions
              <Mail className="w-5 h-5 text-yellow-400"/>
            </motion.button>
          </div>
        </motion.div>
      </section>
      
      {/* Small footer spacer */}
      <footer className="py-8 bg-slate-950 border-t border-slate-800/40 text-center text-sm text-slate-500">
        © © {new Date().getFullYear()} Miracles World. All rights reserved.
      </footer>
    </div>
  );
};

export default Admissions;