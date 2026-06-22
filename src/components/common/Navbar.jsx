import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link ,NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Sun, Moon, GraduationCap, Trophy, 
  ChevronDown, ArrowRight, BookOpen, Users, Star, 
  Microscope, Calendar, Award
} from "lucide-react";

// --- Configuration & Data --- //

const ROUTES = {
  home: "/",
  about: "/about",
  academics: "/academics",
  admissions: "/admissions",
  guinness: "/guinness",
  gallery: "/gallery",
  events: "/events",
  facilities: "/facilities",
  news: "/news",
  contact: "/contact",
  student: "/student",
  admin: "/admin",
  apply: "/admissions/apply" // Added Apply Route
};

const ACADEMICS_MENU = [
  {
    title: "Academic Programs",
    icon: <BookOpen className="w-5 h-5" />,
    links: [
      { name: "Pre Primary", to: "/academics#grades" },
      { name: "Primary School", to: "/academics#grades" },
      { name: "High School", to: "/academics#grades" }
    ]
  },
  {
    title: "Learning",
    icon: <Microscope className="w-5 h-5" />,
    links: [
      { name: "Curriculum", to: "/academics#curriculum" },
      { name: "Smart Classrooms", to: "/academics#smart-classrooms" },
      { name: "Examination System", to: "/academics#examination-system" }
    ]
  },
  {
    title: "Achievements",
    icon: <Star className="w-5 h-5" />,
    links: [
      { name: "Results", to: "/academics#results" },
      { name: "Olympiads", to: "/academics#olympiads" },
      { name: "Student Excellence", to: "/academics#student-excellence" }
    ]
  }
];

const ADMISSIONS_MENU = [
  {
    title: "Admissions",
    icon: <Users className="w-5 h-5" />,
    links: [
      { name: "Admission Process", to: "/admissions/process" },
      { name: "Eligibility", to: "/admissions/eligibility" },
      { name: "Fee Structure", to: "/admissions/fees" }
    ]
  },
  {
    title: "Resources",
    icon: <Calendar className="w-5 h-5" />,
    links: [
      { name: "Brochure", to: "/admissions/brochure" },
      { name: "FAQs", to: "/admissions/faqs" },
      { name: "Important Dates", to: "/admissions/dates" }
    ]
  }
];

// --- Custom Hooks --- //

const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return [theme, setTheme];
};

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return isScrolled;
};

// --- Sub-Components --- //

const GuinnessBadge = React.memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    className="hidden 2xl:flex items-center gap-3 px-4 py-2 bg-linear-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700/50 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.15)] dark:shadow-[0_0_15px_rgba(245,158,11,0.05)] cursor-pointer"
  >
    <motion.div
      animate={{ y: [-2, 2, -2] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      className="text-amber-500 dark:text-amber-400 drop-shadow-md"
    >
      <Trophy size={18} />
    </motion.div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest leading-none mb-0.5">
        Guinness World Records
      </span>
      <span className="text-[11px] font-medium text-amber-800/80 dark:text-amber-200/80 leading-none">
        3 Records Achieved
      </span>
    </div>
  </motion.div>
));

const MegaMenu = React.memo(({ sections, actions }) => (
  <motion.div
    initial={{ opacity: 0, y: 15, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.98 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-200 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl border border-gray-200/50 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
  >
    <div className="grid grid-cols-3 p-8 gap-8 relative z-10">
      {sections.map((section, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-gray-900 dark:text-white font-display font-semibold border-b border-gray-100 dark:border-white/10 pb-2">
            <span className="text-blue-600 dark:text-blue-400">{section.icon}</span>
            {section.title}
          </div>
          <ul className="flex flex-col gap-3">
            {section.links.map((link, lIdx) => (
              <li key={lIdx}>
                <NavLink
                  to={link.to}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 group"
                >
                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    
    {actions && (
      <div className="bg-gray-50/50 dark:bg-black/20 p-6 flex items-center justify-between border-t border-gray-100 dark:border-white/5">
        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          Ready to join Miracles World?
        </div>
        <div className="flex gap-4">
          <NavLink to="/admissions/enquiry" className="px-5 py-2 text-sm font-semibold rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors dark:text-white">
            Enquiry Form
          </NavLink>
          <NavLink to="/admissions/apply" className="px-5 py-2 text-sm font-semibold rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-blue-500/30 transition-shadow">
            Apply Online
          </NavLink>
        </div>
      </div>
    )}
  </motion.div>
));

// --- Main Navbar Component --- //

export default function Navbar() {
  const isScrolled = useScroll();
  const [theme, setTheme] = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  const isDark = theme === "dark";

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "unset";
  }, [isMobileOpen]);

  const navItemClass = useCallback(({ isActive }) => 
    `relative px-2.5 py-2 rounded-full transition-colors font-semibold text-[13px] group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
      isActive 
        ? "text-blue-600 dark:text-blue-400" 
        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
    }`, []
  );

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "py-3 bg-white/75 dark:bg-black/75 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Branding */}
            <div className="flex items-center gap-6 z-50">
              <NavLink to={ROUTES.home} className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl outline-none">
                <div className="p-2.5 bg-linear-to-brrom-blue-600 to-purple-600 rounded-xl text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h1 className="font-display font-bold text-xl md:text-2xl tracking-tight text-gray-900 dark:text-white">
                    Miracles World
                  </h1>
                  <p className="text-[9px] md:text-[11px] font-semibold text-gray-500 dark:text-gray-400 tracking-[0.2em] uppercase">
                    Excellence Beyond Limits
                  </p>
                </div>
              </NavLink>
              
              <GuinnessBadge />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex items-center gap-0.5">
                <li><NavLink to={ROUTES.home} className={navItemClass}>Home</NavLink></li>
                <li><NavLink to={ROUTES.about} className={navItemClass}>About</NavLink></li>
                
                {/* Academics Mega Menu Trigger */}
                <li 
                  className="relative group"
                  onMouseEnter={() => setActiveMenu("academics")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                <div className="flex items-center gap-1 px-2.5 py-2 rounded-full font-semibold text-[13px]">
                   <Link to="/academics"className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" >
                   Academics
                  </Link>

  <ChevronDown size={14} className={`text-gray-600 dark:text-gray-300 transition-transform duration-300 ${activeMenu === "academics" ? "rotate-180" : ""}`} />

                </div>
                  <AnimatePresence>
                    {activeMenu === "academics" && <MegaMenu sections={ACADEMICS_MENU} />}
                  </AnimatePresence>
                </li>

                {/* Admissions Mega Menu Trigger */}
                <li 
                  className="relative group"
                  onMouseEnter={() => setActiveMenu("admissions")}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                 <div className="flex items-center gap-1 px-2.5 py-2 rounded-full font-semibold text-[13px]">
                  <Link to="/admissions"  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                 Admissions
                </Link>

  <ChevronDown
    size={14}
    className={`text-gray-600 dark:text-gray-300 transition-transform duration-300 ${
      activeMenu === "admissions" ? "rotate-180" : ""
    }`}
  />

</div>
                  <AnimatePresence>
                    {activeMenu === "admissions" && <MegaMenu sections={ADMISSIONS_MENU} actions />}
                  </AnimatePresence>
                </li>

                {/* Special Guinness Link */}
                <li>
                  <NavLink 
                    to={ROUTES.guinness} 
                    className={({ isActive }) => `relative px-2.5 py-2 rounded-full transition-colors font-semibold text-[13px] group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isActive 
                        ? "text-amber-500" 
                        : "text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 drop-shadow-[0_0_8px_rgba(217,119,6,0.3)]"
                    }`}
                  >
                    Guinness ⭐
                  </NavLink>
                </li>

                <li><NavLink to={ROUTES.gallery} className={navItemClass}>Gallery</NavLink></li>
                <li><NavLink to={ROUTES.events} className={navItemClass}>Events</NavLink></li>
                <li><NavLink to={ROUTES.facilities} className={navItemClass}>Facilities</NavLink></li>
                <li><NavLink to={ROUTES.news} className={navItemClass}>News</NavLink></li>
                <li><NavLink to={ROUTES.contact} className={navItemClass}>Contact</NavLink></li>
              </ul>
            </div>

            {/* Controls & CTA */}
            <div className="flex items-center gap-4 z-50">
              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                className="p-2.5 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </button>

              <div className="hidden lg:flex items-center gap-3">
                <NavLink
                  to={ROUTES.student}
                  className="px-5 py-2.5 text-sm font-semibold rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-gray-900 dark:hover:border-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Student Portal
                </NavLink>
                {/* Updated routing to ROUTES.apply */}
                <NavLink
                  to={ROUTES.apply}
                  className="px-6 py-2.5 text-sm font-semibold rounded-full text-white bg-linear-to-r from-blue-600 to-purple-600 shadow-lg hover:shadow-blue-500/40 transition-shadow outline-none focus-visible:ring-2 focus-visible:ring-purple-500 hover:scale-105 active:scale-95 duration-200"
                >
                  Apply Now
                </NavLink>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-expanded={isMobileOpen}
                aria-label="Toggle mobile menu"
                className="lg:hidden p-2 -mr-2 text-gray-900 dark:text-white outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full"
              >
                {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={(e, { offset, velocity }) => {
              if (offset.y > 150 || velocity.y > 500) setIsMobileOpen(false);
            }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-2xl pt-28 pb-10 px-6 overflow-y-auto flex flex-col lg:hidden"
          >
            <div className="flex flex-col gap-8 flex-1">
              <motion.ul 
                className="flex flex-col gap-4"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {[
                  { name: "Home", to: ROUTES.home },
                  { name: "About", to: ROUTES.about },
                  { name: "Academics", to: ROUTES.academics },
                  { name: "Admissions", to: ROUTES.admissions },
                  { name: "Guinness World Records ⭐", to: ROUTES.guinness, special: true },
                  { name: "Gallery", to: ROUTES.gallery },
                  { name: "Events", to: ROUTES.events },
                  { name: "Facilities", to: ROUTES.facilities },
                  { name: "News", to: ROUTES.news },
                  { name: "Contact", to: ROUTES.contact },
                ].map((link) => (
                  <motion.li
                    key={link.name}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 20 }
                    }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `block text-3xl font-display font-bold tracking-tight ${
                        link.special 
                          ? "text-amber-500" 
                          : isActive 
                            ? "text-blue-600 dark:text-blue-400" 
                            : "text-gray-900 dark:text-white"
                      }`}
                    >
                      {link.name}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col gap-4 mt-auto pt-8 border-t border-gray-200 dark:border-white/10"
              >
                <div className="flex items-center gap-3 justify-center mb-4 text-amber-600 dark:text-amber-400">
                  <Award size={20} />
                  <span className="font-semibold text-sm uppercase tracking-widest">3 World Records</span>
                </div>
                <NavLink
                  to={ROUTES.student}
                  className="w-full py-4 text-center text-lg font-semibold rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200"
                >
                  Student Portal
                </NavLink>
                {/* Updated routing to ROUTES.apply */}
                <NavLink
                  to={ROUTES.apply}
                  className="w-full py-4 text-center text-lg font-semibold rounded-full text-white bg-linear-to-r from-blue-600 to-purple-600 shadow-lg"
                >
                  Apply Now
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}