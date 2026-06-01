import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { WaterBottle3D } from "./WaterBottle3D";

// ── Scene data ────────────────────────────────────────────────────────────
const scenes = [
  {
    label: "ORIGIN",
    headline: "Born From\nPure Sources",
    sub: "Untouched mountain springs, thousands of feet above sea level — where water is naturally filtered through ancient rock for centuries.",
    accent: "#38bdf8",
    extras: null,
  },
  {
    label: "AWAKENING",
    headline: "Every Drop\nAwakened",
    sub: "The moment pure spring water meets light — a cinematic burst of crystal clarity that defines what real water tastes like.",
    accent: "#06b6d4",
    extras: null,
  },
  {
    label: "MINERALS",
    headline: "Naturally\nEnriched",
    sub: "Essential minerals — Calcium, Magnesium, Potassium, Zinc — delivered in the perfect natural balance your body craves.",
    accent: "#22d3ee",
    extras: { type: "minerals", items: ["Ca²⁺ Calcium", "Mg²⁺ Magnesium", "K⁺ Potassium", "Zn²⁺ Zinc"] },
  },
  {
    label: "PURIFICATION",
    headline: "Multi-Stage\nFiltration",
    sub: "Five advanced purification stages. Each eliminates what the last couldn't catch. The result: water in its most perfect state.",
    accent: "#0ea5e9",
    extras: {
      type: "stages",
      items: ["Sediment Filtration", "Carbon Filtration", "Reverse Osmosis", "UV Sterilization", "Ozonization"],
    },
  },
  {
    label: "TESTING",
    headline: "150+ Quality\nParameters",
    sub: "Every batch is tested against 150+ quality parameters before it ever leaves our facility. Zero compromise. Absolute purity.",
    accent: "#7dd3fc",
    extras: null,
  },
  {
    label: "CERTIFIED",
    headline: "Certified\nExcellence",
    sub: "BIS Certified. ISO 9001:2015. Trusted by thousands of families and 5,000+ corporate clients across 50 cities.",
    accent: "#38bdf8",
    extras: { type: "badges", items: ["BIS Certified", "ISO 9001", "FSSAI Approved"] },
  },
  {
    label: "YOURS",
    headline: "Ready\nFor You",
    sub: "Choose your size. Schedule your delivery. Taste the difference of truly pure water — delivered fresh to your doorstep.",
    accent: "#0ea5e9",
    extras: null,
  },
];

const N = scenes.length;
// Cross-fade half-window: 40% of a scene's scroll-range on each side
const DELTA = 0.5 / N * 0.38;

// ── Single scene text layer ──────────────────────────────────────────────
function SceneText({
  scene,
  idx,
  scrollYProgress,
}: {
  scene: (typeof scenes)[0];
  idx: number;
  scrollYProgress: MotionValue<number>;
}) {
  const boundary = idx / N;
  const nextBoundary = (idx + 1) / N;

  // Fade in at entry boundary, fade out at exit boundary
  // Clamp so scene 0 starts visible and scene N-1 ends visible
  const fadeInStart = Math.max(0, boundary - DELTA);
  const fadeInEnd = Math.min(1, boundary + DELTA);
  const fadeOutStart = Math.max(0, nextBoundary - DELTA);
  const fadeOutEnd = Math.min(1, nextBoundary + DELTA);

  const opacity = useTransform(
    scrollYProgress,
    idx === 0
      ? [0, fadeOutStart, fadeOutEnd]
      : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    idx === 0
      ? [1, 1, 0]
      : [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    idx === 0
      ? [0, fadeOutStart, fadeOutEnd]
      : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    idx === 0
      ? [0, 0, -30]
      : [40, 0, 0, -30]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 lg:px-20 pointer-events-none"
    >
      {/* Chapter label */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="h-px w-8 rounded-full"
          style={{ background: scene.accent }}
        />
        <span
          className="text-[11px] font-bold tracking-[0.5em] uppercase"
          style={{ color: scene.accent }}
        >
          {scene.label}
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.08] mb-6 text-white whitespace-pre-line">
        {scene.headline}
      </h2>

      {/* Sub-copy */}
      <p className="text-base md:text-lg text-white/60 max-w-md font-light leading-relaxed mb-8">
        {scene.sub}
      </p>

      {/* Extras */}
      {scene.extras?.type === "minerals" && (
        <div className="flex flex-wrap gap-2">
          {scene.extras.items.map((item) => (
            <span
              key={item}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border"
              style={{
                borderColor: scene.accent + "55",
                color: scene.accent,
                background: scene.accent + "12",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {scene.extras?.type === "stages" && (
        <div className="flex flex-col gap-2">
          {scene.extras.items.map((item, i) => (
            <div key={item} className="flex items-center gap-3">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0"
                style={{
                  background: scene.accent + "22",
                  border: `1px solid ${scene.accent}55`,
                  color: scene.accent,
                }}
              >
                {i + 1}
              </span>
              <span className="text-sm text-white/70 font-medium">{item}</span>
              <div className="flex-1 h-px" style={{ background: scene.accent + "22" }} />
            </div>
          ))}
        </div>
      )}

      {scene.extras?.type === "badges" && (
        <div className="flex gap-4">
          {scene.extras.items.map((item) => (
            <div
              key={item}
              className="px-4 py-2 rounded-xl text-xs font-bold tracking-wider border flex items-center gap-2"
              style={{
                borderColor: scene.accent + "55",
                color: scene.accent,
                background: scene.accent + "10",
              }}
            >
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: scene.accent }}
              />
              {item}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}

// ── Progress dots (needs own component for hooks-at-top-level) ────────────
function ProgressDot({
  idx,
  scrollYProgress,
}: {
  idx: number;
  scrollYProgress: MotionValue<number>;
}) {
  const boundary = idx / N;
  const nextBoundary = (idx + 1) / N;
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, boundary - DELTA), boundary + DELTA, nextBoundary - DELTA, Math.min(1, nextBoundary + DELTA)],
    [0.25, 1, 1, 0.25]
  );
  const scaleX = useTransform(
    scrollYProgress,
    [Math.max(0, boundary - DELTA), boundary + DELTA, nextBoundary - DELTA, Math.min(1, nextBoundary + DELTA)],
    [0.4, 1, 1, 0.4]
  );

  const accent = scenes[idx].accent;
  return (
    <motion.div
      style={{ opacity, scaleX }}
      className="h-[3px] w-8 rounded-full origin-left"
      title={scenes[idx].label}
      data-accent={accent}
    >
      <div className="h-full w-full rounded-full" style={{ background: accent }} />
    </motion.div>
  );
}

// ── Scroll-driven accent color for ambient blob ───────────────────────────
const ACCENT_STOPS = scenes.map((s) => s.accent);

// ── Main exported component ───────────────────────────────────────────────
export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Derive bottle water level (continuous, 0-1)
  const waterLevelMV = useTransform(scrollYProgress, [0, 1], [0.18, 0.96]);
  const [waterLevel, setWaterLevel] = useState(0.18);
  useMotionValueEvent(waterLevelMV, "change", setWaterLevel);

  // Derive active scene index for ambient glow color
  const [accentColor, setAccentColor] = useState(ACCENT_STOPS[0]);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(N - 1, Math.floor(v * N));
    setAccentColor(ACCENT_STOPS[idx]);
  });

  return (
    <div
      ref={containerRef}
      id="source"
      style={{ height: `${(N + 1) * 100}vh`, position: "relative" }}
    >
      {/* ── Sticky viewport ──────────────────────────────────────────── */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ background: "#030d1a" }}
      >
        {/* Ambient glow that shifts with scene */}
        <motion.div
          animate={{ background: `radial-gradient(ellipse 60% 60% at 65% 50%, ${accentColor}22 0%, transparent 70%)` }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
        />
        {/* Subtle top-left secondary glow */}
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none blur-[120px]"
          style={{ background: accentColor }}
        />

        {/* ── Layout: text left | bottle right ─────────────────────── */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left — text cross-fades */}
          <div className="relative h-full overflow-hidden">
            {scenes.map((scene, idx) => (
              <SceneText
                key={idx}
                scene={scene}
                idx={idx}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Right — 3D bottle, always present */}
          <div className="h-full flex items-center justify-center">
            <WaterBottle3D
              waterLevel={waterLevel}
              autoRotate
              className="w-full h-full"
            />
          </div>
        </div>

        {/* ── Progress indicator ───────────────────────────────────── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {scenes.map((_, idx) => (
            <ProgressDot key={idx} idx={idx} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* ── Scroll hint (fades away after first scene) ───────────── */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]),
          }}
          className="absolute bottom-10 right-[calc(50%_-_24px)] flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/30">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
