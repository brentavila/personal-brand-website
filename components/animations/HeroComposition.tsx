"use client";

import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

function FloatingShape({
  x,
  y,
  size,
  delay,
  opacity,
}: {
  x: string;
  y: string;
  size: number;
  delay: number;
  opacity: number;
}) {
  const frame = useCurrentFrame();
  const floatY = Math.sin((frame + delay * 30) / 40) * 10;
  const floatX = Math.cos((frame + delay * 20) / 55) * 5;
  const fadeIn = interpolate(frame, [delay * 30, delay * 30 + 20], [0, opacity], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translate(${floatX}px, ${floatY}px)`,
        opacity: fadeIn,
        width: 0,
        height: 0,
        borderLeft: `${size}px solid transparent`,
        borderRight: `${size}px solid transparent`,
        borderBottom: `${size * 1.7}px solid rgba(184,134,11,${opacity})`,
      }}
    />
  );
}

export function HeroCompositionComponent() {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const gradientOpacity = interpolate(frame, [0, 40], [0, 1], {
    extrapolateRight: "clamp",
  });

  const greetingProgress = spring({ frame: frame - 45, fps, config: { damping: 14, stiffness: 120 } });
  const nameProgress = spring({ frame: frame - 60, fps, config: { damping: 12, stiffness: 100 } });
  const taglineProgress = spring({ frame: frame - 80, fps, config: { damping: 16, stiffness: 90 } });

  const greetingY = interpolate(greetingProgress, [0, 1], [30, 0]);
  const nameY = interpolate(nameProgress, [0, 1], [40, 0]);
  const taglineY = interpolate(taglineProgress, [0, 1], [20, 0]);

  return (
    <AbsoluteFill
      style={{
        background: "transparent",
        fontFamily: "var(--font-space-grotesk, sans-serif)",
      }}
    >
      {/* Gradient blobs */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(184,134,11,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
          opacity: gradientOpacity * 0.7,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "-10%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0,188,212,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          opacity: gradientOpacity * 0.6,
        }}
      />

      {/* Floating shapes */}
      <FloatingShape x="8%" y="15%" size={10} delay={0} opacity={0.18} />
      <FloatingShape x="75%" y="20%" size={7} delay={0.5} opacity={0.12} />
      <FloatingShape x="20%" y="65%" size={12} delay={1} opacity={0.1} />
      <FloatingShape x="85%" y="55%" size={9} delay={1.5} opacity={0.14} />
      <FloatingShape x="50%" y="80%" size={8} delay={2} opacity={0.1} />
      <FloatingShape x="35%" y="10%" size={6} delay={2.5} opacity={0.16} />

      {/* Text reveal layer */}
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          right: "40%",
        }}
      >
        <div
          style={{
            opacity: greetingProgress,
            transform: `translateY(${greetingY}px)`,
            fontSize: "1.1rem",
            color: "#a0a0a0",
            marginBottom: "8px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Hi, I&apos;m
        </div>
        <div
          style={{
            opacity: nameProgress,
            transform: `translateY(${nameY}px)`,
            fontSize: "3.5rem",
            fontWeight: 700,
            color: "#f0f0f0",
            lineHeight: 1.1,
            background: "linear-gradient(135deg, #f0f0f0 60%, #00bcd4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "12px",
          }}
        >
          Brent
        </div>
        <div
          style={{
            opacity: taglineProgress,
            transform: `translateY(${taglineY}px)`,
            fontSize: "0.9rem",
            color: "#666666",
            lineHeight: 1.6,
            maxWidth: "380px",
          }}
        >
          Paid campaigns, marketing automations, and brands that grow without the guesswork.
        </div>
      </div>
    </AbsoluteFill>
  );
}
