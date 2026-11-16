export function HeroWave() {
  return (
    <div className="absolute -bottom-1 inset-x-0 w-full overflow-hidden leading-none pointer-events-none z-10">
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C360,80 720,0 1080,48 C1260,72 1380,50 1440,40 L1440,96 L0,96 Z"
          fill="#f8fafc"
        />
      </svg>
    </div>
  );
}

export function SectionWaveBottom({ fill = "#f8fafc" }) {
  return (
    <div className="w-full overflow-hidden leading-none pointer-events-none -mt-1">
      <svg
        viewBox="0 0 1440 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-6 sm:h-10 block"
        preserveAspectRatio="none"
      >
        <path
          d="M0,24 C400,64 800,0 1200,40 C1320,54 1390,38 1440,32 L1440,64 L0,64 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
