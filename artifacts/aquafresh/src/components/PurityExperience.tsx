import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function PurityExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const clipPath = useTransform(scrollYProgress, [0.2, 0.8], ["circle(5% at 50% 50%)", "circle(100% at 50% 50%)"]);

  return (
    <section ref={containerRef} style={{ position: "relative" }} className="h-[200vh]" id="purity">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-0">
          <h2 className="text-3xl md:text-5xl font-serif text-muted-foreground/30">Scroll to reveal purity</h2>
        </div>
        
        <motion.div 
          style={{ clipPath }}
          className="absolute inset-0 bg-primary z-10 flex flex-col items-center justify-center text-primary-foreground"
        >
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white">Pure. Safe. Uncompromised.</h2>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-12">
              Our state-of-the-art laboratory tests every single batch for over 150 potential contaminants. What reaches your glass is nothing short of perfection.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "pH Level", value: "7.4" },
                { label: "TDS", value: "< 50" },
                { label: "Added Minerals", value: "Yes" },
                { label: "Microplastics", value: "0%" }
              ].map((stat, i) => (
                <div key={i} className="p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-md">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm uppercase tracking-wider text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
