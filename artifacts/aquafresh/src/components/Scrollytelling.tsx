import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import bottleImg from "@assets/Aqua_Bottle_1780316390467.jpeg";

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
      items: [
        "Sediment Filtration",
        "Carbon Filtration",
        "Reverse Osmosis",
        "UV Sterilization",
        "Ozonization",
      ],
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
    extras: { type: "badges", items: ["BIS Certified", "ISO 9001:2015", "FSSAI Approved"] },
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
// Half-window for crossfade at each scene boundary
const DELTA = (1 / N) * 0.38;

// ── Scene text panel (one per scene, stacked + crossfaded) ────────────────
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
  const fadeInStart  = Math.max(0, boundary - DELTA);
  const fadeInEnd    = Math.min(1, boundary + DELTA);
  const fadeOutStart = Math.max(0, nextBoundary - DELTA);
  const fadeOutEnd   = Math.min(1, nextBoundary + DELTA);

  const opacity = useTransform(
    scrollYProgress,
    idx === 0
      ? [0, fadeOutStart, fadeOutEnd]
      : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    idx === 0 ? [1, 1, 0] : [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    idx === 0
      ? [0, fadeOutStart, fadeOutEnd]
      : [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    idx === 0 ? [0, 0, -28] : [36, 0, 0, -28]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 lg:px-20 pointer-events-none"
    >
      {/* Chapter label */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px w-8 rounded-full" style={{ background: scene.accent }} />
        <span
          className="text-[11px] font-bold tracking-[0.5em] uppercase"
          style={{ color: scene.accent }}
        >
          {scene.label}
        </span>
      </div>

      {/* Headline */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-[1.08] mb-6 text-white whitespace-pre-line">
        {scene.headline}
      </h2>

      {/* Sub-copy */}
      <p className="text-sm md:text-base lg:text-lg text-white/55 max-w-md font-light leading-relaxed mb-8">
        {scene.sub}
      </p>

      {/* Minerals */}
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

      {/* Filtration stages */}
      {scene.extras?.type === "stages" && (
        <div className="flex flex-col gap-2.5">
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

      {/* Certification badges */}
      {scene.extras?.type === "badges" && (
        <div className="flex gap-3 flex-wrap">
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
                className="w-1.5 h-1.5 rounded-full animate-pulse"
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

// ── Progress dot (needs own component so hooks are at top level) ──────────
function ProgressDot({
  idx,
  scrollYProgress,
}: {
  idx: number;
  scrollYProgress: MotionValue<number>;
}) {
  const boundary     = idx / N;
  const nextBoundary = (idx + 1) / N;
  const fadeInStart  = Math.max(0, boundary - DELTA);
  const fadeInEnd    = Math.min(1, boundary + DELTA);
  const fadeOutStart = Math.max(0, nextBoundary - DELTA);
  const fadeOutEnd   = Math.min(1, nextBoundary + DELTA);

  const opacity = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [0.25, 1, 1, 0.25]
  );
  const scaleX = useTransform(
    scrollYProgress,
    [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
    [0.4, 1, 1, 0.4]
  );

  return (
    <motion.div style={{ opacity, scaleX }} className="h-[3px] w-8 rounded-full origin-left">
      <div className="h-full w-full rounded-full" style={{ background: scenes[idx].accent }} />
    </motion.div>
  );
}

// ── Bottle image with scroll-driven parallax ──────────────────────────────
function BottleImage({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Bottle drifts up slightly and scales very gently as you scroll
  const y     = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.04, 1.08]);

  return (
    <motion.div
      style={{ y, scale }}
      className="h-full w-full flex items-center justify-center"
    >
      {/* Glow halo behind bottle */}
      <motion.div
        animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340,
          height: 340,
          background:
            "radial-gradient(circle, #0ea5e938 0%, #06b6d420 45%, transparent 72%)",
          filter: "blur(55px)",
        }}
      />

      {/* Floating product image */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "drop-shadow(0 40px 70px #0ea5e950)" }}
        className="relative z-10"
      >
        <img
          src={bottleImg}
          alt="AquaFresh Premium Water Bottle"
          className="h-[480px] md:h-[560px] w-auto object-contain select-none"
          draggable={false}
        />
      </motion.div>

      {/* Floor reflection */}
      <motion.div
        animate={{ opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 pointer-events-none"
        style={{
          width: 120,
          height: 18,
          background: "radial-gradient(ellipse, #38bdf860 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
    </motion.div>
  );
}

// ── Main exported component ───────────────────────────────────────────────
export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Active scene index → accent color for ambient glow
  const [accentColor, setAccentColor] = useState(scenes[0].accent);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(N - 1, Math.floor(v * N));
    setAccentColor(scenes[idx].accent);
  });

  // Scroll hint fades out after first 5% of scroll
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <div
      ref={containerRef}
      id="source"
      style={{ height: `${(N + 1) * 100}vh`, position: "relative" }}
    >
      {/* ── Sticky viewport ──────────────────────────────────────────────── */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ background: "#020b18" }}
      >
        {/* Ambient radial glow — shifts with scene accent */}
        <motion.div
          animate={{
            background: `radial-gradient(ellipse 55% 55% at 68% 50%, ${accentColor}20 0%, transparent 70%)`,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
        />
        {/* Top-left secondary glow */}
        <div
          className="absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full opacity-[0.12] pointer-events-none blur-[130px]"
          style={{ background: accentColor, transition: "background 1.2s ease" }}
        />

        {/* ── Main layout: text left | bottle right ─────────────────────── */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left — crossfading text panels */}
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

          {/* Right — bottle with scroll parallax */}
          <div className="relative h-full">
            <BottleImage scrollYProgress={scrollYProgress} />
          </div>
        </div>

        {/* ── Progress bar (bottom) ─────────────────────────────────────── */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {scenes.map((_, idx) => (
            <ProgressDot key={idx} idx={idx} scrollYProgress={scrollYProgress} />
          ))}
        </div>

        {/* ── Scroll hint ───────────────────────────────────────────────── */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-10 right-[calc(50%_-_20px)] flex flex-col items-center gap-2 pointer-events-none z-10"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/30">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}
