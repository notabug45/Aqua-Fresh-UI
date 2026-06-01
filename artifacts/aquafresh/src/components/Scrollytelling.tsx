import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Scene 1: Bottle emerging
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const scene1Y = useTransform(scrollYProgress, [0, 0.15], [100, 0]);

  // Scene 2: Camera zooms in
  const scene2Opacity = useTransform(scrollYProgress, [0.15, 0.25, 0.35], [0, 1, 0]);
  const scene2Scale = useTransform(scrollYProgress, [0.15, 0.3], [0.8, 1.2]);

  // Scene 3: Nutrient particles
  const scene3Opacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 1, 0]);

  // Scene 4: Filtration
  const scene4Opacity = useTransform(scrollYProgress, [0.45, 0.55, 0.65], [0, 1, 0]);

  // Scene 5: Water level
  const scene5Opacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8], [0, 1, 0]);

  // Scene 6: Quality stamp
  const scene6Opacity = useTransform(scrollYProgress, [0.75, 0.85, 0.95], [0, 1, 0]);

  // Scene 7: Multiple bottles
  const scene7Opacity = useTransform(scrollYProgress, [0.9, 0.95, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} style={{ position: "relative" }} className="h-[700vh] bg-background" id="source">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />

        {/* Scene 1 */}
        <motion.div style={{ opacity: scene1Opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <motion.div style={{ y: scene1Y, background: "linear-gradient(145deg, hsl(195 85% 94%), hsl(200 60% 86%))" }} className="w-32 h-64 border border-primary/40 rounded-[60px] flex items-center justify-center mb-8 relative overflow-hidden shadow-xl">
             <div className="absolute bottom-0 w-full h-[60%]" style={{ background: "linear-gradient(to top, hsl(195 85% 65% / 0.4), hsl(195 85% 75% / 0.15))" }} />
             <div className="absolute top-4 w-20 h-4 rounded-b-xl" style={{ background: "hsl(195 50% 75%)" }} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Born From Pure Sources</h2>
          <p className="text-muted-foreground max-w-md text-lg">Untouched mountain springs provide the foundation for perfect hydration.</p>
        </motion.div>

        {/* Scene 2 */}
        <motion.div style={{ opacity: scene2Opacity, scale: scene2Scale }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-5xl md:text-7xl font-serif text-primary italic mb-4">Cinematic Burst</h2>
          <p className="text-muted-foreground max-w-md text-xl">Every drop awakened.</p>
        </motion.div>

        {/* Scene 3 */}
        <motion.div style={{ opacity: scene3Opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-12">Naturally Enriched</h2>
          <div className="relative w-full max-w-2xl h-64">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-48 border border-white/20 glass rounded-[40px]" />
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-card glass border border-border px-4 py-2 rounded-full text-sm font-medium">Calcium</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-card glass border border-border px-4 py-2 rounded-full text-sm font-medium">Magnesium</div>
              <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-card glass border border-border px-4 py-2 rounded-full text-sm font-medium">Potassium</div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-card glass border border-border px-4 py-2 rounded-full text-sm font-medium">Zinc</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scene 4 */}
        <motion.div style={{ opacity: scene4Opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Multi-Stage Filtration</h2>
          <div className="flex flex-col gap-4 w-full max-w-md">
            {["Sediment Filtration", "Carbon Filtration", "RO Purification", "UV Sterilization", "Ozonization"].map((stage, i) => (
              <div key={i} className="bg-card/50 glass border border-white/10 p-4 rounded-xl flex items-center justify-between">
                <span className="font-serif font-medium text-lg">{stage}</span>
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scene 5 */}
        <motion.div style={{ opacity: scene5Opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="w-40 h-80 border-2 border-primary/20 rounded-[80px] glass overflow-hidden relative mb-8">
            <motion.div 
              className="absolute bottom-0 w-full bg-primary/30 backdrop-blur-md"
              initial={{ height: "0%" }}
              whileInView={{ height: "90%" }}
              transition={{ duration: 2 }}
            />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif">Every Drop Tested</h2>
        </motion.div>

        {/* Scene 6 */}
        <motion.div style={{ opacity: scene6Opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
          <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-8 rotate-12">
            <span className="font-serif text-xl font-bold text-primary">100%<br/>PURE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif mb-4">Certified Excellence</h2>
          <p className="text-muted-foreground max-w-md text-lg">BIS Certified. ISO Certified. Trusted By Thousands.</p>
        </motion.div>

        {/* Scene 7 */}
        <motion.div style={{ opacity: scene7Opacity }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-transparent to-background">
          <h2 className="text-5xl md:text-7xl font-serif mb-12">Ready for You.</h2>
          <div className="flex gap-4 items-end">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className={`border border-white/20 glass rounded-[40px] ${i === 2 ? 'w-32 h-64' : 'w-24 h-48'} relative overflow-hidden`}
              >
                <div className="absolute bottom-0 w-full h-[80%] bg-primary/20" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
