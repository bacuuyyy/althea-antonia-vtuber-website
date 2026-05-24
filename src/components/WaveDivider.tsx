interface WaveDividerProps {
  variant?: "wave" | "curve" | "tear";
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ variant = "wave", flip = false, className = "" }: WaveDividerProps) => {
  const transforms = flip ? "rotate-180" : "";
  
  if (variant === "curve") {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg
          className={`w-full h-12 md:h-16 ${transforms}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#curveGradient)"
            opacity="0.3"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            fill="url(#curveGradient)"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--kawaii-pink-light))" />
              <stop offset="50%" stopColor="hsl(var(--kawaii-gold-light))" />
              <stop offset="100%" stopColor="hsl(var(--kawaii-pink-light))" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  if (variant === "tear") {
    return (
      <div className={`w-full overflow-hidden ${className}`}>
        <svg
          className={`w-full h-10 md:h-14 ${transforms}`}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L60,10 L120,5 L180,15 L240,8 L300,20 L360,12 L420,25 L480,10 L540,22 L600,8 L660,18 L720,5 L780,20 L840,10 L900,25 L960,15 L1020,22 L1080,8 L1140,18 L1200,5 L1200,0 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    );
  }

  // Default wave
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        className={`w-full h-16 md:h-24 ${transforms}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill="url(#waveGradient)"
        />
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--kawaii-pink-light))" />
            <stop offset="50%" stopColor="hsl(var(--secondary))" />
            <stop offset="100%" stopColor="hsl(var(--kawaii-pink-light))" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WaveDivider;
