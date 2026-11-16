import { Star, Quote, Award } from "lucide-react";
import { SubtleGridOverlay, AmbientSectionGlow } from "./ProfessionalBackground";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Mrs. Sunita Kulkarni",
      relation: "Parent of Rohan (Class 10th SSC)",
      location: "Bhandup (W)",
      quote:
        "Rohan was very anxious about Geometry and Science before joining Amit Sir. The individual home attention and chapter-wise mock papers boosted his confidence tremendously. He scored 93.6% in his SSC Boards!",
      score: "93.6% in SSC Board",
    },
    {
      name: "Mr. Rajesh Sharma",
      relation: "Parent of Aarav (Class 10th CBSE)",
      location: "Nahur / Bhandup",
      quote:
        "What sets Amit's Achiever's Academy apart is concept clarity. They don't just rush through the NCERT syllabus; every doubt is resolved patiently. His score jumped from 72% in 9th to 95.2% in 10th finals.",
      score: "95.2% in CBSE Board",
    },
    {
      name: "Mrs. Meenakshi Iyer",
      relation: "Parent of Ananya (Class 9th ICSE)",
      location: "Mulund (W)",
      quote:
        "Finding quality private home tuitions for ICSE syllabus in Mumbai is difficult. Amit Sir's structured worksheets and regular feedback after tests gave us complete peace of mind. Ananya loves studying now.",
      score: "Top 3 in Class",
    },
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-[#faf8f4] via-[#f7f4ec] to-[#faf8f4] border-b border-amber-200/50 overflow-hidden">
      <AmbientSectionGlow goldRight={true} />
      <SubtleGridOverlay />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-200">
            Proven Results & Reviews
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-[#0a1e38] tracking-tight">
            Trusted by Parents Across <span className="text-amber-500">Bhandup & Mumbai</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real feedback from families whose children transformed their academic scores with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <Award className="w-3.5 h-3.5" />
                    {r.score}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-amber-200 mb-2" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{r.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-[#0a1e38]">{r.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{r.relation} • {r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

