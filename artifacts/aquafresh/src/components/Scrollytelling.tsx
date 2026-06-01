import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { WaterBottleSVG } from "./WaterBottleSVG";

const scenes = [
  {
    id: 1,
    label: "ORIGIN",
    headline: "Born From\nPure Sources",
    sub: "Untouched mountain springs, thousands of feet above sea level — where water is naturally filtered through ancient rock.",
    bg: "from-sky-50 via-blue-50 to-cyan-50",
    accent: "text-sky-600",
    waterLevel: 20,
  },
  {
    id: 2,
    label: "AWAKENING",
    headline: "Every Drop\nAwakened",
    sub: "The moment pure spring water meets light — a cinematic burst of crystal clarity that defines what real water tastes like.",
    bg: "from-cyan-50 via-sky-100 to-blue-50",
    accent: "text-cyan-600",
    waterLevel: 40,
  },
  {
    id: 3,
    label: "MINERALS",
    headline: "Naturally\nEnriched",
    sub: "Essential minerals — Calcium, Magnesium, Potassium, Zinc — that your body craves, delivered in perfect natural balance.",
    bg: "from-blue-50 via-indigo-50 to-sky-50",
    accent: "text-blue-600",
    minerals: ["Calcium", "Magnesium", "Potassium", "Zinc"],
    waterLevel: 55,
  },
  {
    id: 4,
    label: "PURIFICATION",
    headline: "Multi-Stage\nFiltration",
    sub: "Five advanced stages of purification. Each eliminates contaminants the previous stage couldn't catch.",
    bg: "from-sky-50 via-cyan-50 to-teal-50",
    accent: "text-teal-600",
    stages: ["Sediment Filtration", "Carbon Filtration", "RO Purification", "UV Sterilization", "Ozonization"],
    waterLevel: 65,
  },
  {
    id: 5,
    label: "TESTING",
    headline: "Every Drop\nTested",
    sub: "150+ quality parameters tested per batch. Zero compromise. Zero shortcuts. Absolute purity.",
    bg: "from-cyan-50 via-sky-50 to-blue-50",
    accent: "text-sky-600",
    waterLevel: 80,
  },
  {
    id: 6,
    label: "CERTIFIED",
    headline: "Certified\nExcellence",
    sub: "BIS Certified. ISO 9001:2015. Trusted by thousands of families and 5000+ corporate clients across 50 cities.",
    bg: "from-blue-50 via-sky-50 to-cyan-50",
    accent: "text-blue-700",
    badges: ["BIS", "ISO", "FSSAI"],
    waterLevel: 95,
  },
  {
    id: 7,
    label: "YOURS",
    headline: "Ready\nFor You",
    sub: "Choose your size. Schedule your delivery. Taste the difference of truly pure water — right at your doorstep.",
    bg: "from-sky-100 via-cyan-50 to-blue-100",
    accent: "text-primary",
    waterLevel: 88,
  },
];

const TOTAL = scenes.length + 1;

function SceneLayer({
  scene,
  idx,
  scrollYProgress,
}: {
  scene: (typeof scenes)[0];
  idx: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = idx / TOTAL;
  const end = (idx + 1) / TOTAL;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.01), start + 0.06, (start + end) / 2, end - 0.06, end],
    [0, 1, 1, 1, 0]
  );
  const y = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [50, 0, 0, -50]);
  const scale = useTransform(scrollYProgress, [start, start + 0.08, end - 0.08, end], [0.95, 1, 1, 0.97]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${scene.bg}`}
    >
      {/* Progress dots */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className={`text-[11px] font-bold tracking-[0.45em] uppercase ${scene.accent} opacity-80`}>
          {scene.label}
        </span>
        <div className="flex gap-2">
          {scenes.map((_, i) => (
            <div
              key={i}
              className={`rounded-full transition-all ${
                i === idx ? `w-8 h-[3px] ${scene.accent.replace("text-", "bg-")} opacity-90` : "w-2 h-[3px] bg-foreground/15"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 whitespace-pre-line text-foreground">
            {scene.headline}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg font-light leading-relaxed mb-8">
            {scene.sub}
          </p>

          {"minerals" in scene && scene.minerals && (
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {scene.minerals.map((m, i) => (
                <motion.span
                  key={m}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.12 }}
                  className="px-5 py-2 rounded-full border border-primary/35 bg-white/60 backdrop-blur-sm text-primary text-sm font-semibold tracking-wide shadow-sm"
                >
                  {m}
                </motion.span>
              ))}
            </div>
          )}

          {"stages" in scene && scene.stages && (
            <div className="flex flex-col gap-3">
              {scene.stages.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ x: -24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-[11px] font-bold text-primary shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{s}</span>
                  <div className="flex-1 h-px bg-primary/10" />
                </motion.div>
              ))}
            </div>
          )}

          {"badges" in scene && scene.badges && (
            <div className="flex gap-5 mt-2 justify-center lg:justify-start">
              {scene.badges.map((b) => (
                <div
                  key={b}
                  className="w-20 h-20 rounded-full border-2 border-primary bg-white/70 flex items-center justify-center shadow-md"
                >
                  <span className="text-xs font-bold text-primary text-center leading-tight">{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottle */}
        <div className="order-1 lg:order-2 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div
              className="absolute rounded-full blur-[70px]"
              style={{
                width: 220,
                height: 220,
                background: "hsl(195 85% 65% / 0.3)",
                transform: "translateY(20px)",
              }}
            />

            {scene.id === 3 && (
              <>
                {["Ca²⁺", "Mg²⁺", "K⁺", "Zn²⁺"].map((label, i) => {
                  const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
                  const r = 120;
                  return (
                    <motion.div
                      key={label}
                      className="absolute px-3 py-1.5 rounded-full bg-white/90 border border-primary/30 text-xs font-bold text-primary shadow-sm"
                      style={{ left: "50%", top: "50%", x: Math.cos(angle) * r - 20, y: Math.sin(angle) * r - 14 }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
                    >
                      {label}
                    </motion.div>
                  );
                })}
              </>
            )}

            {scene.id === 6 && (
              <motion.div
                className="absolute -top-8 -right-8 w-20 h-20 rounded-full border-[3px] border-primary bg-primary/10 flex items-center justify-center shadow-lg z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-[9px] font-bold text-primary text-center leading-tight">100%<br />PURE</span>
              </motion.div>
            )}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <WaterBottleSVG size="md" animated={false} waterLevel={scene.waterLevel} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll hint on first scene */}
      {idx === 0 && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <span className="text-[11px] tracking-[0.35em] uppercase text-muted-foreground/70">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      )}
    </motion.div>
  );
}

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      id="source"
      style={{ height: `${TOTAL * 100}vh`, position: "relative" }}
      className="bg-background"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {scenes.map((scene, idx) => (
          <SceneLayer key={scene.id} scene={scene} idx={idx} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </div>
  );
}
