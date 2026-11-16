import { ArrowRight, Sparkles, MessageCircle, ShieldCheck, GraduationCap, CheckCircle } from "lucide-react";
import { HeroRibbonCurves, SubtleGridOverlay } from "./ProfessionalBackground";

export default function HeroSection({ onEnrollClick }) {
  const highlights = [
    { title: "Concept Clarity", desc: "Foundational depth, zero rote learning" },
    { title: "Regular Practice", desc: "Daily problem sets & revision papers" },
    { title: "Personal Attention", desc: "Private home visits & micro batches" },
    { title: "Better Results", desc: "Proven 90%+ board exam distinctions" },
  ];

  const stats = [
    { value: "10+", label: "Years Excellence" },
    { value: "500+", label: "Students Guided" },
    { value: "98%", label: "Board Pass Rate" },
    { value: "1 : 1", label: "Personal Focus" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#fdfbf7] via-white to-[#fbf8f2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-amber-200/60"
    >
      {/* Signature Golden & Navy Ribbon Curves & Subtle Academic Grid Texture */}
      <HeroRibbonCurves />
      <SubtleGridOverlay />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold shadow-2xs mb-4">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Private Home Tuitions & Micro-Batches</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a1e38] tracking-tight leading-[1.12]">
              Straight Way to <br />
              <span className="text-amber-500">Premium Education!</span>
            </h1>

            {/* Board Coverage Banner */}
            <div className="mt-3.5 flex flex-wrap items-center gap-2 text-sm sm:text-base font-bold text-slate-700">
              <span className="bg-slate-100 px-2.5 py-0.5 rounded-md text-[#0a1e38]">Classes 5th to 10th</span>
              <span className="text-slate-300">•</span>
              <span className="text-amber-700">Maharashtra Board</span>
              <span className="text-slate-300">•</span>
              <span className="text-blue-700">CBSE</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700">ICSE</span>
            </div>

            {/* Subtitle */}
            <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl font-normal">
              Empowering students in Bhandup & Mumbai eastern suburbs with structured learning,
              rigorous chapter-wise testing, and dedicated mentor attention to excel in school exams and board finals.
            </p>

            {/* 4 Feature Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-7 w-full">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs hover:border-amber-300 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1 w-full sm:w-auto">
              <button
                onClick={onEnrollClick}
                className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 text-sm sm:text-base cursor-pointer"
              >
                <span>Book Free Demo Class</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <a
                href="https://wa.me/919768343392?text=Hello%20Amit%20Sir!%20I%20would%20like%20to%20enquire%20for%20tuitions%20for%20my%20child."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-slate-300 text-slate-800 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 font-bold transition-all text-sm sm:text-base bg-white"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Amit Sir</span>
              </a>
            </div>

            {/* Real Stats Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 grid grid-cols-4 gap-4 w-full max-w-xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-xl sm:text-2xl font-black text-[#0a1e38] tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual with Real Indian Students Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Clean decorative backdrop shape */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-200 via-amber-100 to-amber-300/40 rounded-3xl transform rotate-1 opacity-70"></div>

              {/* Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=900&q=80"
                  alt="Amit's Achiever's Academy students studying"
                  className="w-full h-80 sm:h-96 object-cover object-top"
                  loading="eager"
                />

                {/* Subtle dark gradient overlay at bottom for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e38]/85 via-transparent to-transparent"></div>

                {/* Bottom text inside card */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Personalized Mentoring</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-100 mt-0.5">
                    Structured learning tailored for Classes 5th to 10th
                  </p>
                </div>
              </div>

              {/* Floating Badge matching the design mockup */}
              <div className="absolute -bottom-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border-2 border-amber-300 shadow-xl flex items-center gap-3.5 z-20 max-w-[280px] sm:max-w-xs">
                <div className="w-11 h-11 rounded-xl bg-[#0a1e38] text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-black text-[#0a1e38] leading-tight">
                    Admissions Open
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-amber-600 mt-0.5">
                    Academic Year 2025–26
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
