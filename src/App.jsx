import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ClassesSection from "./components/ClassesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AdmissionsSection from "./components/AdmissionsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import EnquiryModal from "./components/EnquiryModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState("Maharashtra");

  // Track active section as user scrolls
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "classes",
      "why-choose-us",
      "admissions",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleEnrollClick = () => {
    const admissionsEl = document.getElementById("admissions");
    if (admissionsEl) {
      admissionsEl.scrollIntoView({ behavior: "smooth" });
    } else {
      setModalOpen(true);
    }
  };

  const handleSelectBoard = (boardName) => {
    if (boardName.includes("Maharashtra")) setSelectedBoard("Maharashtra");
    else if (boardName.includes("CBSE")) setSelectedBoard("CBSE");
    else if (boardName.includes("ICSE")) setSelectedBoard("ICSE");

    const admissionsEl = document.getElementById("admissions");
    if (admissionsEl) {
      admissionsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-slate-800 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-900">
      {/* Top Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onEnquireClick={() => setModalOpen(true)}
      />

      {/* Main Website Sections */}
      <main className="flex-1">
        {/* Screen 1: Home / Hero */}
        <HeroSection onEnrollClick={handleEnrollClick} />

        {/* Screen 2: About Us */}
        <AboutSection />

        {/* Screen 3: Classes & Boards */}
        <ClassesSection onSelectBoard={handleSelectBoard} />

        {/* Screen 4: Why Choose Us */}
        <WhyChooseUsSection />

        {/* Real Testimonials & Parent Reviews */}
        <TestimonialsSection />

        {/* Screen 5: Admissions */}
        <AdmissionsSection preselectedBoard={selectedBoard} />

        {/* Screen 6: Contact Us with Real Google Maps */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Quick Admission Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultBoard={selectedBoard}
      />
    </div>
  );
}
