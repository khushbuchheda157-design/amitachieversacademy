import { MaharashtraBoardEmblem, CBSEBoardEmblem, ICSEBoardEmblem } from "./BoardEmblems";
import { Check, Calendar, Layers, BookOpen, Award } from "lucide-react";
import { SubtleGridOverlay, AmbientSectionGlow } from "./ProfessionalBackground";

export default function ClassesSection({ onSelectBoard }) {
  const boards = [
    {
      id: "maharashtra",
      name: "Maharashtra Board",
      short: "SSC Board",
      badge: "State Board",
      cardBg: "bg-white border-amber-300 hover:border-amber-400 hover:shadow-md",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      checkColor: "text-amber-600",
      emblem: MaharashtraBoardEmblem,
      features: [
        "Complete Balbharati textbook & syllabus coverage",
        "Algebra, Geometry & Science practicals mastery",
        "SSC Board model question papers & prelim tests",
        "Special language support for Marathi & Hindi",
      ],
    },
    {
      id: "cbse",
      name: "CBSE Curriculum",
      short: "CBSE Board",
      badge: "National Board",
      cardBg: "bg-white border-blue-300 hover:border-blue-400 hover:shadow-md",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      checkColor: "text-blue-600",
      emblem: CBSEBoardEmblem,
      features: [
        "In-depth NCERT concepts with exemplar problem solving",
        "Competency & case-based questions for new patterns",
        "Internal assessments, lab manuals & project assistance",
        "Weekly chapter test series with detailed corrections",
      ],
    },
    {
      id: "icse",
      name: "ICSE Board",
      short: "CISCE Board",
      badge: "Council Board",
      cardBg: "bg-white border-emerald-300 hover:border-emerald-400 hover:shadow-md",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      checkColor: "text-emerald-600",
      emblem: ICSEBoardEmblem,
      features: [
        "Extensive syllabus coverage with analytical depth",
        "Rigorous practice in Physics, Chemistry, Biology & Math",
        "English language grammar & literature guidance",
        "Past 10 years ICSE specimen papers & solutions",
      ],
    },
  ];

  const highlights = [
    {
      icon: Calendar,
      title: "Grades Covered",
      value: "5th to 10th",
      desc: "Middle school to board finals",
    },
    {
      icon: Layers,
      title: "Boards Supported",
      value: "SSC | CBSE | ICSE",
      desc: "Tailored to your school syllabus",
    },
    {
      icon: BookOpen,
      title: "Core Subjects",
      value: "Maths, Science & more",
      desc: "Complete concept clarity",
    },
    {
      icon: Award,
      title: "Board Prelims",
      value: "Full Mock Exams",
      desc: "Strict timing & exam simulations",
    },
  ];

  return (
    <section
      id="classes"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#faf8f4] via-[#f7f4ec] to-[#faf8f4] overflow-hidden border-b border-amber-200/50"
    >
      <AmbientSectionGlow goldRight={true} />
      <SubtleGridOverlay />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            Classes & Boards
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight">
            Comprehensive Tuitions for <span className="text-amber-500">5th to 10th</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We offer structured, result-oriented learning for all major boards with dedicated study materials.
          </p>
        </div>

        {/* 3 Board Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {boards.map((board) => {
            const EmblemComponent = board.emblem;
            return (
              <div
                key={board.id}
                className={`relative rounded-3xl p-6 sm:p-7 border-2 transition-all duration-200 shadow-xs flex flex-col justify-between ${board.cardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <EmblemComponent className="w-16 h-16" />
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border ${board.badgeColor}`}
                    >
                      {board.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#0a1e38]">
                    {board.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5 mb-5">
                    Grades 5th, 6th, 7th, 8th, 9th & 10th
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-slate-100">
                    {board.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${board.checkColor}`} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onSelectBoard && onSelectBoard(board.name)}
                  className="mt-6 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-amber-400 hover:text-slate-950 border border-slate-200 hover:border-amber-400 font-bold text-xs sm:text-sm text-[#0a1e38] transition-all cursor-pointer"
                >
                  Enquire for {board.short} →
                </button>
              </div>
            );
          })}
        </div>

        {/* Highlight Stats Bar matching the design */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                    idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.title}
                  </span>
                  <span className="text-base sm:text-lg font-black text-[#0a1e38] mt-0.5">
                    {item.value}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
