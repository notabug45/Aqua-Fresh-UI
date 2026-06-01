import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 tracking-wider uppercase">
              The Essence of Purity
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-6"
          >
            Pure Water.<br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-foreground">
              Perfected By Nature.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-sans font-light"
          >
            Experience premium hydration delivered fresh to your doorstep. Sourced from pristine mountain springs, enriched with natural minerals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg shadow-[0_0_20px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-300 hover:scale-105 group">
              Order Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-border/50 glass hover:bg-white/20 dark:hover:bg-black/40 text-lg transition-all duration-300 hover:scale-105">
              Explore Our Process
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="relative h-[600px] w-full flex items-center justify-center"
        >
          {/* Premium bottle visual */}
          <div className="relative w-48 h-[500px] rounded-[100px] border border-primary/30 flex items-center justify-center overflow-hidden shadow-2xl"
               style={{ background: "linear-gradient(145deg, hsl(195 85% 95%), hsl(200 60% 88%), hsl(195 85% 92%))" }}>
            {/* Water fill animation */}
            <motion.div 
              className="absolute bottom-0 w-full"
              style={{ background: "linear-gradient(to top, hsl(195 85% 65% / 0.5), hsl(195 85% 75% / 0.2))" }}
              initial={{ height: "0%" }}
              animate={{ height: "78%" }}
              transition={{ duration: 2.5, delay: 1, ease: "easeInOut" }}
            />
            {/* Wave overlay on water fill */}
            <motion.div
              className="absolute w-full h-8"
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{ bottom: "78%", background: "hsl(195 85% 70% / 0.3)", borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
            />
            {/* Label */}
            <div className="absolute top-16 w-32 py-3 border border-primary/40 rounded-xl flex flex-col items-center justify-center font-serif text-[10px] tracking-[0.25em] font-bold text-primary/80 bg-white/60 backdrop-blur-sm z-10">
              <div className="text-base font-bold tracking-widest">AQUA</div>
              <div className="text-[8px] tracking-[0.4em]">FRESH</div>
              <div className="mt-1 text-[7px] tracking-wider text-primary/60">PREMIUM WATER</div>
            </div>
            {/* Reflections */}
            <div className="absolute left-5 top-24 bottom-24 w-2 bg-gradient-to-b from-transparent via-white/60 to-transparent blur-[2px] rounded-full z-10" />
            <div className="absolute right-8 top-32 bottom-32 w-1 bg-gradient-to-b from-transparent via-white/40 to-transparent blur-[1px] rounded-full z-10" />
            {/* Cap */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-10 rounded-b-3xl border border-primary/30 z-10"
                 style={{ background: "linear-gradient(to bottom, hsl(195 50% 80%), hsl(195 50% 70%))" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
