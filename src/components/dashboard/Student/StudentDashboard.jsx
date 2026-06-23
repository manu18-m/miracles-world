import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Clock3, BarChart3, Bell, X,  UserCircle, LogOut, Search, Target, Trophy, Building2, School } from 'lucide-react';

// strictly adhered color palette
const colors = {
  bg: 'bg-slate-950',
  textMain: 'text-white',
  textMuted: 'text-slate-300',
  textDark: 'text-slate-400',
  primary: 'text-blue-500',
  secondary: 'text-purple-500',
  accent: 'text-yellow-400',
  border: 'border-white/10',
  glass: 'bg-white/5 backdrop-blur-xl',
};

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const sidebarSlide = {
  hidden: { x: '-100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { x: '-100%', opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};


// --- Reusable Sub-components ---

const StatCard = ({ icon: Icon, value, label, colorClass, animationDelay }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    className={`p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 flex flex-col items-center text-center relative group overflow-hidden`}
  >
    {/* Subtle Border Glow on Hover */}
    <div className={`absolute inset-0 rounded-3xl group-hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
    
    <div className={`p-4 rounded-full bg-slate-950 border border-white/5 ${colorClass} mb-6`}>
      <Icon className="w-9 h-9" strokeWidth={1.5} />
    </div>
    <div className="flex-1">
      <p className={`font-mono font-black text-6xl tracking-tight ${colorClass}`}>
        {value}
      </p>
      <p className={`mt-3 text-lg ${colors.textDark} font-medium uppercase tracking-wider`}>
        {label}
      </p>
    </div>
  </motion.div>
);

const SidebarItem = ({ icon: Icon, label, isActive, colorClass }) => (
  <motion.div 
    className={`flex items-center gap-4.5 px-6 py-4 rounded-xl cursor-pointer select-none relative group transition-colors duration-200 ${isActive ? 'bg-white/5' : 'hover:bg-white/10'}`}
    whileTap={{ scale: 0.98 }}
  >
    {isActive && (
      <motion.div 
        layoutId="activeSidebarIndicator" 
        className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1.5 h-[70%] bg-blue-500 rounded-full"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
    <Icon className={`w-6 h-6 transition-colors duration-200 ${isActive ? colorClass : 'text-slate-400 group-hover:text-white'}`} strokeWidth={1.5} />
    <span className={`text-lg font-bold transition-colors duration-200 ${isActive ? colors.textMain : 'text-slate-300 group-hover:text-white'}`}>
      {label}
    </span>
  </motion.div>
);

// --- Dummy Data ---
const marksData = [
  { subject: 'Maths', score: 92 },
  { subject: 'Science', score: 89 },
  { subject: 'English', score: 95 },
  { subject: 'Social', score: 88 },
  { subject: 'Computer', score: 96 },
];

const announcementsData = [
  { title: 'Sports Day - Friday', Icon: Trophy },
  { title: 'Science Fair - Next Week', Icon: Target },
  { title: 'Summer Holidays Notice', Icon: Building2 },
];


// --- Main Component ---
const StudentDashboard = () => {
    const student = {

  name: "Manoj Kumar",

  className: "10-A",

  rollNumber: "23"

};

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const sidebarContent = (
    <>
      <div className="p-8 pb-12 flex items-center gap-4">
        <School className="w-10 h-10 text-yellow-400" strokeWidth={1.5}/>
        <h1 className="text-3xl font-extrabold tracking-tighter text-white">
          Scholars Miracle World
        </h1>
      </div>
      
      <div className="grow px-4 space-y-3">
        <SidebarItem icon={LayoutDashboard} label="Dashboard" isActive={true} colorClass={colors.primary} />
        <SidebarItem icon={Clock3} label="Attendance" isActive={false} colorClass={colors.secondary} />
        <SidebarItem icon={BarChart3} label="Marks" isActive={false} colorClass={colors.primary} />
        <SidebarItem icon={Bell} label="Announcements" isActive={false} colorClass={colors.secondary} />
        <SidebarItem icon={UserCircle} label="Profile" isActive={false} colorClass={colors.primary} />
      </div>

      <div className="p-4 border-t border-white/5 mt-auto">
        <SidebarItem icon={LogOut} label="Logout" isActive={false} colorClass={colors.accent} />
      </div>
    </>
  );

  return (
    <div className={`flex min-h-screen ${colors.bg} ${colors.textMain} font-jakarta overflow-hidden`}>
      
      {/* --- SIDEBAR --- */}
      {/* Desktop Sidebar */}
      <motion.aside 
        id="sidebar-desktop"
        className={`hidden md:flex md:flex-col md:w-64 border-r ${colors.border} ${colors.glass} sticky top-0 h-screen z-50`}
        initial="hidden"
        animate="visible"
        variants={sidebarSlide}
      >
        {sidebarContent}
      </motion.aside>

      {/* Mobile Sidebar (Collapses to top menu) */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.aside 
            id="sidebar-mobile"
            className={`fixed inset-0 z-50 md:hidden flex flex-col ${colors.glass} backdrop-blur-xl border-r ${colors.border}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarSlide}
          >
            <button onClick={() => setMobileSidebarOpen(false)} className={`absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 ${colors.textMain}`}>
              <X className='w-7 h-7'/>
            </button>
            {sidebarContent}
          </motion.aside>
        )}
      </AnimatePresence>


      {/* --- MAIN CONTENT --- */}
      <main className="flex-1">
        {/* Mobile Top Header */}
        <header className="flex md:hidden items-center justify-between p-6 border-b border-white/5 sticky top-0 ${colors.glass} z-40">
           <div className="flex items-center gap-3">
            <School className="w-8 h-8 text-yellow-400" strokeWidth={1.5}/>
            <h1 className="text-2xl font-extrabold tracking-tighter text-white">Scholars Miracle World</h1>
          </div>
          <button onClick={() => setMobileSidebarOpen(true)} className="p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 ${colors.primary}">
            <LayoutDashboard className='w-7 h-7'/>
          </button>
        </header>

        <div className="p-8 md:p-12 space-y-12">
          
          {/* Hero Card */}
          <motion.section 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative"
          >
            {/* Gradient Glow Behind Hero */}
            <div className="absolute -inset-1 rounded-[36px] bg-linear-to-r from-blue-600 via-purple-600 to-blue-600 opacity-20 blur-[60px] pointer-events-none z-0"></div>
            
            <div className={`p-12 rounded-3xl border ${colors.border} ${colors.glass} relative z-10 grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8 items-center shadow-2xl`}>
              <div>
                <motion.p variants={staggerContainer} className="flex flex-wrap items-center gap-4">
                  <motion.span variants={fadeInUp} className="text-5xl">👋</motion.span>
                  <motion.span 
                    variants={fadeInUp}
                    className="text-5xl font-extrabold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tighter"
                  >
                    Welcome {student.name}
                  </motion.span>
                </motion.p>
                <motion.p variants={fadeInUp} className={`mt-4 text-xl ${colors.textMuted} font-light leading-relaxed`}>
                  Manage your academics, view progress, and stay updated with school activities from your premium dashboard.
                </motion.p>
              </div>
              <motion.div variants={fadeInUp} className={`p-8 text-lg ${colors.textMuted} flex flex-col gap-3 font-medium bg-slate-950 rounded-2xl border border-white/5`}>
                 <p><span className="text-slate-500">Class :</span> <span className="text-white">{student.className}</span></p>
                 <p><span className="text-slate-500">Roll No :</span> <span className="text-white">{student.rollNumber}</span></p>
              </motion.div>
            </div>
          </motion.section>

          {/* Stat Cards */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <StatCard icon={Clock3} value="94%" label="Attendance" colorClass={colors.primary} />
            <StatCard icon={BarChart3} value="91%" label="Average Marks" colorClass={colors.secondary} />
            <StatCard icon={Target} value="2 Pending" label="Assignments" colorClass={colors.primary} />
            <StatCard icon={Bell} value="5 New" label="Announcements" colorClass={colors.secondary} />
          </motion.section>

          {/* Search, Marks Table, Announcements List */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.2fr,1fr] gap-12">
            
            <div className="space-y-12">
              {/* Search Student */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
              >
                <div className={`p-8 rounded-3xl border border-white/10 ${colors.glass} shadow-xl`}>
                  <h3 className="text-center text-3xl font-bold tracking-tight text-white mb-6">
                    Search Your Details
                  </h3>
                  <div className="relative group">
                    <Search className={`absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 transition-colors duration-200 text-slate-400 group-focus-within:${colors.primary}`} />
                    <input 
                      type="text" 
                      placeholder="Search by student name" 
                      className={`w-full h-16 pl-16 pr-6 rounded-2xl bg-slate-900 border ${colors.border} text-lg ${colors.textMain} placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300`}
                    />
                    <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"></div>
                  </div>
                </div>
              </motion.section>

              {/* Recent Marks */}
              <motion.section 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
              >
                <div className={`rounded-3xl border border-white/10 ${colors.glass} shadow-xl`}>
                  <h3 className="text-center text-3xl font-bold tracking-tight text-white p-8 pb-4">Recent Marks</h3>
                  <table className="w-full text-left border-collapse">
                    <thead className="border-b border-white/5">
                      <tr>
                        <th className={`p-6 pl-8 text-xl ${colors.textDark} font-semibold uppercase tracking-wider`}>Subject</th>
                        <th className={`p-6 pr-8 text-xl ${colors.textDark} font-semibold uppercase tracking-wider text-right`}>Score</th>
                      </tr>
                    </thead>
                    <tbody className={`${colors.textMuted} text-lg font-light`}>
                      {marksData.map((mark, index) => (
                        <tr key={index} className="border-b border-white/5 last:border-b-0 hover:bg-white/5">
                          <td className="p-6 pl-8">{mark.subject}</td>
                          <td className={`p-6 pr-8 text-right font-medium ${colors.primary}`}>{mark.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.section>
            </div>

            {/* Latest Announcements */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInUp}
            >
              <div className={`p-8 rounded-3xl border border-white/10 ${colors.glass} h-full shadow-xl`}>
                <h3 className="text-center text-3xl font-bold tracking-tight text-white mb-8">Latest Announcements</h3>
                <motion.div 
                   variants={staggerContainer}
                   className='space-y-6'
                >
                  {announcementsData.map((ann, index) => {
                    const Icon = ann.Icon;
                    return (
                      <motion.div 
                        key={index}
                        variants={fadeInUp}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className={`p-6 flex items-center gap-6 bg-slate-900 rounded-2xl border border-white/5 hover:bg-white/5 transition-all group`}
                      >
                        <div className={`p-4 bg-slate-950 rounded-xl border ${colors.border} ${index % 2 === 0 ? colors.secondary : colors.primary} group-hover:scale-110 transition-transform`}>
                          <Icon className='w-7 h-7' strokeWidth={1.5} />
                        </div>
                        <p className={`text-xl ${colors.textMain} font-medium`}>{ann.title}</p>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </div>
            </motion.section>
          </div>

        </div>

        {/* Small Footer Spacer */}
        <footer className={`py-6 px-12 border-t ${colors.border} bg-slate-950 text-center text-sm ${colors.textDark}`}>
          © 2024 Scholars Miracles World. All rights reserved.
        </footer>
      </main>
      
      {/* --- Mobile Sidebar Close Overlay --- */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 0.8 }} 
            exit={{ opacity: 0 }} 
            onClick={() => setMobileSidebarOpen(false)}
            className="fixed inset-0 z-40 bg-black md:hidden"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentDashboard;