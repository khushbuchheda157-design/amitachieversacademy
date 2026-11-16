import { useState } from "react";
import {
  CheckCircle2,
  MessageCircle,
  Sparkles,
  User,
  BookOpen,
  Monitor,
  Users,
  Mail,
  Send,
  Loader2,
  RefreshCw,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { AmbientSectionGlow, SubtleGridOverlay } from "./ProfessionalBackground";

export default function AdmissionsSection({ preselectedBoard = "" }) {
  const [formData, setFormData] = useState({
    studentName: "",
    mode: "Offline", // "Offline" | "Online"
    studentClass: "10th (Board Exam Year)",
    board: preselectedBoard || "Maharashtra",
    phoneNumber: "",
  });

  const [prevBoardProp, setPrevBoardProp] = useState(preselectedBoard);
  if (preselectedBoard && preselectedBoard !== prevBoardProp) {
    setPrevBoardProp(preselectedBoard);
    setFormData((prev) => ({ ...prev, board: preselectedBoard }));
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"
  const [needsActivation, setNeedsActivation] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Available classes for Online vs Offline
  const onlineClasses = [
    { value: "9th (Maharashtra Board)", label: "Class 9th (Maharashtra Board)" },
    { value: "10th (Maharashtra Board)", label: "Class 10th (Maharashtra Board)" },
    { value: "11th Science (PCM)", label: "Class 11th Science (PCM)" },
    { value: "12th Science (PCM)", label: "Class 12th Science (PCM)" },
    { value: "11th Commerce (Maths)", label: "Class 11th Commerce (Maths)" },
    { value: "12th Commerce (Maths)", label: "Class 12th Commerce (Maths)" },
  ];

  const offlineClasses = [
    { value: "5th", label: "Class 5th" },
    { value: "6th", label: "Class 6th" },
    { value: "7th", label: "Class 7th" },
    { value: "8th", label: "Class 8th" },
    { value: "9th", label: "Class 9th" },
    { value: "10th (Board Exam Year)", label: "Class 10th (Board Exam Year)" },
    { value: "11th Science (PCM)", label: "Class 11th Science (PCM)" },
    { value: "12th Science (PCM)", label: "Class 12th Science (PCM)" },
    { value: "11th Commerce (Maths)", label: "Class 11th Commerce (Maths)" },
    { value: "12th Commerce (Maths)", label: "Class 12th Commerce (Maths)" },
  ];

  const currentClassOptions = formData.mode === "Online" ? onlineClasses : offlineClasses;

  // Handle Mode Change (Online / Offline)
  const handleModeChange = (newMode) => {
    setFormData((prev) => {
      let nextClass = prev.studentClass;
      let nextBoard = prev.board;

      if (newMode === "Online") {
        if (["5th", "6th", "7th", "8th"].includes(prev.studentClass)) {
          nextClass = "10th (Maharashtra Board)";
          nextBoard = "Maharashtra";
        } else if (prev.studentClass === "9th") {
          nextClass = "9th (Maharashtra Board)";
          nextBoard = "Maharashtra";
        } else if (prev.studentClass === "10th (Board Exam Year)") {
          nextClass = "10th (Maharashtra Board)";
          nextBoard = "Maharashtra";
        } else if (!onlineClasses.some((c) => c.value === prev.studentClass)) {
          nextClass = "10th (Maharashtra Board)";
          nextBoard = "Maharashtra";
        } else if (nextClass.includes("9th") || nextClass.includes("10th")) {
          nextBoard = "Maharashtra";
        }
      } else {
        if (prev.studentClass === "9th (Maharashtra Board)") {
          nextClass = "9th";
        } else if (prev.studentClass === "10th (Maharashtra Board)") {
          nextClass = "10th (Board Exam Year)";
        }
      }

      return {
        ...prev,
        mode: newMode,
        studentClass: nextClass,
        board: nextBoard,
      };
    });
  };

  // Handle Class Change
  const handleClassChange = (newClass) => {
    setFormData((prev) => {
      let nextBoard = prev.board;

      if (formData.mode === "Online") {
        if (newClass.includes("9th") || newClass.includes("10th")) {
          nextBoard = "Maharashtra";
        } else if (nextBoard === "ICSE") {
          nextBoard = "Maharashtra";
        }
      } else {
        if ((newClass.includes("Science") || newClass.includes("Commerce")) && nextBoard === "ICSE") {
          nextBoard = "Maharashtra";
        }
      }

      return {
        ...prev,
        studentClass: newClass,
        board: nextBoard,
      };
    });
  };

  // Determine available boards for the current mode & class
  const getAvailableBoards = () => {
    if (formData.mode === "Online") {
      if (formData.studentClass.includes("9th") || formData.studentClass.includes("10th")) {
        return ["Maharashtra"];
      }
      return ["Maharashtra", "CBSE"];
    }

    if (formData.studentClass.includes("Science") || formData.studentClass.includes("Commerce")) {
      return ["Maharashtra", "CBSE"];
    }

    return ["Maharashtra", "CBSE", "ICSE"];
  };

  const availableBoards = getAvailableBoards();

  // Send Form to amitachieversacademy13@gmail.com
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phoneNumber) {
      alert("Please fill in student name and contact number.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setNeedsActivation(false);
    setStatusMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/amitachieversacademy13@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Admission Enquiry: ${formData.studentName} (${formData.studentClass} - ${formData.mode})`,
          "Student Name": formData.studentName,
          "Tuition Mode": formData.mode,
          "Class / Course": formData.studentClass,
          "Board": formData.board,
          "WhatsApp Number": `+91 ${formData.phoneNumber}`,
          _captcha: "false",
          _template: "table",
        }),
      });

      const resData = await response.json();

      if (resData.message?.includes("Activation")) {
        setSubmitStatus("success");
        setNeedsActivation(true);
        setStatusMessage(
          "Activation required: FormSubmit has sent a confirmation email to amitachieversacademy13@gmail.com. Please open your Gmail and click 'Activate Form'."
        );
      } else if (response.ok || resData.success === "true") {
        setSubmitStatus("success");
        setNeedsActivation(false);
        setStatusMessage(
          "Your admission enquiry has been delivered directly to amitachieversacademy13@gmail.com. Amit Sir will contact you shortly!"
        );
      } else {
        throw new Error(resData.message || "Failed to send");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Fallback: mailto link
      const mailtoSubject = encodeURIComponent(
        `Admission Enquiry: ${formData.studentName} (${formData.studentClass})`
      );
      const mailtoBody = encodeURIComponent(
        `Student Name: ${formData.studentName}\nTuition Mode: ${formData.mode}\nClass: ${formData.studentClass}\nBoard: ${formData.board}\nPhone: +91 ${formData.phoneNumber}`
      );
      window.open(`mailto:amitachieversacademy13@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`);
      setSubmitStatus("success");
      setNeedsActivation(false);
      setStatusMessage("Enquiry prepared in your email client for amitachieversacademy13@gmail.com!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendViaEmailClient = () => {
    const mailtoSubject = encodeURIComponent(
      `Admission Enquiry: ${formData.studentName || "Student"} (${formData.studentClass})`
    );
    const mailtoBody = encodeURIComponent(
      `Student Name: ${formData.studentName || ""}\nTuition Mode: ${formData.mode}\nClass / Course: ${formData.studentClass}\nBoard: ${formData.board}\nContact Number: +91 ${formData.phoneNumber || ""}\n\nPlease share batch schedule and admission details. Thank you!`
    );
    window.open(`mailto:amitachieversacademy13@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`);
  };

  const handleWhatsAppDirect = () => {
    const message = `Hello Amit Sir!%0A%0AI am submitting an enquiry for admission at *Amit's Achiever's Academy*:%0A- *Student Name:* ${encodeURIComponent(
      formData.studentName || "Student"
    )}%0A- *Tuition Mode:* ${encodeURIComponent(
      formData.mode
    )}%0A- *Class / Course:* ${encodeURIComponent(
      formData.studentClass
    )}%0A- *Board:* ${encodeURIComponent(
      formData.board
    )}%0A- *WhatsApp Number:* +91 ${encodeURIComponent(
      formData.phoneNumber || ""
    )}%0A%0A(Sent to amitachieversacademy13@gmail.com)%0APlease share batch timings and demo class schedule. Thank you!`;

    const whatsappUrl = `https://wa.me/919768343392?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const checklist = [
    "Classes 5th to 10th (All Major Boards Offline)",
    "Online Coaching for 9th, 10th (MH Board) & 11th-12th (Sci PCM / Comm Maths)",
    "Direct Admission Enquiries to amitachieversacademy13@gmail.com",
    "Limited Batches for Guaranteed Personal Attention",
    "Early Bird Enrollment Open for 2025–26",
  ];

  return (
    <section
      id="admissions"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-[#fbf8f2] via-white to-[#faf8f4] overflow-hidden border-b border-slate-200/80"
    >
      <AmbientSectionGlow goldRight={false} />
      <SubtleGridOverlay />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4 border border-amber-200">
              Admissions
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a1e38] tracking-tight leading-tight">
              Admissions Open <br />
              <span className="text-amber-500">Academic Year 2025–26</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              Secure your child's seat early and give them the right academic guidance.
              Available in both interactive Online and classroom Offline formats.
            </p>

            {/* Checklist */}
            <div className="mt-6 space-y-3 w-full">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 fill-amber-500 text-white" />
                  </div>
                  <span className="text-sm sm:text-base font-bold text-slate-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Student photo card with natural framing */}
            <div className="mt-8 relative w-full max-w-sm rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&crop=faces,top&w=800&h=700&q=80"
                alt="Student learning with mentor"
                className="w-full h-72 sm:h-80 object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0a1e38]/85 via-[#0a1e38]/40 to-transparent p-4">
                <div className="flex items-center gap-2 text-white text-xs font-semibold">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Free Assessment & Consultation Session</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Form */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              {/* Navy Banner */}
              <div className="bg-[#0a1e38] text-white p-5 sm:p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  Enquire for Admission
                </h3>
                <p className="text-xs text-amber-300 font-medium mt-1 flex items-center justify-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-300" />
                  <span>Delivered to: amitachieversacademy13@gmail.com</span>
                </p>
              </div>

              {/* Form Body or Success Screen */}
              {submitStatus === "success" ? (
                <div className="p-6 sm:p-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-10 h-10 fill-emerald-500 text-white" />
                  </div>

                  <div>
                    <h4 className="text-xl font-black text-[#0a1e38]">
                      Enquiry Dispatched!
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {statusMessage}
                    </p>
                  </div>

                  {/* Activation Notice Banner if first time */}
                  {needsActivation && (
                    <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-left text-xs space-y-2">
                      <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                        <span>Action Required in Your Gmail</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        FormSubmit has sent an activation link to <strong className="text-[#0a1e38]">amitachieversacademy13@gmail.com</strong>.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        👉 Please open your Gmail inbox (check Spam if not in Inbox), find the email with subject <em>"Action Required: Confirm Form"</em>, and click the blue <strong>"Activate Form"</strong> button.
                      </p>
                      <div className="pt-1 flex items-center gap-2">
                        <a
                          href="https://mail.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-xs"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Open Gmail to Activate</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submission Summary Card */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5">
                    <div><span className="font-bold text-slate-700">Student:</span> {formData.studentName}</div>
                    <div><span className="font-bold text-slate-700">Mode:</span> {formData.mode}</div>
                    <div><span className="font-bold text-slate-700">Class:</span> {formData.studentClass}</div>
                    <div><span className="font-bold text-slate-700">Board:</span> {formData.board}</div>
                    <div><span className="font-bold text-slate-700">Contact:</span> +91 {formData.phoneNumber}</div>
                    <div><span className="font-bold text-slate-700">Destination:</span> amitachieversacademy13@gmail.com</div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Also Chat on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitStatus(null);
                        setNeedsActivation(false);
                        setFormData({
                          studentName: "",
                          mode: "Offline",
                          studentClass: "10th (Board Exam Year)",
                          board: "Maharashtra",
                          phoneNumber: "",
                        });
                      }}
                      className="w-full py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4">
                  {/* Student Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Student Name <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Enter student's full name"
                        value={formData.studentName}
                        onChange={(e) =>
                          setFormData({ ...formData, studentName: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800 placeholder-slate-400 bg-slate-50/50"
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
                    </div>
                  </div>

                  {/* Tuition Mode Preference (Online / Offline) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Tuition Mode Preference <span className="text-amber-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "Offline", label: "Offline", icon: Users },
                        { id: "Online", label: "Online", icon: Monitor },
                      ].map((m) => {
                        const Icon = m.icon;
                        const isSelected = formData.mode === m.id;
                        return (
                          <button
                            type="button"
                            key={m.id}
                            onClick={() => handleModeChange(m.id)}
                            className={`cursor-pointer py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 border ${
                              isSelected
                                ? "bg-[#0a1e38] text-white border-[#0a1e38] shadow-xs"
                                : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <Icon className={`w-4 h-4 ${isSelected ? "text-amber-400" : "text-slate-500"}`} />
                            <span>{m.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1.5">
                      {formData.mode === "Online"
                        ? "Online: 9th & 10th (MH Board), 11th & 12th Science (PCM) / Commerce (Maths)"
                        : "Offline: 5th to 10th (All Boards) & 11th-12th (Sci PCM / Comm Maths)"}
                    </p>
                  </div>

                  {/* Class Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Class / Course <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.studentClass}
                        onChange={(e) => handleClassChange(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 text-slate-800 bg-slate-50/50 appearance-none font-medium cursor-pointer"
                      >
                        {currentClassOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <BookOpen className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                    </div>
                  </div>

                  {/* Board */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Board <span className="text-amber-500">*</span>
                    </label>
                    <div className={`grid gap-2 ${availableBoards.length === 1 ? "grid-cols-1" : availableBoards.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                      {availableBoards.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setFormData({ ...formData, board: b })}
                          className={`cursor-pointer py-2 px-1 rounded-xl text-xs font-bold transition-all border ${
                            formData.board === b
                              ? "bg-amber-400/20 border-amber-500 text-[#0a1e38]"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Parent / Student WhatsApp Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Parent / Student WhatsApp Number <span className="text-amber-500">*</span>
                    </label>
                    <div className="flex rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50 focus-within:ring-2 focus-within:ring-amber-400">
                      <span className="px-3 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 border-r border-slate-200 flex items-center">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        placeholder="Enter 10-digit mobile number"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        className="w-full px-3 py-2.5 text-sm focus:outline-none text-slate-800 placeholder-slate-400 bg-transparent"
                      />
                    </div>
                  </div>

                  {/* Submit to Email Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98 text-sm sm:text-base mt-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin text-slate-950" />
                        <span>Sending to amitachieversacademy13@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>Send to amitachieversacademy13@gmail.com</span>
                      </>
                    )}
                  </button>

                  {/* Direct Alternate Options */}
                  <div className="pt-1 flex items-center justify-between gap-2 text-xs">
                    <button
                      type="button"
                      onClick={handleSendViaEmailClient}
                      className="text-slate-600 hover:text-slate-900 font-semibold underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>Open in Email App</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1 cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-white" />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
