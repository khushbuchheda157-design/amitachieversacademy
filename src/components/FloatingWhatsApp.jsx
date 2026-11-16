import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/919768343392?text=Hello%20Amit's%20Achiever's%20Academy!%20I%20would%20like%20to%20enquire%20about%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-8 h-8 fill-white text-emerald-500" />
      </a>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with Admissions (+91 97683 43392)
      </span>
    </div>
  );
}

