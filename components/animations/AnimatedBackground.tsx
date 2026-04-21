export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Base gradient layer */}
      <div
        className="absolute inset-0 animate-spartan-gradient"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 20% 30%, rgba(139,37,0,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(184,134,11,0.06) 0%, transparent 55%), #0a0a0a",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 animate-spartan-pattern opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,134,11,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(184,134,11,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow 1 — bronze, top-left */}
      <div
        className="absolute animate-spartan-glow"
        style={{
          width: "500px",
          height: "500px",
          top: "-10%",
          left: "-5%",
          background:
            "radial-gradient(circle, rgba(184,134,11,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Glow 2 — red, bottom-right */}
      <div
        className="absolute animate-spartan-glow"
        style={{
          width: "600px",
          height: "600px",
          bottom: "-15%",
          right: "-10%",
          background:
            "radial-gradient(circle, rgba(139,37,0,0.1) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "7s",
        }}
      />

      {/* Floating shapes */}
      {[
        { top: "15%", left: "8%", delay: "0s", size: 10, opacity: 0.18 },
        { top: "55%", right: "12%", delay: "3s", size: 14, opacity: 0.14 },
        { top: "30%", right: "25%", delay: "6s", size: 8, opacity: 0.12 },
        { top: "70%", left: "20%", delay: "9s", size: 12, opacity: 0.1 },
        { top: "85%", right: "40%", delay: "12s", size: 7, opacity: 0.16 },
        { top: "10%", left: "55%", delay: "15s", size: 9, opacity: 0.12 },
      ].map((shape, i) => (
        <span
          key={i}
          className="absolute animate-spartan-shape"
          style={{
            top: shape.top,
            left: "left" in shape ? shape.left : undefined,
            right: "right" in shape ? shape.right : undefined,
            width: 0,
            height: 0,
            borderLeft: `${shape.size}px solid transparent`,
            borderRight: `${shape.size}px solid transparent`,
            borderBottom: `${shape.size * 1.7}px solid rgba(184,134,11,${shape.opacity})`,
            animationDelay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
