import { useState, useEffect } from "react";
import Logo from "./Logo";
import { ArrowRight, Menu, X, Phone } from "lucide-react";

export default function Navbar({ activeSection, onEnquireClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About Us", href: "#about", id: "about" },
    { name: "Classes", href: "#classes", id: "classes" },
    { name: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
    { name: "Admissions", href: "#admissions", id: "admissions" },
    { name: "Contact Us", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5"
          : "bg-white py-3.5 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-colors ${
                    isActive
                      ? "text-amber-600 bg-amber-50"
                      : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+919768343392"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              +91 97683 43392
            </a>
            <button
              onClick={onEnquireClick}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-sm px-5 py-2 rounded-full shadow-sm hover:shadow transition-all flex items-center gap-1.5 active:scale-95"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onEnquireClick}
              className="bg-amber-400 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-full flex items-center gap-1"
            >
              <span>Enquire</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 pb-3 flex flex-col gap-1 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "text-amber-700 bg-amber-50"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 mt-1 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+919768343392"
                className="flex items-center gap-2 text-sm font-medium text-slate-700 px-4 py-2"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                +91 97683 43392
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnquireClick();
                }}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

