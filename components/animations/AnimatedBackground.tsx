export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Sky gradient — deep warm black fading to a hint of dawn orange at horizon */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0a0800 0%, #0a0800 55%, #120a01 75%, #1a0e02 88%, #0d0800 100%)",
        }}
      />

      {/* Horizon glow — subtle orange warmth where sky meets mountains */}
      <div
        className="absolute w-full"
        style={{
          bottom: "14%",
          height: "120px",
          background:
            "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(232,124,12,0.07) 0%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />

      {/* Far mountains — most distant range, barely visible */}
      <svg
        className="absolute bottom-[12%] w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.07 }}
      >
        <path
          d="M0,220 L0,160 L60,150 L100,140 L150,125 L200,115 L240,105 L270,95 L300,80 L330,90 L360,100 L400,95 L440,85 L480,72 L510,60 L540,70 L570,80 L600,88 L640,82 L680,90 L720,78 L760,68 L800,78 L840,68 L880,58 L910,70 L940,80 L980,88 L1020,82 L1060,90 L1100,100 L1150,108 L1200,115 L1260,120 L1320,115 L1380,120 L1440,118 L1440,220 Z"
          fill="#E87C0C"
        />
      </svg>

      {/* Mid mountains — main Rocky Mountain range */}
      <svg
        className="absolute bottom-[8%] w-full"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.1 }}
      >
        <path
          d="M0,260 L0,200 L50,195 L100,188 L140,180 L180,170 L210,158 L240,142 L260,128 L280,112 L300,98 L320,85 L340,95 L360,110 L390,118 L420,108 L450,95 L470,80 L490,65 L510,50 L530,65 L550,80 L570,92 L600,100 L630,108 L660,115 L700,108 L730,98 L755,85 L780,70 L800,55 L820,70 L840,85 L860,95 L890,100 L920,108 L950,118 L980,128 L1020,138 L1060,145 L1100,138 L1140,145 L1180,150 L1230,145 L1280,148 L1340,152 L1400,155 L1440,158 L1440,260 Z"
          fill="#8B2500"
        />
      </svg>

      {/* Near foothills — Colorado front range, darkest and closest */}
      <svg
        className="absolute bottom-0 w-full"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18 }}
      >
        <path
          d="M0,160 L0,120 L80,112 L160,108 L240,100 L300,95 L340,88 L380,80 L420,85 L460,90 L500,85 L540,78 L580,72 L620,78 L660,85 L700,80 L740,75 L780,70 L820,75 L860,80 L920,78 L980,82 L1040,88 L1100,92 L1160,88 L1220,92 L1300,98 L1380,102 L1440,105 L1440,160 Z"
          fill="#1a0c02"
        />
      </svg>

      {/* Ground fill — seamless dark base below foothills */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "8%", background: "#0a0800" }}
      />
    </div>
  );
}
