import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import bottleImg from "@assets/Aqua_Bottle_1780316390467.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-[#020b18] via-[#041222] to-[#071e35]">
      {/* Background atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full"
          style={{
            background: "radial-gradient(circle at 70% 30%, #0ea5e930 0%, #06b6d415 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, #38bdf815 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-screen py-24">
        {/* ── Left: copy ───────────────────────────────────────── */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-sky-400 rounded-full" />
            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-sky-400">
              The Essence of Purity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.06] mb-6 text-white"
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base md:text-lg text-white/55 mb-10 max-w-lg leading-relaxed font-light"
          >
            Experience premium hydration delivered fresh to your doorstep. Sourced from
            pristine mountain springs, enriched with natural minerals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
                border: "1px solid rgba(56,189,248,0.22)",
                color: "#7dd3fc",
                background: "rgba(56,189,248,0.05)",
              }}
            >
              Explore Our Process
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
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

        {/* ── Right: product photo ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
          className="relative flex items-center justify-center h-[580px] lg:h-full"
        >
          {/* Halo glow */}
          <motion.div
            animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.08, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 320,
              height: 320,
              background: "radial-gradient(circle, #0ea5e935 0%, #06b6d418 50%, transparent 75%)",
              filter: "blur(50px)",
            }}
          />

          {/* Product image — floats up/down */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
            style={{ filter: "drop-shadow(0 30px 60px #0ea5e940)" }}
          >
            <img
              src={bottleImg}
              alt="AquaFresh Premium Water Bottle"
              className="h-[520px] w-auto object-contain"
              style={{ maxHeight: "80vh" }}
            />
          </motion.div>

          {/* Floor reflection */}
          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, #38bdf840 0%, transparent 70%)",
              filter: "blur(10px)",
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
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
