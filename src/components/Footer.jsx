import Logo from "./Logo";
import { Phone, MapPin, Clock, ArrowUp, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a1e38] text-white pt-14 pb-8 border-t-4 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Academy Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <Logo size="md" light={true} />
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Amit's Achiever's Academy is a premier private tuition center dedicated
              to providing high-standard academic coaching for Classes 5th to 10th
              across Maharashtra Board, CBSE, and ICSE.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://wa.me/919768343392"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Admissions</span>
              </a>
              <a
                href="tel:+919768343392"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Center</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-amber-400 transition-colors">
                  Classes & Boards
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-400 transition-colors">
                  Admissions 2025–26
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Boards & Curriculum */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Curriculum
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>Maharashtra SSC Board</li>
              <li>CBSE Curriculum</li>
              <li>ICSE Board</li>
              <li>Classes 5th to 8th (Middle)</li>
              <li>Classes 9th & 10th (Secondary)</li>
              <li>Personalized Home Tuitions</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Center Details
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/place/Marigold+Building,+Ganesh+Nagar,+Bhandup+West,+Mumbai,+Maharashtra+400078/data=!4m2!3m1!1s0x3be7b876efc152af:0xceccd4bf243bf3d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors"
                >
                  B-504, Marigold Building, Behind Mangatram Petrol Pump, Bhandup (W), Mumbai - 400078
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+919768343392" className="hover:text-amber-300 font-semibold">
                  +91 97683 43392
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:amitachieversacademy13@gmail.com" className="hover:text-amber-300 font-medium break-all">
                  amitachieversacademy13@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p>Mon - Sat: 10:00 AM – 8:00 PM</p>
                  <p className="text-slate-400">Sun: By Appointment</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Amit's Achiever's Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-500">LEARN • GROW • ACHIEVE</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center transition-colors text-white"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

