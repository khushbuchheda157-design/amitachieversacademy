import { Target, Eye, CheckCircle2, Sparkles } from "lucide-react";
import logoImg from "../assets/logo.jpeg";
import founderImg from "../assets/profile.jpeg";
import { AmbientSectionGlow } from "./ProfessionalBackground";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#fbf8f2] via-white to-[#faf8f4] overflow-hidden border-b border-slate-200/80"
    >
      <AmbientSectionGlow goldRight={false} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Academy Story */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              About Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight leading-tight">
              Nurturing Young Minds for a{" "}
              <span className="text-amber-500">Brighter Future</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Amit's Achiever's Academy is a dedicated learning platform offering quality
              private tuitions for Classes 5th to 10th across Maharashtra Board, CBSE, and ICSE,
              as well as 11th & 12th Science (PCM) and Commerce (Maths).
              Based in Bhandup (West), we bridge the gap between classroom theory and real academic confidence.
            </p>

            {/* Mission & Vision Cards */}
            <div className="mt-8 space-y-4 w-full">
              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 hover:bg-amber-50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0a1e38]">
                    Our Mission
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To build a strong academic foundation, eliminate exam fear, and help every student achieve their personal best score through structured practice and individual mentorship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-slate-100/60 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-300 text-blue-800 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0a1e38]">
                    Our Vision
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    To be the most trusted academic coaching partner for parents and students in Mumbai, fostering genuine curiosity, self-confidence, and lifelong learning habits.
                  </p>
                </div>
              </div>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
              {[
                "Personalized Home Visits in Bhandup & Mulund",
                "Full Syllabus Completion 2 Months Prior",
                "Special Prelim Test Series for 10th Board",
                "Chapter-wise Question Bank & Model Answers",
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Founder Profile Card */}
          <div className="lg:col-span-5 relative">
            {/* Subtle ambient warm glow behind card */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-amber-200 via-amber-100 to-amber-300/40 rounded-3xl transform rotate-1 opacity-70 blur-xs"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-300/80 bg-white">
              {/* Top Header Tag */}
              <div className="bg-gradient-to-r from-[#0a1e38] to-[#123055] text-white px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Founder & Lead Educator
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-200 bg-white/10 px-2.5 py-0.5 rounded-full">
                  10+ Yrs Exp
                </span>
              </div>

              {/* Founder Portrait Photo */}
              <div className="relative bg-gradient-to-b from-slate-50 via-white to-amber-50/20 overflow-hidden flex items-center justify-center pt-5 px-5">
                <img
                  src={founderImg}
                  alt="Amit Sir - Founder of Amit's Achiever's Academy"
                  className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-cover object-top rounded-2xl shadow-md border border-slate-100"
                />
              </div>

              {/* Founder Details & Credentials */}
              <div className="p-5 sm:p-6 bg-white border-t border-slate-100">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0a1e38] tracking-tight">
                      Amit Sir
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-amber-700">
                      Founder & Academic Director
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      Mathematics & Science Specialist | Board Exam Strategist
                    </p>
                  </div>

                  <img
                    src={logoImg}
                    alt="Amit's Achiever's Academy Logo"
                    className="w-12 h-12 object-contain shrink-0"
                  />
                </div>

                {/* Personal Mentor Quote */}
                <blockquote className="mt-4 p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-xs sm:text-[13px] text-slate-700 italic leading-relaxed">
                  "Every student learns at their own pace. With foundational concept clarity, continuous practice, and dedicated 1-on-1 mentorship, distinction in board exams is achievable for every child."
                </blockquote>

                {/* Micro Stats Bar */}
                <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-sm sm:text-base font-black text-[#0a1e38]">500+</div>
                    <div className="text-[10px] text-slate-500 font-medium">Students Mentored</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-sm sm:text-base font-black text-amber-600">98%</div>
                    <div className="text-[10px] text-slate-500 font-medium">Distinction Rate</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-sm sm:text-base font-black text-[#0a1e38]">1 : 1</div>
                    <div className="text-[10px] text-slate-500 font-medium">Personal Focus</div>
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
