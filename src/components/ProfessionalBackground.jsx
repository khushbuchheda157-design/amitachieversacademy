export function HeroRibbonCurves() {
  return (
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none -z-0">
      {/* Dynamic Golden and Navy fluid curves matching the reference design */}
      <svg
        viewBox="0 0 1000 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-10 -right-10 w-[750px] sm:w-[950px] lg:w-[1100px] h-auto opacity-75 lg:opacity-85 select-none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="navyRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0a1e38" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#1e3a8a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0a1e38" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Outer Navy Sweeping Wave */}
        <path
          d="M400,0 C650,80 880,260 780,520 C700,720 480,680 420,720 L1000,720 L1000,0 Z"
          fill="url(#navyRibbon)"
        />

        {/* Mid Golden Fluid Ribbon */}
        <path
          d="M520,0 C740,110 920,290 840,510 C760,710 590,670 540,710 L1000,710 L1000,0 Z"
          fill="url(#goldRibbon)"
        />

        {/* Crisp Golden Border Accent Line */}
        <path
          d="M515,0 C735,110 915,290 835,510 C755,710 585,670 535,710"
          stroke="#f59e0b"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray="6 4"
          opacity="0.6"
        />

        {/* Thin Navy Counter Curve */}
        <path
          d="M620,0 C810,130 960,320 890,520"
          stroke="#0a1e38"
          strokeWidth="2"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}

export function AmbientSectionGlow({ goldRight = true }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
      <div
        className={`absolute -top-32 ${
          goldRight ? "-right-32" : "-left-32"
        } w-[480px] h-[480px] rounded-full bg-gradient-to-br from-amber-200/35 via-amber-100/20 to-transparent blur-3xl`}
      />
      <div
        className={`absolute -bottom-32 ${
          goldRight ? "-left-32" : "-right-32"
        } w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-slate-200/40 via-blue-50/30 to-transparent blur-3xl`}
      />
    </div>
  );
}

export function SubtleGridOverlay() {
  return (
    <div className="absolute inset-0 bg-grid-subtle opacity-70 pointer-events-none -z-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
  );
}

