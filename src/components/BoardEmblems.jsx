export function MaharashtraBoardEmblem({ className = "w-14 h-14" }) {
  return (
    <div className={`${className} rounded-full bg-amber-50 p-2 border-2 border-amber-300 flex items-center justify-center shrink-0 shadow-inner`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" stroke="#b45309" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" />
        {/* Sun rays / Diya */}
        <path d="M50 20 L50 27 M30 30 L35 35 M70 30 L65 35 M22 50 L29 50 M78 50 L71 50" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
        {/* Center Diya Lamp */}
        <path d="M35 52 C35 60 65 60 65 52 C65 48 35 48 35 52 Z" fill="#b45309" />
        <path d="M50 36 C47 43 45 47 50 49 C55 47 53 43 50 36 Z" fill="#f59e0b" />
        {/* Open Book */}
        <path d="M30 65 Q50 60 50 72 Q50 60 70 65 L70 78 Q50 73 50 83 Q50 73 30 78 Z" fill="#b45309" opacity="0.9" />
        <path d="M32 67 Q50 62 50 74 L50 81 Q50 71 32 76 Z" fill="#fef3c7" />
        <path d="M68 67 Q50 62 50 74 L50 81 Q50 71 68 76 Z" fill="#fef3c7" />
      </svg>
    </div>
  );
}

export function CBSEBoardEmblem({ className = "w-14 h-14" }) {
  return (
    <div className={`${className} rounded-full bg-blue-50 p-2 border-2 border-blue-300 flex items-center justify-center shrink-0 shadow-inner`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" stroke="#1d4ed8" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3 2" />
        {/* Flame of knowledge */}
        <path d="M50 22 C44 32 40 38 50 44 C60 38 56 32 50 22 Z" fill="#2563eb" />
        <path d="M50 28 C47 34 45 38 50 41 C55 38 53 34 50 28 Z" fill="#93c5fd" />
        {/* Open Book */}
        <path d="M26 52 Q50 47 50 60 Q50 47 74 52 L74 68 Q50 63 50 76 Q50 63 26 68 Z" fill="#1e40af" />
        <path d="M29 55 Q50 50 50 62 L50 72 Q50 60 29 65 Z" fill="#dbeafe" />
        <path d="M71 55 Q50 50 50 62 L50 72 Q50 60 71 65 Z" fill="#dbeafe" />
        {/* Base stand */}
        <rect x="42" y="77" width="16" height="4" rx="2" fill="#1e40af" />
        <rect x="36" y="82" width="28" height="3" rx="1.5" fill="#1e40af" />
      </svg>
    </div>
  );
}

export function ICSEBoardEmblem({ className = "w-14 h-14" }) {
  return (
    <div className={`${className} rounded-full bg-emerald-50 p-2 border-2 border-emerald-300 flex items-center justify-center shrink-0 shadow-inner`}>
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        {/* Outer Ring */}
        <circle cx="50" cy="50" r="46" stroke="#047857" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="41" stroke="#10b981" strokeWidth="1" strokeDasharray="3 2" />
        {/* Shield */}
        <path d="M34 26 H66 V52 Q66 74 50 82 Q34 74 34 52 Z" fill="#047857" opacity="0.9" />
        <path d="M37 29 H63 V51 Q63 70 50 77 Q37 70 37 51 Z" fill="#ecfdf5" />
        {/* Torch / Tree inside shield */}
        <path d="M50 34 L54 44 H46 Z" fill="#059669" />
        <path d="M47 44 H53 V62 H47 Z" fill="#047857" />
        {/* Open Book at base of shield */}
        <path d="M41 62 Q50 58 50 66 Q50 58 59 62 L59 69 Q50 65 50 73 Q50 65 41 69 Z" fill="#065f46" />
      </svg>
    </div>
  );
}

