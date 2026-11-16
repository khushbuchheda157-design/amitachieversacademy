import { useState } from "react";
import {
  X,
  MessageCircle,
  User,
  BookOpen,
  Monitor,
  Users,
  Send,
  Loader2,
  CheckCircle2,
  Mail,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

export default function EnquiryModal({ isOpen, onClose, defaultBoard = "Maharashtra" }) {
  const [formData, setFormData] = useState({
    studentName: "",
    mode: "Offline", // "Offline" | "Online"
    studentClass: "10th (Board Exam Year)",
    board: defaultBoard,
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"
  const [needsActivation, setNeedsActivation] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  if (!isOpen) return null;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phoneNumber) {
      alert("Please provide student name and phone number.");
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
        setStatusMessage("Activation required: FormSubmit has sent a confirmation email to amitachieversacademy13@gmail.com.");
      } else if (response.ok || resData.success === "true") {
        setSubmitStatus("success");
        setNeedsActivation(false);
        setStatusMessage("Your enquiry has been delivered directly to amitachieversacademy13@gmail.com!");
      } else {
        throw new Error(resData.message || "Failed to send");
      }
    } catch (err) {
      console.error("Modal submission error:", err);
      const mailtoSubject = encodeURIComponent(
        `Admission Enquiry: ${formData.studentName} (${formData.studentClass})`
      );
      const mailtoBody = encodeURIComponent(
        `Student Name: ${formData.studentName}\nTuition Mode: ${formData.mode}\nClass: ${formData.studentClass}\nBoard: ${formData.board}\nPhone: +91 ${formData.phoneNumber}`
      );
      window.open(`mailto:amitachieversacademy13@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`);
      setSubmitStatus("success");
      setStatusMessage("Enquiry prepared in your email client for amitachieversacademy13@gmail.com!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello Amit Sir!%0A%0AI would like to enquire for admission at *Amit's Achiever's Academy*:%0A- *Student Name:* ${encodeURIComponent(
      formData.studentName || "Student"
    )}%0A- *Tuition Mode:* ${encodeURIComponent(
      formData.mode
    )}%0A- *Class / Course:* ${encodeURIComponent(
      formData.studentClass
    )}%0A- *Board:* ${encodeURIComponent(
      formData.board
    )}%0A- *Phone:* +91 ${encodeURIComponent(
      formData.phoneNumber || ""
    )}%0A%0A(Sent to amitachieversacademy13@gmail.com)%0APlease contact me with batch details. Thank you!`;

    const whatsappUrl = `https://wa.me/919768343392?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-scaleUp">
        {/* Navy Header */}
        <div className="bg-[#0a1e38] text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">Enquire for Admission</h3>
            <p className="text-xs text-amber-300 mt-0.5 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>Delivered to: amitachieversacademy13@gmail.com</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitStatus === "success" ? (
          <div className="p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8 fill-emerald-500 text-white" />
            </div>

            <h4 className="text-lg font-bold text-[#0a1e38]">Enquiry Dispatched!</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {statusMessage}
            </p>

            {needsActivation && (
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-300 text-left text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-amber-900 font-bold">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Activation Required</span>
                </div>
                <p className="text-slate-600">
                  Please open Gmail at <strong>amitachieversacademy13@gmail.com</strong> and click <strong>Activate Form</strong>.
                </p>
                <a
                  href="https://mail.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 underline"
                >
                  <span>Open Gmail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1">
              <div><span className="font-bold">Student:</span> {formData.studentName}</div>
              <div><span className="font-bold">Class:</span> {formData.studentClass} ({formData.mode})</div>
              <div><span className="font-bold">Contact:</span> +91 {formData.phoneNumber}</div>
            </div>

            <div className="space-y-2 pt-2">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 text-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Also Message on WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSubmitStatus(null);
                  onClose();
                }}
                className="w-full py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Modal Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Student Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Student Name <span className="text-amber-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="Enter student full name"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-slate-50 text-slate-800"
                />
                <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
              </div>
            </div>

            {/* Tuition Mode Preference */}
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
                      className={`cursor-pointer py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border ${
                        isSelected
                          ? "bg-[#0a1e38] text-white border-[#0a1e38]"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-amber-400" : "text-slate-500"}`} />
                      <span>{m.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Class / Course */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Class / Course <span className="text-amber-500">*</span>
              </label>
              <div className="relative">
                <select
                  value={formData.studentClass}
                  onChange={(e) => handleClassChange(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-slate-50 text-slate-800 appearance-none font-medium cursor-pointer"
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
                    className={`py-2 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
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

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-amber-500">*</span>
              </label>
              <div className="flex rounded-xl border border-slate-200 overflow-hidden bg-slate-50 focus-within:ring-2 focus-within:ring-amber-400">
                <span className="px-3 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 border-r border-slate-200 flex items-center">
                  +91
                </span>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="Enter 10-digit number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-3 py-2.5 text-sm focus:outline-none text-slate-800 bg-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 font-black py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm mt-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                  <span>Sending to Email...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
