import { Phone, MapPin, Clock, MessageSquare, ExternalLink, Navigation, Mail } from "lucide-react";
import { AmbientSectionGlow, SubtleGridOverlay } from "./ProfessionalBackground";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call & WhatsApp Support",
      detail: "+91 97683 43392",
      subdetail: "Direct connection with Amit Sir for admissions & enquiries",
      href: "tel:+919768343392",
      actionText: "Call Now",
    },
    {
      icon: Mail,
      title: "Official Email Address",
      detail: "amitachieversacademy13@gmail.com",
      subdetail: "Send your admission enquiries & questions directly",
      href: "mailto:amitachieversacademy13@gmail.com",
      actionText: "Send Email",
    },
    {
      icon: MapPin,
      title: "Tuition Center Location",
      detail: "B-504, Marigold Building, Behind Mangatram Petrol Pump, Bhandup (W), Mumbai - 78",
      subdetail: "Ganesh Nagar, Behind Mangatram Petrol Pump, Bhandup West",
      href: "https://www.google.com/maps/place/Marigold+Building,+Ganesh+Nagar,+Bhandup+West,+Mumbai,+Maharashtra+400078/data=!4m2!3m1!1s0x3be7b876efc152af:0xceccd4bf243bf3d2",
      actionText: "Open in Google Maps",
    },
    {
      icon: Clock,
      title: "Center Timings",
      detail: "Mon – Sat : 10:00 AM – 8:00 PM",
      subdetail: "Sunday : By Appointment",
      href: null,
      actionText: null,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#faf8f4] via-[#f7f4ec] to-[#faf8f4] overflow-hidden border-b border-amber-200/50"
    >
      <AmbientSectionGlow goldRight={true} />
      <SubtleGridOverlay />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              Contact Us
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight leading-tight">
              Get in <span className="text-amber-500">Touch</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              We're here to answer your queries and help you with admissions, batch timings,
              fees, and personalized home tuition arrangements.
            </p>

            {/* Contact Details Cards */}
            <div className="mt-8 space-y-4 w-full">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-amber-50/50 hover:border-amber-300 transition-all shadow-2xs"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#0a1e38] text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {item.title}
                      </h3>
                      <p className="mt-0.5 text-base sm:text-lg font-black text-[#0a1e38] whitespace-pre-line">
                        {item.detail}
                      </p>
                      {item.subdetail && (
                        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                          {item.subdetail}
                        </p>
                      )}

                      {item.href && (
                        <div className="mt-2.5 flex items-center gap-3">
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline underline-offset-4"
                          >
                            <span>{item.actionText}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions Row */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5 w-full">
              <a
                href="https://wa.me/919768343392?text=Hello%20Amit%20Sir!%20I%20would%20like%20to%20know%20about%20admissions%20at%20Amit's%20Achiever's%20Academy."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+91 97683 43392)</span>
              </a>

              <a
                href="tel:+919768343392"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#0a1e38] text-[#0a1e38] hover:bg-[#0a1e38] hover:text-white font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Real Interactive Google Map */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 bg-white">
              {/* Header */}
              <div className="bg-[#0a1e38] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold tracking-wide uppercase">
                    Marigold Building, Bhandup (W)
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/place/Marigold+Building,+Ganesh+Nagar,+Bhandup+West,+Mumbai,+Maharashtra+400078/data=!4m2!3m1!1s0x3be7b876efc152af:0xceccd4bf243bf3d2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-amber-300 hover:text-white font-semibold flex items-center gap-1"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Real Responsive Google Map Embed for Marigold Building */}
              <div className="relative h-72 sm:h-80 w-full bg-slate-100">
                <iframe
                  title="Marigold Building, Ganesh Nagar, Bhandup West Map"
                  src="https://maps.google.com/maps?q=Marigold+Building,+Ganesh+Nagar,+Bhandup+West,+Mumbai,+Maharashtra+400078&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Location Landmark note */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-medium">
                  Marigold Building, Ganesh Nagar, Bhandup (W)
                </span>
                <span className="font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">
                  Mumbai 400078
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
