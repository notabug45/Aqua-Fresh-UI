import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { WaterBottleSVG } from "./WaterBottleSVG";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#030d1a] via-[#051525] to-[#0a1f35]">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, #0ea5e920 0%, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #06b6d418 0%, transparent 70%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-20">
        {/* Text */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-sky-400 rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-sky-400">
              The Essence of Purity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.08] mb-6 text-white"
          >
            Pure Water.<br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #06b6d4 50%, #0ea5e9 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Perfected By Nature.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg text-white/55 mb-10 max-w-lg leading-relaxed font-light"
          >
            Experience premium hydration delivered fresh to your doorstep. Sourced from pristine
            mountain springs, enriched with natural minerals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="h-14 px-8 rounded-full text-white text-base font-semibold transition-all duration-300 hover:scale-105 group shadow-[0_0_30px_#0ea5e940]"
              style={{ background: "linear-gradient(135deg, #0ea5e9, #06b6d4)" }}
            >
              Order Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(56,189,248,0.25)",
                color: "#7dd3fc",
                background: "rgba(56,189,248,0.05)",
              }}
            >
              Explore Our Process
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex gap-10 mt-14 pt-10 border-t border-white/[0.07]"
          >
            {[
              { value: "150+", label: "Quality checks" },
              { value: "5K+", label: "Corporate clients" },
              { value: "50", label: "Cities served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-serif text-white font-semibold">{stat.value}</div>
                <div className="text-xs text-white/35 tracking-wider uppercase mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottle — SVG with cinematic glow on dark bg */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="relative h-[600px] w-full flex items-center justify-center"
        >
          {/* Multi-layer ambient glow */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.75, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, #0ea5e940 0%, #06b6d420 40%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, #38bdf855 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Floating bottle */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <WaterBottleSVG size="lg" animated waterLevel={75} />
          </motion.div>

          {/* Reflection below bottle */}
          <motion.div
            animate={{ opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 w-24 h-4 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, #38bdf860 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-sky-400 opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
