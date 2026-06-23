import { Routes, Route, useLocation } from "react-router-dom";
import NewsBlog from "./pages/NewsBlog";
import Navbar from "./components/common/Navbar";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Admissions from "./pages/Admissions"; // Import the Admissions component
import Facilities from "./pages/Facilities";
import PortalLogin from "./pages/PortalLogin";

import PortalSignup from "./pages/PortalSignup";

import StudentDashboard from "./components/dashboard/Student/StudentDashboard";

import AdminDashboard from "./components/dashboard/Admin/AdminDashboard";
// Admissions commented because empty
// import Admissions from "./pages/Admissions";

function App() {
  const location = useLocation();

const hideNavbar =
  location.pathname.startsWith("/portal");
  return (
    <>
      <ScrollToHash />
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="/portal/login" element={<PortalLogin />} />

        <Route path="/portal/signup" element={<PortalSignup />} />

        <Route path="/portal/student" element={<StudentDashboard />} />

        <Route path="/portal/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />

        <Route path="/academics" element={<Academics />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/news" element={<NewsBlog />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;