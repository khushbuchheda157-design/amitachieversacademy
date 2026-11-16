import logoImg from "../assets/logo.jpeg";

export function LogoEmblem({ size = 52, className = "" }) {
  return (
    <img
      src={logoImg}
      alt="Amit's Achiever's Academy"
      style={{ height: size, width: size }}
      className={`object-contain shrink-0 ${className}`}
    />
  );
}

export function FullLogoImage({ className = "h-14 w-auto", alt = "Amit's Achiever's Academy" }) {
  return (
    <img
      src={logoImg}
      alt={alt}
      className={`object-contain ${className}`}
    />
  );
}

export default function Logo({ size = "md", showTagline = true, light = false }) {
  const heights = {
    sm: 42,
    md: 52,
    lg: 64,
    xl: 96,
  };

  const height = heights[size] || 52;

  return (
    <div className="inline-flex items-center gap-3 select-none">
      <div className={light ? "bg-white p-1 rounded-xl shadow-xs shrink-0" : "shrink-0"}>
        <img
          src={logoImg}
          alt="Amit's Achiever's Academy"
          style={{ height, width: height }}
          className="object-contain block"
        />
      </div>
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-baseline gap-1">
          <span
            className={`font-black tracking-tight ${
              light ? "text-white" : "text-[#0a1e38]"
            } ${size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg"}`}
          >
            AMIT'S
          </span>
          <span
            className={`font-black tracking-tight text-amber-500 ${
              size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-lg"
            }`}
          >
            ACHIEVER'S
          </span>
        </div>
        <span
          className={`font-extrabold tracking-wider ${
            light ? "text-slate-200" : "text-[#0a1e38]"
          } ${size === "lg" ? "text-xl" : size === "sm" ? "text-xs" : "text-sm"}`}
        >
          ACADEMY
        </span>
        {showTagline && (
          <span
            className={`text-[9px] font-semibold tracking-widest uppercase mt-0.5 ${
              light ? "text-amber-400" : "text-slate-500"
            }`}
          >
            LEARN • GROW • ACHIEVE
          </span>
        )}
      </div>
    </div>
  );
}
