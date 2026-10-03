export function CupIllustration({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center p-4 ${className ?? ""}`}>
      {/* Ambient background glow ring */}
      <div
        className="absolute inset-0 m-auto size-72 rounded-full bg-terracotta-500/15 blur-3xl animate-pulse-glow pointer-events-none"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 400 400"
        className="relative z-10 w-full drop-shadow-xl select-none transition-transform duration-500 hover:scale-[1.02]"
        role="img"
        aria-label="Ilustrasi secangkir kopi hangat mengepul dengan biji kopi sangrai"
      >
        <defs>
          <linearGradient id="cupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="100%" stopColor="#F4EBDC" />
          </linearGradient>
          <linearGradient id="coffeeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4A2F22" />
            <stop offset="100%" stopColor="#1B0F09" />
          </linearGradient>
          <linearGradient id="cremaGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C45D33" />
            <stop offset="50%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#C45D33" />
          </linearGradient>
          <radialGradient id="plateGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E6D7C3" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FAF6F0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background plate circles */}
        <circle cx="200" cy="200" r="180" fill="url(#plateGlow)" />
        <circle cx="200" cy="200" r="142" fill="#F3EBDD" stroke="#E6D7C3" strokeWidth="2" />

        {/* Dynamic Animated Rising Steam Paths */}
        <g fill="none" stroke="#C45D33" strokeWidth="5" strokeLinecap="round" opacity="0.9">
          {/* Steam wisp 1 (Left) */}
          <path
            className="animate-steam-1"
            d="M165 125 c-16 18 16 32 0 52"
          />
          {/* Steam wisp 2 (Center) */}
          <path
            className="animate-steam-2"
            d="M200 110 c-18 20 18 36 0 58"
          />
          {/* Steam wisp 3 (Right) */}
          <path
            className="animate-steam-3"
            d="M235 125 c-16 18 16 32 0 52"
          />
        </g>

        {/* Piring tatakan cangkir */}
        <ellipse cx="200" cy="305" rx="130" ry="24" fill="#26150D" opacity="0.14" />
        <ellipse cx="200" cy="295" rx="124" ry="20" fill="url(#cupGrad)" stroke="#573322" strokeWidth="4" />
        <ellipse cx="200" cy="294" rx="98" ry="12" fill="#E6D7C3" opacity="0.45" />

        {/* Cangkir Utama Keramik */}
        <path
          d="M110 190 h180 v48 a90 70 0 0 1-90 64 a90 70 0 0 1-90-64 v-48 Z"
          fill="url(#cupGrad)"
          stroke="#3E2316"
          strokeWidth="4.5"
        />

        {/* Gagang Cangkir */}
        <path
          d="M290 205 h18 a28 28 0 0 1 0 56 h-26"
          fill="none"
          stroke="#3E2316"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Bibir Cangkir & Kopi Panas */}
        <ellipse cx="200" cy="190" rx="90" ry="18" fill="url(#coffeeGrad)" stroke="#3E2316" strokeWidth="4.5" />
        <ellipse cx="200" cy="190" rx="74" ry="12" fill="#573322" opacity="0.9" />

        {/* Crema Latte Art pattern */}
        <path
          d="M168 190 c12-9 22-9 32 0 s20 9 32 0"
          fill="none"
          stroke="#F3EBDD"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle cx="200" cy="189" r="3" fill="#D97706" />

        {/* Floating Coffee Bean Left */}
        <g className="animate-float-bean-1 cursor-pointer">
          <ellipse rx="19" ry="27" fill="#26150D" stroke="#3E2316" strokeWidth="1.5" />
          <path d="M0-23 c-8 12 8 20 0 46" fill="none" stroke="#E6D7C3" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Floating Coffee Bean Right */}
        <g className="animate-float-bean-2 cursor-pointer">
          <ellipse rx="15" ry="22" fill="#573322" stroke="#26150D" strokeWidth="1.5" />
          <path d="M0-19 c-6 9 6 16 0 38" fill="none" stroke="#FAF6F0" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Floating Botanical Leaf */}
        <g className="animate-float-leaf" fill="#3D5A3C">
          <path d="M0 0 c22-26 55-24 68-4 -20 22-48 24-68 4 Z" />
          <path d="M4 -2 L58 -4" stroke="#E6EDE2" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}

