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
          {/* Mock bottle representation - in a real app this would be a 3D model */}
          <div className="relative w-48 h-[500px] rounded-[100px] border border-white/40 dark:border-white/10 glass-card flex items-center justify-center overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-gradient-to-tr before:from-white/10 before:to-transparent">
            <motion.div 
              className="absolute bottom-0 w-full bg-primary/20 backdrop-blur-sm"
              initial={{ height: "0%" }}
              animate={{ height: "80%" }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            />
            <div className="absolute top-10 w-32 h-16 border border-white/30 rounded-lg flex items-center justify-center font-serif text-xs tracking-[0.2em] font-bold text-foreground">
              AQUAFRESH
            </div>
            {/* Reflections */}
            <div className="absolute left-4 top-20 bottom-20 w-2 bg-gradient-to-b from-white/0 via-white/50 to-white/0 blur-[2px] rounded-full" />
            <div className="absolute right-8 top-30 bottom-30 w-1 bg-gradient-to-b from-white/0 via-white/30 to-white/0 blur-[1px] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
